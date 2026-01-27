const { v4: uuid } = require("uuid");
const service = require("../services/productService");

exports.getAllProducts = (req, res) => {
  res.json({ success: true, data: service.getAll() });
};

exports.getProduct = (req, res) => {
  const product = service.getById(req.params.id);
  if (!product) return res.status(404).json({ success: false, message: "Product not found" });
  res.json({ success: true, data: product });
};

exports.createProduct = (req, res) => {
  const product = {
    id: uuid(),
    ...req.body,
    isActive: req.body.isActive ?? true
  };
  service.create(product);
  res.json({ success: true, data: product });
};

exports.updateProduct = (req, res) => {
  const updated = service.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ success: false, message: "Product not found" });
  res.json({ success: true, data: updated });
};

exports.deleteProduct = (req, res) => {
  service.delete(req.params.id);
  res.json({ success: true });
};
