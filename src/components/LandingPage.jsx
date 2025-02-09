import React from "react";
import {
  SearchBar,
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
import UserImage from "../assets/userprofile.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  
  const products = [
    {
      image: "https://www.zebrs.com/uploads/zebrs/products/1-927694058174310_l.jpg?v=423",
      key: "1",
      name: "Realme Narzo 70 Turbo",
      basePrice: "10,000",
      currentPrice: "70,000",
      expiresOn: "30 February 2025",
    },
  ];

  return (
    <div className="landing_page">
      <div>
        <nav className="top-0 left-0 w-full h-20 py-4 flex justify-between items-center border-b-2">
          <img src={Image3} className="w-[200px] mt-2 -ml-1" alt="Logo" />
          <img
            src={HomeIcon}
            alt="Home Icon"
            className="border border-black h-20 max-w-full justify-center mr-24 cursor-pointer"
          />
          <div className="text-2xl">
            <a href="/add-product">Add Product</a>
          </div>
          <div>
            <img
              src={UserImage}
              className="cursor-pointer h-20 max-w-full"
              alt="User Profile"
            />
          </div>
        </nav>

        <div className="mt-5 border border-black p-4 rounded-lg">
          <SearchBar />
        </div>

        <h1 className="mt-12 font-semibold text-2xl">Explore popular categories</h1>

        <div className="categories_container">
          <FashionCat />
          <MobileCat />
          <ElecCat />
          <LaptopCat />
          <GadgetCat />
          <AccCat />
        </div>

        <h1 className="mt-10 font-semibold text-2xl">Best selling products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <div
              key={product.key}
              className="p-4 border rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/product-detail/${product.key}`, { state: { product } })}
            >
              <img src={product.image} alt={product.name} className="w-40 mx-auto" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">Base Price: {product.basePrice}</p>
              <p className="text-green-600 font-bold">Current Price: {product.currentPrice}</p>
              <p className="text-red-500 font-medium">Expires On: {product.expiresOn}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
