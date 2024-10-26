const express = require("express");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const WishListController = require("../controllers/WishListController");
const CartListController = require("../controllers/CartListController");
const InvoiceController = require("../controllers/InvoiceController");
const FeaturesController = require("../controllers/FeaturesController");


const AuthVerification = require("../middlewares/AuthVerification");
const {FeaturesList} = require("../controllers/FeaturesController");
const router = express.Router();

// Products API
router.get("/ProductBrandList", ProductController.ProductBrandList);
router.get("/ProductCategoryList", ProductController.ProductCategoryList);
router.get("/ProductSliderList", ProductController.ProductSliderList);
router.get("/ProductListByBrand/:BrandID", ProductController.ProductListByBrand);
router.get("/ProductListByCategory/:CategoryID", ProductController.ProductListByCategory);
router.get("/ProductListBySimilar/:CategoryID", ProductController.ProductListBySimilar);
router.get("/ProductListByKeyword/:Keyword", ProductController.ProductListByKeyword);
router.get("/ProductListByRemark/:Remark", ProductController.ProductListByRemark);
router.get("/ProductDetails/:ProductID", ProductController.ProductDetails);
router.get("/ProductReviewList/:ProductID", ProductController.ProductReviewList);

// User API
router.get("/UserOTP/:email", UserController.UserOTP);
router.get("/VerifyOTP/:email/:otp", UserController.VerifyOTP);
router.get("/UserLogout", AuthVerification, UserController.UserLogout);

router.post("/CreateProfile", AuthVerification, UserController.CreateProfile);
router.post("/UpdateProfile", AuthVerification, UserController.UpdateProfile);
router.get("/ReadProfile", AuthVerification, UserController.ReadProfile);

// Wish List API
router.get("/WishList", AuthVerification, WishListController.WishList);
router.post("/SaveWishList", AuthVerification, WishListController.SaveWishList);
router.post("/RemoveWishList", AuthVerification, WishListController.RemoveWishList);

// Cart API
router.get("/CartList", AuthVerification, CartListController.CartList);
router.post("/SaveCartList", AuthVerification, CartListController.SaveCartList);
router.post("/UpdateCartList/:cartID", AuthVerification, CartListController.UpdateCartList);
router.post("/RemoveCartList", AuthVerification, CartListController.RemoveCartList);


//Invoice APIs
router.get("/CreateInvoice", AuthVerification, InvoiceController.CreateInvoice);

router.get("/InvoiceList", AuthVerification, InvoiceController.InvoiceList);
router.get("/InvoiceProductList/:invoice_id", AuthVerification, InvoiceController.InvoiceProductList);

router.post("/PaymentSuccess/:trxID", InvoiceController.PaymentSuccess);
router.post("/PaymentCancel/:trxID", InvoiceController.PaymentCancel);
router.post("/PaymentFail/:trxID", InvoiceController.PaymentFail);
router.post("/PaymentIPN/:trxID", InvoiceController.PaymentIPN);

//Features
router.get("/FeaturesList", FeaturesController.FeaturesList);



module.exports = router;
