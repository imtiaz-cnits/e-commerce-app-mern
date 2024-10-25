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
    const email = req.params.email.toLowerCase(); // Consistent casing
    const otp = req.params.otp;

    // Find user by email and OTP
    const user = await UserModel.findOne({ email: email, otp: otp });

    // Check if a matching user was found
    if (user) {
      // Encode token with user id
      const token = EncodeToken(email, user._id.toString());

      // Reset OTP to prevent reuse
      await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });

      return {
        status: "success",
        message: "Valid OTP",
        token: token,
      };
    } else {
      return {
        status: "fail",
        message: "Invalid OTP",
      };
    }
  } catch (e) {
    console.error("Error in OTP verification:", e); // Log the error
    return {
      status: "fail",
      message: "An error occurred during OTP verification",
    };
  }
};

const SaveProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.user_id = user_id;
    await ProfileModel.updateOne(
      { userID: user_id },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: "Success", message: "Profile Save Successfully" };
  } catch (e) {
    return { status: "fail", message: "Something went wrong.." };
  }
};

const ReadProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let result = await ProfileModel.find({ userID: user_id });
    return { status: "Success", data: result };
  } catch (e) {
    return { status: "fail", message: "Something went wrong.." };
  }
};

module.exports = {
  UserOTPService,
  VerifyOTPService,
  SaveProfileService,
  ReadProfileService,
};
