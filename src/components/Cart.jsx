import React, { useState, useEffect } from 'react';
import ProgressSteps from './ProgressSteps';
import CartItem from './CartItem';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponMessage, setCouponMessage] = useState('');

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    calculateSubtotal(savedCart);
  }, []);

  const calculateSubtotal = (cartItems) => {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return sum + (price * (item.quantity || 1));
    }, 0);
    setSubtotal(total);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  const handleShippingChange = (e) => {
    setShippingCost(parseFloat(e.target.value));
  };

  const applyCoupon = () => {
    const validCoupons = ['SAVE10', 'WELCOME20', 'FIRST15'];
    
    if (validCoupons.includes(couponCode.toUpperCase())) {
      setCouponApplied(true);
      setCouponMessage('Coupon applied successfully!');
      setTimeout(() => setCouponMessage(''), 3000);
    } else {
      setCouponApplied(false);
      setCouponMessage('Invalid coupon code');
      setTimeout(() => setCouponMessage(''), 3000);
    }
  };

  const total = couponApplied ? (subtotal + shippingCost) * 0.9 : subtotal + shippingCost;

  return (
    <div className="container py-5">
      {/* Progress Steps */}
      <div className="row justify-content-center">
        <div className="col-12">
          <h1 className="text-center mb-1 cart-title">Cart</h1>
        </div>
      </div>

      <ProgressSteps currentStep={1} />

      {/* Cart Content */}
      <div className="row">
        {/* Left column: Cart items */}
        <div className="col-lg-8 mb-4">
          {cart.length === 0 ? (
            <div className="empty-cart-state text-center">
              <p className="empty-cart-message">Your cart is empty.</p>
            </div>
          ) : (
            <>
              <div className="cart-table-container">
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>PRODUCT</th>
                      <th className="text-center">QUANTITY</th>
                      <th className="text-end">PRICE</th>
                      <th className="text-end">SUBTOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <CartItem 
                        key={index}
                        item={item}
                        index={index}
                        updateQuantity={updateQuantity}
                        removeItem={removeItem}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Coupon code */}
              <div className="coupon-section mt-5">
                <h6 className="coupon-title">Have a coupon?</h6>
                <p className="coupon-subtitle">Add your code for an instant cart discount</p>
                <div className="coupon-input-group">
                  <input 
                    type="text" 
                    className="coupon-input" 
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button className="coupon-apply-btn" onClick={applyCoupon}>Apply</button>
                </div>
                {couponMessage && (
                  <p className={`coupon-message ${couponApplied ? 'text-success' : 'text-danger'}`}>
                    {couponMessage}
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Right column: Cart summary */}
        <div className="col-lg-4">
          <div className="cart-summary">
            <h5 className="summary-title">Cart summary</h5>

            <div className="shipping-options">
              <div className="shipping-option">
                <input 
                  className="shipping-radio" 
                  type="radio" 
                  name="shipping" 
                  value="0" 
                  checked={shippingCost === 0}
                  onChange={handleShippingChange}
                  id="freeShipping"
                />
                <label className="shipping-label" htmlFor="freeShipping">
                  <span>Free shipping</span>
                  <span className="shipping-price">$0.00</span>
                </label>
              </div>

              <div className="shipping-option">
                <input 
                  className="shipping-radio" 
                  type="radio" 
                  name="shipping" 
                  value="15" 
                  checked={shippingCost === 15}
                  onChange={handleShippingChange}
                  id="expressShipping"
                />
                <label className="shipping-label" htmlFor="expressShipping">
                  <span>Express shipping</span>
                  <span className="shipping-price">+$15.00</span>
                </label>
              </div>

              <div className="shipping-option">
                <input 
                  className="shipping-radio" 
                  type="radio" 
                  name="shipping" 
                  value="21" 
                  checked={shippingCost === 21}
                  onChange={handleShippingChange}
                  id="pickup"
                />
                <label className="shipping-label" htmlFor="pickup">
                  <span>Pick Up</span>
                  <span className="shipping-price">+$21.00</span>
                </label>
              </div>
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <strong id="subtotal-amount">${subtotal.toFixed(2)}</strong>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <strong id="total-amount">${total.toFixed(2)}</strong>
              </div>
            </div>

            <a href="/checkout" className="checkout-link">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;