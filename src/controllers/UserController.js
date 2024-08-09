const {
  UserOTPService,
  VerifyOTPService,
} = require("../services/UserServices");

exports.UserOTP = async (req, res) => {
  let result = await UserOTPService(req);
  return res.status(200).json(result);
};

exports.VerifyLogin = async (req, res) => {
  let result = await VerifyOTPService(req);

  if (result["status"] === "success") {

    // Cookies Option
    let cookieOption = {
      expires: new Date(Date.now() + 24 * 6060 * 1000),
      httpOnly: false,
    };

    // Set Cookie with response
    res.cookie("token", result["token"], cookieOption);
    return res.status(200).json(result);
  } else {
    return res.status(200).json(result);
  }
};
