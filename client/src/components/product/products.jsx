import React from 'react';
import ProductStore from "../../store/ProductStore.js";
import CategoriesSkeleton from "../../skeleton/products-skeleton.jsx";

const Products = () => {

    const {ListByRemark} = ProductStore();

    return (
        <div>

        </div>
    );

};

export default Products;