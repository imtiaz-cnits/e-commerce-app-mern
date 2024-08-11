const EmailSend = require("../utility/EmailHelper");
const UserModel = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");

const { EncodeToken } = require("../utility/TokenHelper");

const UserOTPService = async (req) => {
  try {
    let email = req.params.email;
    let code = Math.floor(100000 + Math.random() * 900000);

    let EmailText = `Your Verification Code is ${code}`;
    let EmailSubject = "Email Verification";

    await EmailSend(email, EmailText, EmailSubject);
    await UserModel.updateOne(
      { email: email },
      { $set: { otp: code } },
      { upsert: true }
    );

    return { status: "Success", message: "Your OTP code has been sent." };
  } catch (e) {
    return { status: "fail", message: e };
  }
};

const VerifyOTPService = async (req) => {
  try {
    let email = req.params.email;
    let otp = req.params.otp;
    let total = await UserModel.find({ email: email, otp: otp }).count("total");

    if (total === 1) {
      let user_id = await UserModel.find({ email: email, otp: otp }).select(
          "_id"
      );
      let token = EncodeToken(email, user_id[0]["_id"].toString());

      await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });

      return {status: "success", message: "Valid OTP", token: token,};
    } else {
      return {status: "fail", message: "Invalid OTP",};
    }
  } catch (e) {
    return {status: "fail", message: "Invalid OTP",};
  }
};

const SaveProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.user_id = user_id;
    await ProfileModel.updateOne(
        {userID: user_id},
        { $set: reqBody},
        { upsert: true }
    );
    return {status: "Success", message: "Profile Save Successfully"};
  }
  catch (e) {
    return {status: "fail", message: "Something went wrong.."};
  }
};

const ReadProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let result = await ProfileModel.find({userID: user_id});
    return {status: "Success", data: result};
  }
  catch (e) {
    return {status: "fail", message: "Something went wrong.."};
  }
}


module.exports = {
  UserOTPService,
  VerifyOTPService,
  SaveProfileService,
  ReadProfileService,
};
