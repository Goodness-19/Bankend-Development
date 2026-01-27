const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../repository/products.json");

// Read/write helper
const read = () => JSON.parse(fs.readFileSync(file, "utf-8"));
const write = (data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

exports.getAll = () => read();

exports.getById = (id) => read().find(p => p.id === id);

exports.create = (product) => {
  const products = read();
  products.push(product);
  write(products);
  return product;
};

exports.update = (id, updates) => {
  const products = read();
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...updates };
  write(products);
  return products[index];
};

exports.delete = (id) => {
  let products = read();
  products = products.filter(p => p.id !== id);
  write(products);
};
