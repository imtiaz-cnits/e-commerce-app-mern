import React from 'react';
import ProductStore from "../../store/ProductStore.jsx";
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