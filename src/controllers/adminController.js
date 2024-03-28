"use strict";
/* -------------------------------------------------------
    EXPRESS -STORE APP
------------------------------------------------------- */
const { Product, Category } = require("../models/productsModel");

//& Category Controller
module.exports.Category = {
  create: async (req, res) => {
    const data = await Category.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data,
    });
  },
  update: async (req, res) => {
    //birinci kısım koşul, ikinci kısım yeni veridir. req.body süslü içinde olmaz default hali süslü içinde
    // runValidators:true update tede validasyon yapmasını sağlar
    const data = await Category.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    //* Modified Data
    const newData = await Category.findOne({ _id: req.params.id });
    // modifiedCount datanın kendisinde var güncelleme yapılmışsa : 1, yapılmamışsa: 0 değeri gelir
    res.status(data.modifiedCount ? 202 : 209).send({
      error: false,
      newData,
      data,
    });
  },
  delete: async (req, res) => {
    const data = await Category.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};

//& Product Controller
module.exports.Product = {
  create: async (req, res) => {
    const data = await Product.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data,
    });
  },
  update: async (req, res) => {
    const data = await Product.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    // Modified Data
    const newData = await Product.findOne({ _id: req.params.id });
    res.status(data.modifiedCount ? 202 : 209).send({
      error: false,
      newData,
      data,
    });
  },
  delete: async (req, res) => {
    const data = await Product.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
