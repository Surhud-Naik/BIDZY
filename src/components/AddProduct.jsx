import React, { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    ProductType: "",
    ProductImage: null,
    ProductDescription: "",
    MSP: "", //minimum selling price
    MRA: "", //minimum raise amount
    SellDate: "",
    SellTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label htmlFor="ProductType">Product Type </label>
          <input
            type="text"
            placeholder="eg. Table, Mobile Phone, Pen, etc"
            name="ProductType"
            value={formData.ProductType}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ProductImage">Product Image</label>
          <input
            type="file"
            name="ProductImage"
            accept="image/*"
            value={formData.ProductImage}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ProductDescription">Product Description</label>
          <input
            type="text"
            placeholder="Enter Product Description"
            name="ProductDescription"
            value={formData.ProductDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="MSP">Minimum Selling Price</label>
          <input
            type="text"
            placeholder="Initial price of Product"
            name="MSP"
            value={formData.MSP}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="MRA">Minimum raise amount</label>
          <input
            type="text"
            placeholder="Minimum raise"
            name="MRA"
            value={formData.MRA}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="SellDate">Sell Date</label>
          <input
            type="date"
            name="SellDate"
            value={formData.SellDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="SellTime">Sell Time</label>
          <input
            type="time"
            name="SellTime"
            value={formData.SellTime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
