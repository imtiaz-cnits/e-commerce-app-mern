const FeaturesModel = require("../models/FeaturesModel");

const FeaturesListService = async () => {
    try {
        let data = await FeaturesModel.find();
        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString();
    }
}

module.exports={
    FeaturesListService
}