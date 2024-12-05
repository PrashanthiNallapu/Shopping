import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useCart } from "./cartContext";
import "../App.css";

const UseEffectExample = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <>
      <Header />
      <h1 className="heading">Product Details</h1>
      <div className="user-cards-container">
        {products.map((product) => (
          <div className="user-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h5>Title: {product.title}</h5>
            <h6>Price: ${product.price}</h6>
            <h6>Rating Count: {product.rating?.count || "N/A"}</h6>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default UseEffectExample;
