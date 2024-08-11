const mongoose = require('mongoose');
const CartModel = require('../models/CartModel');
const ProfileModel = require('../models/ProfileModel');
const InvoiceModel = require('../models/InvoiceModel');
const InvoiceProductModel = require('../models/InvoiceProductModel');
const PaymentSettingModel = require('../models/PaymentSettingModel');
const ObjectID = mongoose.Types.ObjectId;
const FormData = require("form-data");
const axios = require('axios');

const CreateInvoiceService = async (req) => {}

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
