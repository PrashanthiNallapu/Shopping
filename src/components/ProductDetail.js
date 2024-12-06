import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "./cartContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (response.status === 200) {
        setProduct(response.data);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-left">
        <img src={product.image} alt={product.title} className="product-detail-image" />
      </div>
      <div className="product-detail-right">
        <h1>{product.title}</h1>
        <h2>Price: ${product.price}</h2>
        <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
