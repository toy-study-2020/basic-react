import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss';

import {
    Slide,
    SlideImg,
    SlideInfo,
    SubTitle,
    Title
} from './SliderStyle';

const SliderUnit = ({mainSlider}) => {
    console.log(mainSlider.slide);
    const { slide } = mainSlider;

    var settings = {
        dots: true,   
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {slide.map((item, idx) => 
                <Slide idx={idx} color={item.color}>
                    <SlideImg src={item.url} alt=""/>
                    <SlideInfo>
                        <SubTitle>{item.subTitle}</SubTitle>
                        <Title>{item.title}</Title>
                        <div className="detailInfo">{item.detail}</div>
                    </SlideInfo>
                </Slide>
            )}
        </Slider>
    );
}

export default SliderUnit;
