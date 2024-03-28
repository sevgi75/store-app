"use strict";
/* -------------------------------------------------------
    EXPRESS -STORE APP
------------------------------------------------------- */

const router = require("express").Router();

const { Product, Category } = require("../controllers/productsController");

const { isAdmin } = require("../middlewares/auth");

router.route("/products").post(isAdmin, Product.create);

router
  .route("/products/:id")
  .put(isAdmin, Product.update)
  .patch(isAdmin, Product.update)
  .delete(isAdmin, Product.delete);

router.route("/categories").post(isAdmin, Category.create);

router
  .route("/categories/:id")
  .put(isAdmin, Category.update)
  .patch(isAdmin, Category.update)
  .delete(isAdmin, Category.delete);

module.exports = router;
