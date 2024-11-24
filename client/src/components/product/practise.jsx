import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import ProductStore from "../../store/ProductStore.js";
import BrandsSkeleton from "../../skeleton/brands-skeleton.jsx";

const Brands = () => {
    const { BrandList } = ProductStore();
    console.log("BrandList:", BrandList);

    // Return skeleton if data is loading (BrandList is null)
    if (BrandList === null) {
        return <BrandsSkeleton />;
    }

    // If BrandList is empty, show a fallback message
    if (BrandList.length === 0) {
        return <p>No brands available</p>;
    }

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
                    <span className="bodySmal mb-5 text-center">
                        Explore a World of Choices Across Our Most Popular <br />Shopping Categories
                    </span>
                    {
                        BrandList.map((item, i) => {
                            // Ensure brandImg and brandName exist before trying to render
                            if (!item.brandImg || !item.brandName) {
                                return null; // Skip rendering if brand data is missing
                            }

                            return (
                                <div key={i} className="col-6 col-lg-8r text-center col-md-8r p-2">
                                    <Link to="" className="card h-100 rounded-3 bg-white">
                                        <div className="card-body">
                                            <img alt={item.brandName} className="w-75" src={item.brandImg} />
                                            <p className="bodySmal mt-3">{item.brandName}</p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Brands;
