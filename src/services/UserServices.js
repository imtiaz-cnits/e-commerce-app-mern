const EmailSend = require('../utility/EmailHelper');
const UserModel = require('../models/userModel');
const ProfileModel = require('../models/profileModel');

const {EncodeToken} = require('../utility/TokenHelper');

const UserOTPService = async (req) => {
    try {
        let email = req.params.email;
        let code = Math.floor(100000 + Math.random() * 900000);

        let EmailText = `Your Verification Code is ${code}`;
        let EmailSubject = "Email Verification";

        await EmailSend(email, EmailText, EmailSubject);
        await UserModel.updateOne({email: email}, {$set: {otp: code}}, {upsert: true});

        return {status: "Success", message: "Your OTP code has been sent."};
    }
    catch (e) {
        return {status: "fail", message: e};
    }
};

const VerifyOTPService = async (req) => {
    try {
        let email = req.params.email;
        let otp = req.params.otp;

        // user count
        let total = await UserModel.find({email: email, otp: otp}).count("total");
        if (total === 1) {

            // user ID read
            let user_id = await UserModel.find({email: email, otp: otp}).select("_id");

            // user token create
            let token = EncodeToken(email, user_id[0]["_id"].toString());

            // OTP code update to 0
            await UserModel.updateOne({email: email}, {$set: {otp: "0"}});

            return {status: "Success", message: "Valid OTP", token: token};
        }
        else {
            return {status: "Fail", message: "Invalid OTP"};
        }
    }
    catch (e) {
        return {status: "Fail", message: "Invalid OTP"};
    }
};





module.exports = {
    UserOTPService,
    VerifyOTPService
}