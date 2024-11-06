import React from 'react';
import ProductStore from "../../store/ProductStore.jsx";
import CategoriesSkeleton from "../../skeleton/categories-skeleton.jsx";

const Products = () => {

    const {CategoriesList} = ProductStore();

    if (CategoriesList===null) {
        return <CategoriesSkeleton/>
    }
    else {
        return (
            <div>

            </div>
        );
    }

};

export default Products;