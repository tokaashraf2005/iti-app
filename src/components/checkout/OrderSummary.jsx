// components/checkout/OrderSummary.jsx
import React from 'react';

const OrderSummary = ({
  cart,
  formData,
  handleInputChange,
  handleCouponApply,
  couponMessage,
  subtotal,
  discountPercent,
  discountAmount,
  total,
}) => {
  return (
    <div className="card position-sticky" style={{ top: '20px' }}>
      <div className="card-body p-4">
        <h2 className="h5 mb-4">Order summary</h2>
        <div className="order-items mb-4">
          {cart.map((item, index) => {
            const priceString = item.price?.toString() || '0';
            const price = parseFloat(priceString.replace(/[^0-9.]/g, ''));
            const subtotal = price * (item.quantity || 1);
            
            return (
              <div key={index} className="order-item">
                <div className="item-info">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-quantity">Qty: {item.quantity || 1}</div>
                  </div>
                </div>
                <div className="item-price">${subtotal.toFixed(2)}</div>
              </div>
            );
          })}
        </div>

        <div className="input-group mb-4">
          <input 
            type="text" 
            className="form-control coupon-input" 
            placeholder="Enter code" 
            id="couponCode"
            name="couponCode"
            value={formData.couponCode}
            onChange={handleInputChange}
          />
          <button 
            className="btn coupon-apply-btn" 
            type="button" 
            onClick={handleCouponApply}
          >
            Apply
          </button>
        </div>

        {couponMessage.text && (
          <div className={`alert ${couponMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}>
            {couponMessage.text}
          </div>
        )}

        <div>
          <div className="d-flex justify-content-between mb-2 fw-semibold fs-8 pt-3">
            <span>Shipping</span><span>Free</span>
          </div>
          <div className="d-flex justify-content-between mb-2 fw-semibold fs-8 pt-3 border-top">
            <span>Subtotal</span><span className="subtotal-amount">${subtotal.toFixed(2)}</span>
          </div>
          {discountPercent > 0 && (
            <div className="d-flex justify-content-between mb-2 fw-semibold fs-8 pt-3">
              <span>Discount ({discountPercent}%)</span><span>-${discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="d-flex justify-content-between fw-semibold fs-4 pt-3 border-top">
            <span>Total</span><span className="total-amount">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;