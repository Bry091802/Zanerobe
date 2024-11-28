import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { imgPath } from "@/components/helpers/functions-general";
import { Star } from "lucide-react";
import fill from "./../../../../../node_modules/lodash-es/fill";
import size from "./../../../../../node_modules/lodash-es/size";
import { useParams } from "react-router-dom";
import { newArrivalArray } from "../home/new-arrival-data";

const ProductInfo = () => {
  const { slug } = useParams();

  const getProductInfo = newArrivalArray.filter((item) => item.slug === slug);

  return (
    <>
      <Header />
      <section className="h-[50vh] bg-black bg-[url(http://localhost/vite-zanerobe/public/img/slider-1.jpg)]">

      </section>
      <section className="product-info">
        <div className="container">
          <div className="grid grid-cols-[1fr,_400px] gap-5 mt-10">
            <main>
              <div className="flex gap-5">
                <img
                  src={`${imgPath}/${getProductInfo[0].img1}`}
                  alt=""
                  className="w-1/2"
                />
                <img
                  src={`${imgPath}/${getProductInfo[0].img2}`}
                  alt=""
                  className="w-1/2"
                />
              </div>
            </main>
            <aside>
              <div className="mt-24">
                <h3 className="mb-0">{getProductInfo[0].title}</h3>
                <div className="flex gap-5 items-center">
                  <ul className="flex gap-1 my-2">
                    {Array.from(Array(getProductInfo[0].rating).keys()).map(
                      () => (
                        <li>
                          <Star fill={"black"} size={16} />
                        </li>
                      )
                    )}
                  </ul>
                  <p>Reviews (100)</p>
                </div>

                <h5 className="mb-4 text-base font-semibold">
                  Php {getProductInfo[0].price}
                </h5>

                <p className="mb-2">SKU-20232</p>

                <div className="thumbnails flex gap-2 mb-6 flex-wrap">
                  {getProductInfo[0].thumbnails.map((item, key) => (
                    <img
                      src={`${imgPath}/${item}`}
                      alt=""
                      className="size-[100px] rounded-md"
                      key={key}
                    />
                  ))}
                </div>

                <h6 className="mb-2 text-sm">Select Your Sizes</h6>

                <ul className="sizes flex gap-2">
                  {getProductInfo[0].sizes.map((item, key) => (
                    <li
                      className="w-[50px] h-[30px] border border-black flex justify-center items-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                      key={key}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductInfo;
