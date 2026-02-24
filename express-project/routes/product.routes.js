const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.get("/", productController.getProducts);
router.post("/", authMiddleware, productController.createProduct);
router.patch("/:id", authMiddleware, productController.updateProduct);
router.delete("/:id", authMiddleware, productController.deleteProduct);

module.exports = router;