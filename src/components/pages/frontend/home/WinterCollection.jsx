import React from "react";
import { imgPath } from "../../../helpers/functions-general";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from "./CardItem";

const WinterCollection = () => {
  const winterCollectionArray = [
    {
      img1: "na-card-b1.jpg",
      img2: "na-card-a1.jpg",
      title: "Stitched Football Trackpant Indigo",
      price: "7,700.00",
    },
    {
      img1: "na-card-b2.jpg",
      img2: "na-card-a2.jpg",
      title: "Creators Club Lounge Tee Forest",
      price: "4,150.00",
    },
    {
      img1: "na-card-b3.jpg",
      img2: "na-card-a3.jpg",
      title: "Creators Club Lounge Tee Vintage White",
      price: "4,150.00",
    },
    {
      img1: "na-card-b4.jpg",
      img2: "na-card-a4.jpg",
      title: "Beyond Borders Box Tee Black",
      price: "3,600.00",
    },
    {
      img1: "na-card-b5.jpg",
      img2: "na-card-a5.jpg",
      title: "Beyond Borders Box Tee White",
      price: "3,600.00",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    autoplayspeed: 1500,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="new-arrival py-10">
      <div className="container">
        <Slider {...settings}>
          {winterCollectionArray.map((item, key) => (
            <CardItem item={item} key={key} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WinterCollection;
