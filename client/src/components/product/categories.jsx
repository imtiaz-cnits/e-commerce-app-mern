import React from 'react';
import ProductStore from "../../store/ProductStore.js";
import CategoriesSkeleton from "../../skeleton/categories-skeleton.jsx";

const Categories = () => {

    const {CategoryList} = ProductStore();

    if (CategoryList===null) {
        return <CategoriesSkeleton/>
    }
    else {
        return (
            <div>

            </div>
        );
    }

};

export default Categories;