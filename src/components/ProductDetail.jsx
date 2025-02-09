import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaShoppingCart } from "react-icons/fa";
import Logo from '../assets/Logo.png';

import 'swiper/css';
import 'swiper/css/pagination';

import './productDetail.css';
import { Mousewheel, Pagination } from 'swiper/modules';
function ProductDetailPage() {
    const products = [
        {
          image: 'https://www.zebrs.com/uploads/zebrs/products/1-927694058174310_l.jpg?v=423',
          name: 'Realme Narzo 70 Turbo',
          basePrice: '10,000',
          currentPrice: '70,000',
          expiresOn: '30 February 2025',
        },
        {
          image: 'https://www.zebrs.com/uploads/zebrs/products/1-927694058174310_l.jpg?v=423',
          name: 'Realme Narzo 70 Turbo',
          basePrice: '10,000',
          currentPrice: '70,000',
          expiresOn: '30 February 2025',
        },
        {
          image: 'https://www.zebrs.com/uploads/zebrs/products/1-927694058174310_l.jpg?v=423',
          name: 'Realme Narzo 70 Turbo',
          basePrice: '10,000',
          currentPrice: '70,000',
          expiresOn: '30 February 2025',
        },
        {
          image: 'https://www.zebrs.com/uploads/zebrs/products/1-927694058174310_l.jpg?v=423',
          name: 'Realme Narzo 70 Turbo',
          basePrice: '10,000',
          currentPrice: '70,000',
          expiresOn: '30 February 2025',
        },
      ];
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md px-4 py-2 flex flex-col">
        <div className="flex justify-between items-center px-5 py-3">
          <img src={Logo} alt="" className="w-[200px]" />
          <FaShoppingCart className="text-green-600 text-3xl cursor-pointer" />
        </div>
        <div className="px-4 w-[50%] self-center ">
          <input
            type="text"
            placeholder="Search item"
            className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </header>

      <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
        <div className="flex justify-center mb-6 relative">
        <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        spaceBetween={50}
        mousewheel={true}
        pagination={{
          clickable: true,
          sensitivity: 0.5
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {
            products.map((product, index) => (
                <SwiperSlide key={index}>
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                </SwiperSlide>
            ))
        }
      </Swiper>
      <button className='absolute top-3 right-3 z-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
  Previous Bids
</button>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Apple iPhone 13 (Yellow)</h2>
          <p className="text-gray-600 text-lg mb-4">128 GB storage, A15 Bionic Chip</p>

          <div className="mt-4 text-gray-700">
            <p className="text-3xl font-bold text-green-600">Current Price :- $600</p>
            <p className="text-lg text-gray-500 mb-2">
               Started at $300
            </p>
            <p className="text-lg mt-2 text-red-500 font-semibold">
              Ends in 5d 16h
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 text-lg font-medium transition duration-300">
            Make a Bid
          </button>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 text-lg font-medium transition duration-300">
            Add to Cart
          </button>
        </div>

        <div className="mt-8 space-y-3">
          <details className="bg-gray-50 p-4 rounded-lg shadow">
            <summary className="font-medium text-lg cursor-pointer">Product details</summary>
            <p className="text-gray-700 mt-3">Detailed product description goes here.</p>
          </details>
          <details className="bg-gray-50 p-4 rounded-lg shadow">
            <summary className="font-medium text-lg cursor-pointer">About seller</summary>
            <p className="text-gray-700 mt-3">Seller information goes here.</p>
          </details>
          <details className="bg-gray-50 p-4 rounded-lg shadow">
            <summary className="font-medium text-lg cursor-pointer">Reviews ⭐</summary>
            <p className="text-gray-700 mt-3">Customer reviews go here.</p>
          </details>
        </div>
      </div>

      <footer className="mt-8 text-center text-gray-600 text-lg py-4 bg-gray-50">
        <p>Contact us: +91 1234567890 | support@btdzy.com</p>
      </footer>
    </div>
  );
}

export default ProductDetailPage;