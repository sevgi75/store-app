"use strict";
/* -------------------------------------------------------
    EXPRESS -STORE APP
------------------------------------------------------- */
// $npm i mongoose
// MongoDB Connection:

const mongoose = require("mongoose");

const dbConnection = function () {
  //Connect
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("* DB Connected * "))
    .catch((err) => console.log("* DB Not Connected * ", err));
};

module.exports = {
  mongoose,
  dbConnection,
};