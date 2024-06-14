const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

// Products
router.get("/ProductBrandList", ProductController.ProductBrandList);

module.exports = router;
