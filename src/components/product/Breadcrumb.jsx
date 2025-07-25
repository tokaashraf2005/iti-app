import React from "react";
import '../../styles/product.css';

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <a href="/">Home</a> &gt;
      <a href="/shop">Shop</a> &gt;
      <a href="/shop">Living Room</a> &gt;
      <span className="current">Product</span>
    </div>
  );
}

export default Breadcrumb;