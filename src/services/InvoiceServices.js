const mongoose = require('mongoose');
const CartModel = require('../models/CartModel');
const ProfileModel = require('../models/ProfileModel');
const InvoiceModel = require('../models/InvoiceModel');
const InvoiceProductModel = require('../models/InvoiceProductModel');
const PaymentSettingModel = require('../models/PaymentSettingModel');
const ObjectID = mongoose.Types.ObjectId;
const FormData = require("form-data");
const axios = require('axios');

const CreateInvoiceService = async (req) => {
    let user_id = new ObjectID(req.headers.user_id);
    let cus_email = req.headers.email;

// ================== Step 01: Calculate Total Payable & VAT ==================== //
    let matchStage = {$match: {userID: user_id}};
    let JoinStageProduct = {
    $lookup: {
        from: "products",
        localField: "productID",
        foreignField: "_id",
        as: "product"
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
        }
        else {
            price = parseFloat(element["product"]["price"]);
        }
        totalAmount += parseFloat(element["qty"]) * price;
    });

    let vat = totalAmount * 0.05; //5% VAT
    let payable = totalAmount + vat;


}

const PaymentSuccessService = async (req) => {
    try {

    }
    catch (e) {
        return {status: "fail", message: `Something went wrong.. ${e}`};
    }
}

const PaymentFailService = async (req) => {
    try {

    }
    catch (e) {
        return {status: "fail", message: `Something went wrong.. ${e}`};
    }
}

const PaymentCancelService = async (req) => {
    try {

    }
    catch (e) {
        return {status: "fail", message: `Something went wrong.. ${e}`};
    }
}

const PaymentIPNService = async (req) => {
    try {

    }
    catch (e) {
        return {status: "fail", message: `Something went wrong.. ${e}`};
    }
}

const InvoiceListService = async (req) => {
    try {

    }
    catch (e) {
        return {status: "fail", message: `Something went wrong.. ${e}`};
    }
}

const InvoiceProductListService = async (req) => {
    try {

    }
    catch (e) {
        return {status: "fail", message: `Something went wrong.. ${e}`};
    }
}


module.exports = {
    CreateInvoiceService,
    PaymentSuccessService,
    PaymentFailService,
    PaymentCancelService,
    PaymentIPNService,
    InvoiceListService,
    InvoiceProductListService
}
