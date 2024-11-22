import React from 'react';
import ProductStore from "../../store/ProductStore.js";
import SliderSkeleton from "../../skeleton/slider-skeleton.jsx";

const Slider = () => {

    const {SliderList} = ProductStore();

    if (SliderList===null) {
        return <SliderSkeleton/>
    }
    else {
        return (
            <div>

            </div>
        );
    }
};

export default Slider;