import React from 'react';
import ProductStore from "../../store/ProductStore.jsx";
import BrandsSkeleton from "../../skeleton/brands-skeleton.jsx";

const Brands = () => {

    const {BrandList} = ProductStore();

    if (BrandList===null) {
        return <BrandsSkeleton/>
    }
    else {
        return (
            <div>

            </div>
        );
    }

};

export default Brands;