import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    calculateSubtotal 
  } = useCart();
  
  const [shippingCost, setShippingCost] = useState(0);

  const handleShippingChange = (e) => {
    setShippingCost(parseFloat(e.target.value));
  };

  const total = (parseFloat(calculateSubtotal()) + shippingCost).toFixed(2);

  return (
    <div className="container py-5">
      {/* Checkout Header */}
      <div className="row justify-content-center">
        <div className="col-12">
          <h1 className="text-center mb-1 cart-title">Cart</h1>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="progress-steps">
            <div className="step-container">
              <div className="step active">
                <div className="step-circle"><span className="step-number">1</span></div>
                <span className="step-label">Shopping cart</span>
                <div className="step-underline active"></div>
              </div>

              <div className="step inactive">
                <div className="step-circle"><span className="step-number">2</span></div>
                <span className="step-label">Checkout details</span>
                <div className="step-underline inactive"></div>
              </div>
              
              <div className="step inactive">
                <div className="step-circle"><span className="step-number">3</span></div>
                <span className="step-label">Order complete</span>
                <div className="step-underline inactive"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="row">
        {/* Left column: Cart items */}
        <div className="col-lg-8 mb-4">
          {cart.length === 0 ? (
            <div className="empty-cart-state text-center">
              <p className="empty-cart-message">Your cart is empty.</p>
              <Link to="/shop" className="btn btn-dark">Continue Shopping</Link>
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
                  <tbody id="cart-items">
                    {cart.map((item, index) => {
                      const priceString = item.price?.toString() || '0';
                      const price = parseFloat(priceString.replace(/[^0-9.]/g, ''));
                      const subtotal = price * item.quantity;
                      
                      return (
                        <tr key={index} className="cart-item-row">
                          <td>
                            <div className="cart-item-container">
                              <img src={item.image} alt={item.name} className="cart-item-img" />
                              <div className="cart-item-details">
                                <div className="cart-item-name">{item.name}</div>
                                <button 
                                  className="remove-btn" 
                                  onClick={() => removeFromCart(index)}
                                >
                                  ✕ Remove
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <div className="quantity-controls">
                              <button 
                                className="quantity-btn" 
                                onClick={() => updateQuantity(index, item.quantity - 1)}
                              >
                                −
                              </button>
                              <span className="quantity-display">{item.quantity}</span>
                              <button 
                                className="quantity-btn" 
                                onClick={() => updateQuantity(index, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="text-end price-cell">${price.toFixed(2)}</td>
                          <td className="text-end subtotal-cell">${subtotal.toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Coupon code */}
              <div className="coupon-section mt-5">
                <h6 className="coupon-title">Have a coupon?</h6>
                <p className="coupon-subtitle">Add your code for an instant cart discount</p>
                <div className="coupon-input-group">
                  <input type="text" className="coupon-input" placeholder="Coupon Code" />
                  <button className="coupon-apply-btn">Apply</button>
                </div>
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
                <strong id="subtotal-amount">${calculateSubtotal()}</strong>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <strong id="total-amount">${total}</strong>
              </div>
            </div>

            {cart.length > 0 && (
              <Link to="/checkout" className="checkout-link">Checkout</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;