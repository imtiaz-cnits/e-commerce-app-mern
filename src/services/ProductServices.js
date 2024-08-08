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
        return {status: "Success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const CategoryListService = async () => {
    try {
        let data = await CategoryModel.find();
        return {status: "Success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const SliderListService = async () => {
    try {
        let data = await ProductSliderModel.find();
        return {status: "Success", data: data};
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

        return {status: "Success", data: data};
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

        return {status: "Success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const ListBySimilarService = async () => {
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

        return {status: "Success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};

const ListByKeywordService = async () => {
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

        return {status: "Success", data: data};
    } catch (e) {
        return {status: "Fail", data: e}.toString();
    }
};


// <<<<< ---------- Working Here Now ------------ >>>>>>>

const DetailsService = async () => {
    let ProductID = new ObjectID(req.params.ProductID);
    let MatchStage = {$match: {productID: ProductID}};

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
};

// <<<<< ---------- Working Here Now ------------ >>>>>>>


const ReviewListService = async () => {
};

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
};
