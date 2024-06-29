const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductModel = require("../models/ProductModel");
const ProductDetailModel = require("../models/ProductDetailModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ReviewModel = require("../models/ReviewModel");

const BrandListService = async () => {
  try {
    let data = await BrandModel.find();
    return { status: "Success", data: data };
  }
  catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};

const CategoryListService = async () => {
  try {
    let data = await CategoryModel.find();
    return { status: "Success", data: data };
  }
  catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};

const SliderListService = async () => {
  try {
    let data = await ProductSliderModel.find();
    return { status: "Success", data: data };
  }
  catch (e) {
    return { status: "Fail", data: e }.toString();
  }
};



const ListByBrandService = async () => {};

const ListByCategoryService = async () => {};

const ListBySimilarService = async () => {};

const ListByKeywordService = async () => {};

const ListByRemarkService = async () => {};

const DetailsService = async () => {};

const ReviewListService = async () => {};

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
