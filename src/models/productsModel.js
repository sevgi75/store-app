"use strict";
/* -------------------------------------------------------
    EXPRESS -STORE APP-PRODUCT/CATEGORY MODEL
------------------------------------------------------- */

const { mongoose } = require("../db");
const CategorySchema = new mongoose.Schema(
  {
    // id yi kendisi oluşturuyor
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },

  {
    collection: "category",
    timestamps: true,
    //createdAt, updatedAt 
  }
);

const ProductSchema = new mongoose.Schema(
  {
    // id yi otomatik oluşturuyor
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      //   required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      default: null,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    brand: {
      type: String,
      trim: true,
      required: true,
    },
    thumbnail: {
      type: String,
      trim: true,
    },
    images: {
      type: [String],
    },
  },
  {
    collection: "products",
    timestamps: true,
    //createdAt, updatedAt otomatik olarak.
  }
);

module.exports = {
  Category: mongoose.model("Category", CategorySchema),
  Product: mongoose.model("Product", ProductSchema),
};
