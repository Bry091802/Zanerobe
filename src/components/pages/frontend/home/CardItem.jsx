import { imgPath } from "@/components/helpers/functions-general";
import React from "react";


const CardItem = ({ item, key }) => {
  return (
    <div className="new-arrival-card px-4" key={key}>
      <div className="mb-4 relative group">
        <p className="absolute top-3 bg-white py-1 px-4 ml-3 rounded-full text-[10px] font-bold uppercase z-20 group-hover:opacity-0 transition-opacity">
          New
        </p>
        <img
          src={`${imgPath}/${item.img1}`}
          alt=""
          className="transition-opacity group-hover:opacity-1"
        />
        <img
          src={`${imgPath}/${item.img2}`}
          alt=""
          className="transition-opacity absolute left-0 top-0 group-hover:opacity-0 z-10"
        />
      </div>

      <div className="text-center space-y-4">
        <h6>{item.title}</h6>
        <h6>₱{item.price} PHP</h6>
        <ul className=" flex gap-5 justify-center">
          <li className="tooltip" data-tooltip="In Stock">
            29
          </li>
          <li className="tooltip" data-tooltip="In Stock">
            30
          </li>
          <li className="tooltip" data-tooltip="In Stock">
            31
          </li>
          <li className="tooltip" data-tooltip="In Stock">
            32
          </li>
          <li className="tooltip" data-tooltip="Out of Stock">
            33
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardItem;
