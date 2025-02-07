import React, { useState } from "react";
import Image3 from "../assets/Logo.png";
import UserImage from "../assets/userprofile.png";
import HomeIcon from "../assets/homeicon.png";

function AddProduct() {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    ProductType: "",
    ProductImage: null,
    ImageURL: "",
    ProductDescription: "",
    Quantity: "",
    Condition: "",
    FirstHand: "",
    UsedFor: "",
    BoughtFrom: "",
    Damage: "",
    MSP: "", //minimum selling price
    MRA: "", //minimum raise amount
    SellDate: "",
    SellTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageArray = Array.from(files).map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imageArray).then((imageResults) => {
      setImages(imageResults);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="m-0 p-0">
      <navbar className="top-0 left-0 w-full h-20 text-white py-4 px-5 flex justify-between items-center border-b-2">
        <img src={Image3} className="w-[200px] mt-2 -ml-1"></img>
        <img
          src={HomeIcon}
          alt="homeicon"
          className="h-20 max-w-full justify-center mr-2 cursor-pointer"
        ></img>
        <div>
          <img
            src={UserImage}
            className="cursor-pointer h-20 max-w-full"
            alt="UserImage"
            //onClick
          ></img>
        </div>
      </navbar>

      <div className="mt-10">
        <div className="flex text-4xl -mt-6 mb-7 font-extrabold align-center justify-center ">
          Add Product
        </div>

        <div>
          <form className="" onSubmit={handleSubmit} autoComplete="off">
            <div className="grid grid-cols-3 gap-4 auto-rows-min">
              <div className="ml-4">
                <div className="">
                  <h1 className="italic mb-2">Product Name :</h1>
                  <input
                    className="border-black border rounded-lg w-96 ml-4 mb-4 px-4 py-3 italic"
                    type="text"
                    placeholder="Provide product name"
                    name="ProductType"
                    value={formData.ProductType}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="">
                  <h1 className="italic mb-2">Quantity</h1>
                  <label htmlFor="Quantity"></label>
                  <input
                    type="number"
                    min="0"
                    className="border-black border rounded-lg px-4 w-96 py-3 ml-4 mb-4 italic"
                    placeholder="Enter quantity"
                    name="Quantity"
                    value={formData.Quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <h1 className="italic mb-2">Damage Description :</h1>
                  <label htmlFor="Damage"></label>
                  <input
                    type="text"
                    placeholder="Damage Description(if any)"
                    name="Damage"
                    className="border-black border rounded-lg px-4 w-96 py-3 ml-4 mb-4 italic"
                    value={formData.Damage}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <h1 className="italic mb-2">Starting Bid :</h1>
                  <input
                    type="number"
                    className="border-black border rounded-lg px-4 w-96 py-4 ml-4 mb-4 italic"
                    placeholder="Enter starting bid"
                    name="MSP"
                    value={formData.MSP}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <h1 className="italic mb-2">Minimum Raise Amount :</h1>
                  <label htmlFor="MRA"></label>
                  <input
                    type="number"
                    min="0"
                    className="border-black border rounded-lg px-4 w-96 py-3 ml-4 mb-4 italic"
                    placeholder="Enter minimum raise amount"
                    name="MRA"
                    value={formData.MRA}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="ml-4">
                <div className="">
                  <h1 className="italic mb-2">Product Description :</h1>
                  <label htmlFor="ProductDescription"></label>
                  <textarea
                    className="border-black border rounded-lg w-96 px-4 py-3 h-40 ml-4 mb-4 resize-none italic"
                    type="text"
                    placeholder="Provide product description and details..."
                    name="ProductDescription"
                    value={formData.ProductDescription}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <h1 className="italic mb-2">Condition :</h1>
                  <div className="ml-4 border border-black rounded-lg w-96 pl-4 mb-4">
                    <label htmlFor="new">
                      <input
                        type="radio"
                        id="new"
                        className="mr-2"
                        name="Condition"
                        checked={formData.Condition === "New"}
                        value="New"
                        onChange={handleChange}
                      />
                      Brand New
                    </label>
                    <br />
                    <label htmlFor="used">
                      <input
                        type="radio"
                        className="mr-2"
                        id="used"
                        name="Condition"
                        checked={formData.Condition === "Used"}
                        value="Used"
                        onChange={handleChange}
                      />
                      Used
                    </label>
                    <br />
                    {formData.Condition === "Used" && (
                      <div className="mt-2">
                        <p className="mb-1">
                          Did you buy this item from a retailer?
                        </p>
                        <label className="mr-2" htmlFor="yep">
                          <input
                            type="radio"
                            name="FirstHand"
                            id="yep"
                            value="yes"
                            checked={formData.BoughtFrom === "yes"}
                            onChange={handleChange}
                          />
                          Yes
                        </label>
                        <label htmlFor="nope">
                          <input
                            type="radio"
                            id="nope"
                            name="FirstHand"
                            value="no"
                            checked={formData.BoughtFrom === "no"}
                            onChange={handleChange}
                          />
                          No
                        </label>
                        <div className="mt-2">
                          <label htmlFor="UsedFor">
                            How long have you used it for?
                            <input
                              type="Number"
                              min="0"
                              name="UsedFor"
                              className="border border-black rounded-lg pl-2 mb-2"
                              placeholder="(In months)"
                              value={formData.UsedFor}
                              onChange={handleChange}
                            />
                            <br />
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex float-right flex-col justify-center mb-10 w-96 h-80 mr-16">
                  <div className="align-top w-full overflow-auto border border-black h-64 border-dashed">
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          id="preview"
                          className="w-full h-full object-contain"
                          src={image}
                          alt={`Preview ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="ProductImage"
                      className="ml-36 cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                      Add Image
                    </label>
                    <input
                      type="file"
                      className="hidden"
                      name="ProductImage"
                      id="ProductImage"
                      accept="image/*"
                      multiple
                      value={formData.ProductImage}
                      onChange={handleImageChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="SellDate" className="ml-4">
                    Sell Date:{" "}
                  </label>
                  <input
                    type="date"
                    className="px-4 py-2 border ml-4 mb-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    name="SellDate"
                    value={formData.SellDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="SellTime" className="ml-4">
                    Sell Time:{" "}
                  </label>
                  <input
                    type="time"
                    className="px-4 py-2 border ml-4 mb-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    name="SellTime"
                    value={formData.SellTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-4 py-2 border-2 w-72 font-bold bg-[rgba(62,156,53,255)] text-white rounded-md hover:bg-green-600 shadow-[9px_8px_15px_rgba(0,0,0,0.3)] active:scale-90 transition-transform"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
