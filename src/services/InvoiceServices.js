const mongoose = require("mongoose");
const CartModel = require("../models/CartModel");
const ProfileModel = require("../models/ProfileModel");
const InvoiceModel = require("../models/InvoiceModel");
const InvoiceProductModel = require("../models/InvoiceProductModel");
const PaymentSettingModel = require("../models/PaymentSettingModel");
const ObjectID = mongoose.Types.ObjectId;
const FormData = require("form-data");
const axios = require("axios");

const CreateInvoiceService = async (req) => {
  let user_id = new ObjectID(req.headers.user_id);
  let cus_email = req.headers.email;

  // ================== Step 01: Calculate Total Payable & VAT ==================== //
  let matchStage = { $match: { userID: user_id } };
  let JoinStageProduct = {
    $lookup: {
      from: "products",
      localField: "productID",
      foreignField: "_id",
      as: "product",
    },
  };
  let unwindStage = { $unwind: "$product" };
  let CartProducts = await CartModel.aggregate([
    matchStage,
    JoinStageProduct,
    unwindStage,
  ]);

  let totalAmount = 0;
  CartProducts.forEach((element) => {
    let price;
    if (element["product"]["discount"]) {
      price = parseFloat(element["product"]["discountPrice"]);
    } else {
      price = parseFloat(element["product"]["price"]);
    }
    totalAmount += parseFloat(element["qty"]) * price;
  });

  let vat = totalAmount * 0.05; //5% VAT
  let payable = totalAmount + vat;

  // ================== Step 02: Prepare Customer Details & Shipping ==================== //
  let Profile = await ProfileModel.aggregate([matchStage]);
  let cus_details = `Name: ${Profile[0]["cus_name"]}, Email: ${"cus_email"}, Address: ${Profile[0]["cus_add"]}, Phone: ${Profile[0]["cus_phone"]},`;
  let ship_details = `Name: ${Profile[0]["ship_name"]}, City: ${Profile[0]["ship_city"]}, Address: ${Profile[0]["ship_add"]}, Phone: ${Profile[0]["ship_phone"]},`;

  // ================== Step 03: Transaction & Others ID ==================== //
  let tran_id = Math.floor(10000000 + Math.random() * 90000000);
  let val_id = 0;
  let delivery_status = "pending";
  let payment_status = "pending";

  // ================== Step 04: Create Invoice ==================== //
  let createInvoice = await InvoiceModel.create({
    userID: user_id,
    payable: payable,
    cus_details: cus_details,
    ship_details: ship_details,
    tran_id: tran_id,
    val_id: val_id,
    delivery_status: delivery_status,
    payment_status: payment_status,
    total: totalAmount,
    vat: vat,
  });

  // ================== Step 05: Create Invoice Product ==================== //






  return { status: "success", data: Profile };
};

const PaymentSuccessService = async (req) => {
  try {
  } catch (e) {
    return { status: "fail", message: `Something went wrong.. ${e}` };
  }
};

const PaymentFailService = async (req) => {
  try {
  } catch (e) {
    return { status: "fail", message: `Something went wrong.. ${e}` };
  }
};

const PaymentCancelService = async (req) => {
  try {
  } catch (e) {
    return { status: "fail", message: `Something went wrong.. ${e}` };
  }
};

const PaymentIPNService = async (req) => {
  try {
  } catch (e) {
    return { status: "fail", message: `Something went wrong.. ${e}` };
  }
};

const InvoiceListService = async (req) => {
  try {
  } catch (e) {
    return { status: "fail", message: `Something went wrong.. ${e}` };
  }
};

const InvoiceProductListService = async (req) => {
  try {
  } catch (e) {
    return { status: "fail", message: `Something went wrong.. ${e}` };
  }
};

module.exports = {
  CreateInvoiceService,
  PaymentSuccessService,
  PaymentFailService,
  PaymentCancelService,
  PaymentIPNService,
  InvoiceListService,
  InvoiceProductListService,
};
