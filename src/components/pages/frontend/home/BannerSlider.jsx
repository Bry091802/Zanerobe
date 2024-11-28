import React from "react";
import SliderItem from "./SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplayspeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <section className="banner-slider">
      <Slider {...settings}>
        <SliderItem
          img="slider-1.jpg"
          header="GRAPHIC TEES CAPSULE"
          subheader="NEW DROP"
        />
        <SliderItem
          img="slider-2.jpg"
          header="THE QB LOUNGE TEE"
          subheader="RE-STOCKED WITH NEW COLORS"
        />
        <SliderItem
          img="slider-3.jpg"
          header="STITCHED FOOTBALL TRACKPANTS"
          subheader="LIMITED EDITION ONLINE EXCLUSIVE"
        />
      </Slider>
    </section>
  );
};

export default BannerSlider;
