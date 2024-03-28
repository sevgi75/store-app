"use strict";
/* -------------------------------------------------------
    EXPRESS -STORE APP
------------------------------------------------------- */
const cors = require("cors");
module.exports = function (req, res, next) {
  const corsOptions = {
    origin: "*",
    methods: "POST",
    optionsSuccessStatus: 204,
  };

  cors(corsOptions);
  next();
};
