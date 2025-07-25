// components/checkout/EmptyCartMessage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCartMessage = () => {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h2>Your cart is empty</h2>
        <p>Add some items to your cart before proceeding to checkout.</p>
        <Link to="/shop" className="btn btn-dark">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default EmptyCartMessage;