import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/UserProducts.css";
import { Link } from "react-router-dom";

function UserProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1500/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div className="user-products">
      <h2>Available Products</h2>

      <div className="products-grid">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.pr_imageurl}
                alt={product.pr_name}
                className="product-image"
              />
              <h3>
                <Link
                  state={product}
                  to={`/user-home/view/${product.id}`}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  {product.pr_name}
                </Link>
              </h3>
              <p><strong>Category:</strong> {product.pr_category}</p>
              <p><strong>Brand:</strong> {product.pr_brand}</p>
              <p><strong>Price:</strong> ₹{product.pr_price}</p>
              <p><strong>Rating:</strong> ⭐{product.pr_rating}/5</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserProducts;
