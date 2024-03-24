"use strict";
/* -------------------------------------------------------
    EXPRESS -STORE APP-PRODUCT/CATEGORY ROUTES
------------------------------------------------------- */
const router = require("express").Router();

const { Category } = require("../controllers/productsController");
const { Product } = require("../controllers/productsController");

//? Category  Controller
router.route("/categories").get(Category.list);
router.route("/categories/:id").get(Category.read);

//?Product Controller
router.route("/products").get(Product.list);
router.route("/products/:id").get(Product.read);

module.exports = router;