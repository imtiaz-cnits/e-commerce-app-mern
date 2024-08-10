const {
  UserOTPService,
  VerifyOTPService,
} = require("../services/UserServices");

exports.UserOTP = async (req, res) => {
  let result = await UserOTPService(req);
  return res.status(200).json(result);
};

exports.VerifyOTP = async (req, res) => {
  let result = await VerifyOTPService(req);

  if (result["status"] === "success") {
    // cookies option
    let cookieOption = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: false,
    };

    // set cookies with response
    res.cookie("token", result["token"], cookieOption);
    return res.status(200).json(result);
  } else {
    return res.status(200).json(result);
  }
};
