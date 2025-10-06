import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Dashboard.css";

function Dashboard() {
    const [products, setProducts] = useState([]);

    // Fetch products from server when component mounts
    useEffect(() => {
        axios
            .get("http://localhost:1500/products") // Your products JSON server endpoint
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch products:", err);
            });
    }, []);

    return (
        <div className="dashboard-container">
            <h2>All Products</h2>
            <div className="products-grid">
                {products.length === 0 ? (
                    <p>No products added yet.</p>
                ) : (
                    products.map((product, index) => (
                        <div key={index} className="product-card">
                            <img
                                src={product.pr_imageurl}
                                alt={product.pr_name}
                                className="product-image"
                            />
                            <h3><a  style={{textDecoration:"none"}} href="">{product.pr_name}</a></h3>
                            <p><strong>Category:</strong> {product.pr_category}</p>
                            <p><strong>Brand:</strong> {product.pr_brand}</p>
                            <p><strong>Price:</strong> ₹{product.pr_price}</p>
                            <p><strong>Stock:</strong> {product.pr_stock}</p>
                            <p><strong>Rating:</strong> {product.pr_rating}/5</p>
                            <div className="product-buttons">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Dashboard;
