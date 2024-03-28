"use strict";
/* -------------------------------------------------------
    EXPRESS -STORE APP
------------------------------------------------------- */
const { mongoose } = require("../db");
const { Product, Category } = require("../models/productsModel");
const User = require("../models/userModel");

async function seedDatabase() {
  // REMOVE DATABASE
  await mongoose.connection.dropDatabase();
  console.log("database deleted");

  const categories = [
    "Electronic",
    "Furniture",
    "Clothing",
    "Beauty",
    "Jewellery",
  ];

  const users = [];
  for (let i = 1; i <= 35; i++) {
    const email = `user${i}@example.com`;
    const password = `password${i}`;
    users.push({ email, password });
  }
  // admin kullanıcısını da ekleyelim
  users.unshift({ email: "sevgi@se.com", password: "sevgi", isAdmin: true });
  console.log(users);

  // Kategorileri oluşturun
  for (const categoryName of categories) {
    const category = await Category.create({ name: categoryName });
    console.log("Category added:", category.name);
    // Her kategori için 10 ürün oluşturun
    for (let i = 0; i < 10; i++) {
      await Product.create({
        category: category._id,
        title: `${categoryName}_${i}`,
        description: "description",
        price: 2500,
        discountPercentage: 10,
        rating: 50,
        stock: 210,
        brand: "Abc",
        thumbnail: "img",
        images: ["img1", "img2", "img3"],
      });
      console.log(category.name + "e ait ürünler eklendi");
    }
  }
  // Kullanıcıları oluşturun
  for (const user of users) {
    await User.create({
      email: user.email,
      password: user.password,
    });
    console.log("User added:", user.email);
  }
  // Senkronizasyon tamamlandı
  console.log("* Synchronized *");
}
seedDatabase().catch((err) => {
  console.error(err);
  process.exit(1);
});
