import React from "react";
import {
  SearchBar,
  ProductCard,
  FashionCat,
  MobileCat,
  ElecCat,
  AccCat,
  GadgetCat,
  LaptopCat,
} from "./AllComponents.jsx";
import "./style.css";
import Image3 from "../assets/Logo.png";
import HomeIcon from "../assets/homeicon.png";
import UserImage from "..//assets/userprofile.png";

function LandingPage() {
    const product = [{
        image: 'https://www.zebrs.com/uploads/zebrs/products/1-927694058174310_l.jpg?v=423',
        name: 'Realme Narzo 70 Turbo',
        basePrice: '10,000',
        currentPrice: '70,000',
        expiresOn: '30 February 2025',
      }]
  return (
    <div className="landing_page">
      <div>
        <navbar className="top-0 left-0 w-full h-20 py-4 flex justify-between items-center border-b-2">
          <img src={Image3} className="w-[200px] mt-2 -ml-1"></img>
          <img
            src={HomeIcon}
            alt="homeicon"
            className="border border-black h-20 max-w-full justify-center mr-24 cursor-pointer"
          ></img>
          <div className="text-2xl">
            <a href="/add-product">Add Product</a>
          </div>
          <div>
            <img
              src={UserImage}
              className="cursor-pointer h-20 max-w-full"
              alt="UserImage"
              //onClick
            ></img>
          </div>
        </navbar>

        <div
          style={{
            marginTop: "20px",
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <SearchBar />
        </div>
        <div>
          <h1
            className="titles"
            style={{
              marginTop: "50px",
              fontFamily: "afacad",
              fontWeight: "600",
              fontSize: "25px",
              height: "24px",
            }}
          >
            Explore popular categories
          </h1>
        </div>
        <div className="categories_container">
          <FashionCat />
          <MobileCat />
          <ElecCat />
          <LaptopCat />
          <GadgetCat />
          <AccCat />
        </div>
        <div>
          <h1
            style={{
              marginBottom: "30px",
              marginTop: "40px",
              fontFamily: "afacad",
              fontWeight: "600",
              fontSize: "25px",
              height: "24px",
            }}
          >
            Best selling products
          </h1>
        </div>
        <div className="cards">
          <ProductCard />
          <ProductCard />
          <ProductCard /> <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;