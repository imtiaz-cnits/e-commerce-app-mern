import React from 'react';
import Layout from "../components/layout/layout.jsx";
import SliderSkeleton from "../skeleton/slider-skeleton.jsx";
import FeaturesSkeleton from "../skeleton/features-skeleton.jsx";
import CategoriesSkeleton from "../skeleton/categories-skeleton.jsx";
import ProductsSkeleton from "../skeleton/products-skeleton.jsx";
import BrandsSkeleton from "../skeleton/brands-skeleton.jsx";

const HomePage = () => {
    return (
        <Layout>
            <SliderSkeleton/>
            <FeaturesSkeleton/>
            <CategoriesSkeleton/>
            <ProductsSkeleton/>
            <BrandsSkeleton/>
        </Layout>
    );
};

export default HomePage;