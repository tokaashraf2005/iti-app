import React, { useEffect } from 'react';
import Breadcrumb from '../components/product//Breadcrumb';
import ProductImages from '../components/product/ProductImages';
import ProductDetails from '../components/product/ProductDetails';
import Recommendations from '../components/product/Recommendations';
import "../styles/product.css";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="product-page my-5">
      <Breadcrumb />
      <div className="container">
        <ProductImages />
        <ProductDetails />
      </div>
      <Recommendations />
    </div>
  );
};

export default ProductPage;