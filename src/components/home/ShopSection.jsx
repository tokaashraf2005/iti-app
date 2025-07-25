import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const handleScrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};

const ShopSection = () => {
  return (
    <section className="shop-section">
      <div className="shop-img">
        <img src="assets/images/SaleUpTo.home.jpg" alt="Furniture" />
      </div>
      <div className="shop-content">
        <p className="shop-offer">Sale up to 35% off</p>
        <h1 className="shop-title">HUNDREDS of<br />New lower prices!</h1>
        <p className="shop-details">
          It's more affordable than ever<br />
          to give every room in your home a stylish makeover
        </p>
        <Link to="/shop" onClick={handleScrollTop} className="shop-btn">
          Shop Now <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default ShopSection;