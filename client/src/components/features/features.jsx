import React from 'react';
import ProductStore from "../../store/ProductStore.jsx";
import FeaturesSkeleton from "../../skeleton/features-skeleton.jsx";

const Features = () => {

    const {FeatureList} = ProductStore();

    if (FeatureList===null) {
        return <FeaturesSkeleton/>
    }
    else {
        return (
            <div>

            </div>
        );
    }

};

export default Features;