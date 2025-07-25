import React from 'react';

const OrderSummary = ({ orderCode, orderDate, totalAmount, paymentMethod }) => {
  return (
    <div className="text-start mx-auto mb-3" style={{ maxWidth: "320px" }}>
      <p className="mb-2 d-flex align-items-center gap-2">
        <strong>Order code:</strong> 
        <span className="order-value">{orderCode}</span>
      </p>
      <p className="mb-0"><strong>Date:</strong> <span className="order-value">{orderDate}</span></p>
      <p className="mb-0"><strong>Total:</strong> <span className="order-value total-amount">{totalAmount}</span></p>
      <p className="mb-0"><strong>Payment method:</strong> <span className="order-value">{paymentMethod}</span></p>
    </div>
  );
};

export default OrderSummary;