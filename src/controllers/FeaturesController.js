const {FeaturesListService} = require("../services/FeaturesServices");

exports.FeaturesList = async (req, res) => {
    let result = await FeaturesListService(req);
    return res.status(200).json(result);
}