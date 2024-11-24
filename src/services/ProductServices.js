const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductModel = require("../models/ProductModel");
const ProductDetailModel = require("../models/ProductDetailModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ReviewModel = require("../models/ReviewModel");
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const BrandListService = async () => {
    try {
        let data = await BrandModel.find();
        return {status: "success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const CategoryListService = async () => {
    try {
        let data = await CategoryModel.find();
        return {status: "success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const SliderListService = async () => {
    try {
        let data = await ProductSliderModel.find();
        return {status: "success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

// For extra URL parameter ID
const ListByBrandService = async (req) => {
    try {
        let BrandID = new ObjectID(req.params.BrandID);

        let MatchStage = {$match: {brandID: BrandID}};
        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };

        let UnwindBrandStage = {$unwind: "$brand"};
        let UnwindCategoryStage = {$unwind: "$category"};

        let ProjectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                brandID: 0,
                categoryID: 0,
            },
        };

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);

        return {status: "success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const ListByCategoryService = async (req) => {
    try {
        let CategoryID = new ObjectID(req.params.CategoryID);

        let MatchStage = {$match: {categoryID: CategoryID}};
        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };

        let UnwindBrandStage = {$unwind: "$brand"};
        let UnwindCategoryStage = {$unwind: "$category"};

        let ProjectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                brandID: 0,
                categoryID: 0,
            },
        };

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);

        return {status: "success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const ListBySimilarService = async (req) => {
    try {
        let CategoryID = new ObjectID(req.params.CategoryID);

        let MatchStage = {$match: {categoryID: CategoryID}};
        let limitStage = {$limit: 20};
        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };

        let UnwindBrandStage = {$unwind: "$brand"};
        let UnwindCategoryStage = {$unwind: "$category"};

        let ProjectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                brandID: 0,
                categoryID: 0,
            },
        };

        let data = await ProductModel.aggregate([
            MatchStage,
            limitStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);

        return {status: "success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const ListByKeywordService = async (req) => {
    try {
        let SearchRegex = {"$regex": req.params.Keyword, "$options": "i"};
        let SearchParams = [{title: SearchRegex}, {shortDes: SearchRegex}];
        let SearchQuery = {$or: SearchParams};

        let MatchStage = {$match: SearchQuery};

        let limitStage = {$limit: 20};
        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };

        let UnwindBrandStage = {$unwind: "$brand"};
        let UnwindCategoryStage = {$unwind: "$category"};

        let ProjectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                brandID: 0,
                categoryID: 0,
            },
        };

        let data = await ProductModel.aggregate([
            MatchStage,
            limitStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);
        return {status: "success", data: data};
    }
    catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const ListByRemarkService = async (req) => {
    try {
        let Remark = req.params.Remark;

        let MatchStage = {$match: {remark: Remark}};
        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };

        let UnwindBrandStage = {$unwind: "$brand"};
        let UnwindCategoryStage = {$unwind: "$category"};

        let ProjectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                brandID: 0,
                categoryID: 0,
            },
        };

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);

        return {status: "success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const DetailsService = async (req) => {
    try {
        let ProductID = new ObjectID(req.params.ProductID);
        let MatchStage = {$match: {_id: ProductID}};

        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        let JoinWithDetailsStage = {
            $lookup: {
                from: "productdetails",
                localField: "_id",
                foreignField: "productID",
                as: "details",
            },
        };

        let UnwindBrandStage = {$unwind: "$brand"};
        let UnwindCategoryStage = {$unwind: "$category"};
        let UnwindDetailsStage = {$unwind: "$details"};

        let ProjectionStage = {$project: { "brand._id": 0, "category._id": 0, brandID: 0, categoryID: 0 }};

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithDetailsStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            UnwindDetailsStage,
            ProjectionStage
        ])

        return {status: "success", data: data};
    }
    catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};


const ReviewListService = async (req) => {
    try {
        let ProductID = new ObjectID(req.params.ProductID);
        let MatchStage = {$match: {productID: ProductID}};
        let JoinWithProfileStage = {
            $lookup: {
                from: "profiles",
                localField: "userID",
                foreignField: "userID",
                as: "profile",
            },
        };
        let UnwindProfileStage = {$unwind : "$profile"};

        let ProjectionStage = {
            $project: {
                'des': 1,
                'rating': 1,
                'profile.cus_name': 1
            }
        };

        let data = await ReviewModel.aggregate([
            MatchStage,
            JoinWithProfileStage,
            UnwindProfileStage,
            ProjectionStage
        ]);

        return {status: "success", data: data};
    }
    catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const CreateReviewService = async (req) => {
    try{
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        let data = await ReviewModel.create({
            productID: reqBody['productID'],
            userID: user_id,
            des: reqBody['des'],
            rating: reqBody['rating'],
        });
        return {status: "success", data: data}
    }
    catch (e) {
        return {status: "fail", data: e.toString()}
    }
}

module.exports = {
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySimilarService,
    ListByKeywordService,
    ListByRemarkService,
    DetailsService,
    ReviewListService,
    CreateReviewService,
};
