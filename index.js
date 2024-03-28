"use strict";
/* -------------------------------------------------------
    EXPRESS -STORE APP
------------------------------------------------------- */

// npm init -y
// $ npm i express dotenv express-async-errors cors
//  npm i cookie-session

const express = require("express");
const app = express();
/* ------------------------------------------------------- */
// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
//db connect
// Burası dotenv den sonra olmalı
const { dbConnection } = require("./src/db");
dbConnection();
/* ------------------------------------------------------- */
// JSON
app.use(express.json());

/* ------------------------------------------------------- */

// session-cookie
const session = require("cookie-session");
app.use(
  session({
    secret: process.env.SECRET_KEY, // şifreleme anahtarı
    // maxAge: 1000 * 60 * 60 * 24 * 3  // miliseconds // 3 days
  })
);
/* ------------------------------------------------------- */
// Middlewares:

//* Cors integration
const getCors = require("./src/middlewares/getCors");
const postCors = require("./src/middlewares/postCors");

// find search sort page: rotes ların üstünde olmalı.
app.use(require("./src/middlewares/findSearchSortPage"));
/* ------------------------------------------------------- */
// Routes:
// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PERSONNEL API",
    session: req.session,
    isLogin: req.isLogin,
  });
});

/* ------------------------------------------------------- */
// Routes operations:
app.use(require("./src/routes/productsRoutes"));
app.use("/users", require("./src/routes/userRoutes"));
app.use("/admin", require("./src/routes/adminRoutes"));

/* ------------------------------------------------------- */
//errorHandler:
app.use(require("./src/errorHandler"));

/* ------------------------------------------------------- */
// Running Server:
app.listen(PORT, () =>
  console.log(`Server Running on http://127.0.0.1:${PORT}`)
);

/* ------------------------------------------------------- */
// Syncronization
require("./src/helpers/sync");
