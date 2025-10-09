import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import '../Styles/UpdateProduct.css';

function UpdateDetails() {

  const [product, setProduct] = useState({
    pr_name: "",
    pr_category: "",
    pr_brand: "",
    pr_price: "",
    pr_desc: "",
    pr_imageurl: "",
    pr_stock: "",
    pr_rating: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Categories
  let pr_category = [
    "Electronics",
    "Fashion",
    "Home Appliances",
    "Beauty & Personal Care",
    "Books",
    "Sports & Fitness",
    "Groceries",
    "Toys & Games"
  ];

  // Brands
  let pr_brand = [
    "Samsung",        // Electronics
    "Nike",           // Fashion
    "Whirlpool",      // Home Appliances
    "Maybelline",     // Beauty & Personal Care
    "Penguin",        // Books
    "Nike",           // Sports & Fitness
    "Haldiram's",     // Groceries
    "Lego"            // Toys & Games
  ];

  let param = useParams();
  console.log(param.id);

  // Fetching previous data
  useEffect(() => {
    axios.get(`http://localhost:1500/products/${param.id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.id]); 

  // Updating product
  function update_item(e) {
    e.preventDefault();
    axios.put(`http://localhost:1500/products/${param.id}`, product)
      .then((res) => {
        console.log(res);
        toast.success("Product updated successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update product");
      });
  }

  return (
    <div className="updateproduct">
      <h2>Update Product</h2>
      <form onSubmit={update_item}>
        <label>Product Name:</label>
        <input
          type="text"
          name="pr_name"
          value={product.pr_name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
        />

        <label>Category:</label>
        <select
          onChange={handleChange}
          value={product.pr_category}
          name="pr_category"
        >
          {pr_category.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>

        <label>Brand:</label>
        <select
          onChange={handleChange}
          value={product.pr_brand}
          name="pr_brand"
        >
          {pr_brand.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>

        <label>Price:</label>
        <input
          type="number"
          name="pr_price"
          value={product.pr_price}
          onChange={handleChange}
          placeholder="Enter product price"
          required
        />

        <label>Description:</label>
        <textarea
          name="pr_desc"
          value={product.pr_desc}
          onChange={handleChange}
          placeholder="Enter product description"
          rows="3"
          required
        ></textarea>

        <label>Image URL:</label>
        <input
          type="text"
          name="pr_imageurl"
          value={product.pr_imageurl}
          onChange={handleChange}
          placeholder="Enter product image URL"
          required
        />

        <label>Stock:</label>
        <input
          type="number"
          name="pr_stock"
          value={product.pr_stock}
          onChange={handleChange}
          placeholder="Enter available stock"
          required
        />

        <label>Rating:</label>
        <input
          type="number"
          name="pr_rating"
          value={product.pr_rating}
          onChange={handleChange}
          placeholder="Enter rating (1–5)"
          min="1"
          max="5"
          required
        />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateDetails;
