import React from 'react';
import FeatureStore from "../../store/FeatureStore.js";
import FeaturesSkeleton from "../../skeleton/features-skeleton.jsx";

const Features = () => {

    const {FeatureList} = FeatureStore();

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