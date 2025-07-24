import React, { useState, useEffect } from 'react';
import ProgressSteps from './ProgressSteps';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    streetAddress: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
    payment: 'credit',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    couponCode: ''
  });
  const [errors, setErrors] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpirationDate = (value) => {
    const v = value.replace(/^([1-9]\/|[2-9])$/g, '0$1/')
      .replace(/^(0[1-9]|1[0-2])$/g, '$1/')
      .replace(/^([0-1])([3-9])$/g, '0$1/$2')
      .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2')
      .replace(/^([0]+)\/|[0]+$/g, '0')
      .replace(/[^\d\/]|^[\/]*$/g, '')
      .replace(/\//g, '/');
    return v;
  };

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!/^[A-Za-z\s]{2,50}$/.test(value)) {
          error = 'Please enter a valid name (2-50 characters, letters only)';
        }
        break;
      case 'phoneNumber':
        if (!/^[\+]?[0-9\s\-\(\)]{10,15}$/.test(value)) {
          error = 'Please enter a valid phone number (10-15 digits)';
        }
        break;
      case 'emailAddress':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'streetAddress':
        if (value.length < 5 || value.length > 100) {
          error = 'Please enter a valid street address (5-100 characters)';
        }
        break;
      case 'country':
        if (!value) {
          error = 'Please select a country';
        }
        break;
      case 'city':
        if (!/^[A-Za-z\s\-]{2,50}$/.test(value)) {
          error = 'Please enter a valid city name (2-50 characters)';
        }
        break;
      case 'state':
        if (value.length < 2 || value.length > 50) {
          error = 'Please enter a valid state';
        }
        break;
      case 'zipCode':
        if (!/^[0-9A-Za-z\s\-]{3,10}$/.test(value)) {
          error = 'Please enter a valid zip code';
        }
        break;
      case 'cardNumber':
        if (formData.payment === 'credit') {
          const cardNum = value.replace(/\s/g, '');
          if (!/^[0-9]{13,19}$/.test(cardNum) || !isValidCardNumber(cardNum)) {
            error = 'Please enter a valid card number (13-19 digits)';
          }
        }
        break;
      case 'expirationDate':
        if (formData.payment === 'credit' && (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(value) || !isValidExpirationDate(value))) {
          error = 'Please enter expiration date in MM/YY format';
        }
        break;
      case 'cvc':
        if (formData.payment === 'credit' && !/^[0-9]{3,4}$/.test(value)) {
          error = 'Please enter a valid CVC (3-4 digits)';
        }
        break;
    }

    setErrors({
      ...errors,
      [name]: error
    });

    return !error;
  };

  const isValidCardNumber = (cardNumber) => {
    // Luhn algorithm implementation
    let sum = 0;
    let shouldDouble = false;
    
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));
      
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    
    return sum % 10 === 0;
  };

  const isValidExpirationDate = (dateString) => {
    const [month, year] = dateString.split('/');
    const expDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
    const currentDate = new Date();
    currentDate.setDate(1);
    return expDate >= currentDate;
  };

  const applyCoupon = () => {
    const validCoupons = ['SAVE10', 'WELCOME20', 'FIRST15'];
    const couponCode = formData.couponCode.toUpperCase();
    
    if (validCoupons.includes(couponCode)) {
      setCouponApplied(true);
      // Show success message (you can implement a toast or alert)
      alert(`Coupon applied! You got ${couponCode === 'SAVE10' ? '10%' : couponCode === 'WELCOME20' ? '20%' : '15%'} discount`);
    } else {
      setCouponApplied(false);
      alert('Invalid coupon code');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate all fields
    let isValid = true;
    const newErrors = {};
    
    Object.keys(formData).forEach(key => {
      if (key === 'couponCode') return;
      
      if (formData.payment === 'paypal' && ['cardNumber', 'expirationDate', 'cvc'].includes(key)) {
        return;
      }
      
      if ((key !== 'cardNumber' && key !== 'expirationDate' && key !== 'cvc') || formData.payment === 'credit') {
        if (!validateField(key, formData[key])) {
          isValid = false;
          newErrors[key] = errors[key];
        }
      }
    });
    
    setErrors(newErrors);
    
    if (!isValid) {
      setIsSubmitting(false);
      // Scroll to first error
      const firstError = Object.keys(newErrors).find(key => newErrors[key]);
      if (firstError) {
        document.getElementById(firstError)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
      return;
    }
    
    // Proceed with submission
    setTimeout(() => {
      // Save order details (you can implement this)
      localStorage.setItem('orderDetails', JSON.stringify({
        ...formData,
        cart,
        total: couponApplied ? subtotal * 0.9 : subtotal
      }));
      
      // Clear cart
      localStorage.removeItem('cart');
      
      // Redirect to order confirmation
      window.location.href = '/order-confirmation';
    }, 1000);
  };

  const total = couponApplied ? subtotal * 0.9 : subtotal;

  return (
    <div className="container">
      <form id="checkout-form" onSubmit={handleSubmit} noValidate>
        <div className="row g-5">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* Progress Steps */}
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <h1 className="text-center mb-5 cart-title mt-4">Checkout</h1>
                <ProgressSteps currentStep={2} />
              </div>
            </div>

            {/* Contact Info */}
            <div className="checkout-box">
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h2 className="h5 mb-4">Contact Information</h2>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-uppercase small fw-semibold" htmlFor="firstName">First Name *</label>
                      <input 
                        type="text" 
                        className={`form-control rounded p-2 ${errors.firstName ? 'is-invalid' : ''}`}
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('firstName', e.target.value)}
                        placeholder="First Name"
                        required
                      />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-uppercase small fw-semibold" htmlFor="lastName">Last Name *</label>
                      <input 
                        type="text" 
                        className={`form-control rounded p-2 ${errors.lastName ? 'is-invalid' : ''}`}
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('lastName', e.target.value)}
                        placeholder="Last Name"
                        required
                      />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                    <div className="col-12">
                      <label className="form-label text-uppercase small fw-semibold" htmlFor="phoneNumber">Phone Number *</label>
                      <input 
                        type="tel" 
                        className={`form-control rounded p-2 ${errors.phoneNumber ? 'is-invalid' : ''}`}
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('phoneNumber', e.target.value)}
                        placeholder="Phone Number"
                        required
                      />
                      {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                    </div>
                    <div className="col-12">
                      <label className="form-label text-uppercase small fw-semibold" htmlFor="emailAddress">Email Address *</label>
                      <input 
                        type="email" 
                        className={`form-control rounded p-2 ${errors.emailAddress ? 'is-invalid' : ''}`}
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('emailAddress', e.target.value)}
                        placeholder="Email Address"
                        required
                      />
                      {errors.emailAddress && <div className="invalid-feedback">{errors.emailAddress}</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="checkout-box">
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h2 className="h5 mb-4">Shipping Address</h2>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label text-uppercase small fw-semibold" htmlFor="streetAddress">Street Address *</label>
                      <input 
                        type="text" 
                        className={`form-control rounded p-2 ${errors.streetAddress ? 'is-invalid' : ''}`}
                        id="streetAddress"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('streetAddress', e.target.value)}
                        placeholder="Street Address"
                        required
                      />
                      {errors.streetAddress && <div className="invalid-feedback">{errors.streetAddress}</div>}
                    </div>
                    <div className="col-12">
                      <label className="form-label text-uppercase small fw-semibold" htmlFor="country">Country *</label>
                      <select 
                        className={`form-select ${errors.country ? 'is-invalid' : ''}`}
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('country', e.target.value)}
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                      </select>
                      {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-uppercase small fw-semibold" htmlFor="city">Town / City *</label>
                      <input 
                        type="text" 
                        className={`form-control rounded p-2 ${errors.city ? 'is-invalid' : ''}`}
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('city', e.target.value)}
                        placeholder="Town / City"
                        required
                      />
                      {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-uppercase small fw-semibold" htmlFor="state">State *</label>
                      <input 
                        type="text" 
                        className={`form-control rounded p-2 ${errors.state ? 'is-invalid' : ''}`}
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('state', e.target.value)}
                        placeholder="State"
                        required
                      />
                      {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-uppercase small fw-semibold" htmlFor="zipCode">Zip Code *</label>
                      <input 
                        type="text" 
                        className={`form-control rounded p-2 ${errors.zipCode ? 'is-invalid' : ''}`}
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('zipCode', e.target.value)}
                        placeholder="Zip Code"
                        required
                      />
                      {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
                    </div>
                    <div className="col-12">
                      <div className="form-check mt-3">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="different-billing" 
                        />
                        <label className="form-check-label" htmlFor="different-billing">
                          Use a different billing address (step 2)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="checkout-box">
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h2 className="h5 mb-4">Payment method</h2>
                  <div className="mb-4">
                    <div className="form-check p-3 border rounded mb-3">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="payment" 
                        id="creditCard" 
                        value="credit" 
                        checked={formData.payment === 'credit'}
                        onChange={handleInputChange}
                        required 
                      />
                      <label className="form-check-label flex-grow-1" htmlFor="creditCard">Pay by Card Credit</label>
                    </div>
                    <div className="form-check p-3 border rounded">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="payment" 
                        id="paypal" 
                        value="paypal" 
                        checked={formData.payment === 'paypal'}
                        onChange={handleInputChange}
                        required 
                      />
                      <label className="form-check-label" htmlFor="paypal">Paypal</label>
                    </div>
                    {errors.payment && <div className="invalid-feedback d-block">{errors.payment}</div>}
                  </div>
                  {formData.payment === 'credit' && (
                    <div className="card-details border-top pt-4" id="card-details">
                      <div className="row g-3">
                        <div className="col-12">
                          <label className="form-label text-uppercase small fw-semibold" htmlFor="cardNumber">Card Number *</label>
                          <input 
                            type="text" 
                            className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={(e) => {
                              const formatted = formatCardNumber(e.target.value);
                              setFormData({...formData, cardNumber: formatted});
                            }}
                            onBlur={(e) => validateField('cardNumber', e.target.value)}
                            placeholder="1234 1234 1234 1234" 
                            required
                          />
                          {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                        </div>
                        <div className="col-md-6">
                          <label className="form-label text-uppercase small fw-semibold" htmlFor="expirationDate">Expiration Date *</label>
                          <input 
                            type="text" 
                            className={`form-control ${errors.expirationDate ? 'is-invalid' : ''}`}
                            id="expirationDate"
                            name="expirationDate"
                            value={formData.expirationDate}
                            onChange={(e) => {
                              const formatted = formatExpirationDate(e.target.value);
                              setFormData({...formData, expirationDate: formatted});
                            }}
                            onBlur={(e) => validateField('expirationDate', e.target.value)}
                            placeholder="MM/YY" 
                            required
                            maxLength="5"
                          />
                          {errors.expirationDate && <div className="invalid-feedback">{errors.expirationDate}</div>}
                        </div>
                        <div className="col-md-6">
                          <label className="form-label text-uppercase small fw-semibold" htmlFor="cvc">CVC *</label>
                          <input 
                            type="text" 
                            className={`form-control ${errors.cvc ? 'is-invalid' : ''}`}
                            id="cvc"
                            name="cvc"
                            value={formData.cvc}
                            onChange={(e) => {
                              const v = e.target.value.replace(/\D/g, '');
                              setFormData({...formData, cvc: v});
                            }}
                            onBlur={(e) => validateField('cvc', e.target.value)}
                            placeholder="CVC" 
                            required
                            maxLength="4"
                          />
                          {errors.cvc && <div className="invalid-feedback">{errors.cvc}</div>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button 
              type="submit" 
              className="placeorder-link mb-2" 
              id="place-order-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Processing...
                </>
              ) : (
                'Place order'
              )}
            </button>
          </div>

          {/* Right Column: Order Summary */}
          <div className="col-lg-4">
            <div className="card position-sticky" style={{top: '20px'}}>
              <div className="card-body p-4">
                <h2 className="h5 mb-4">Order summary</h2>
                <div className="order-items mb-4" id="checkout-order-list">
                  {cart.length === 0 ? (
                    <p className="text-muted">No products in cart.</p>
                  ) : (
                    cart.map((item, index) => {
                      const quantity = item.quantity || 1;
                      const price = parseFloat(item.price.replace('$', ''));
                      const totalPrice = (price * quantity).toFixed(2);
                      
                      return (
                        <div key={index} className="d-flex align-items-center mb-4 pb-3 border-bottom">
                          <img src={item.image} className="rounded me-3" style={{width: '60px'}} alt={item.name} />
                          <div className="flex-grow-1">
                            <h6 className="mb-1">{item.name}</h6>
                            <div className="d-flex align-items-center">
                              <button 
                                type="button"
                                className="btn btn-outline-secondary btn-sm px-2 py-1 btn-decrease"
                                onClick={() => {
                                  const updatedCart = [...cart];
                                  updatedCart[index].quantity = Math.max((updatedCart[index].quantity || 1) - 1, 1);
                                  setCart(updatedCart);
                                  calculateSubtotal(updatedCart);
                                }}
                              >
                                -
                              </button>
                              <span className="mx-2 small quantity">{quantity}</span>
                              <button 
                                type="button"
                                className="btn btn-outline-secondary btn-sm px-2 py-1 btn-increase"
                                onClick={() => {
                                  const updatedCart = [...cart];
                                  updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
                                  setCart(updatedCart);
                                  calculateSubtotal(updatedCart);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="fw-semibold price" data-price={price}>${totalPrice}</div>
                        </div>
                      );
                    })
                  )}
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
                    id="apply-coupon"
                    onClick={applyCoupon}
                  >
                    Apply
                  </button>
                </div>

                {/* Totals */}
                <div>
                  <div className="d-flex justify-content-between mb-2 fw-semiboldfs-8 pt-3">
                    <span>Shipping</span><span>Free</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 fw-semibold fs-8 pt-3 border-top">
                    <span>Subtotal</span><span className="subtotal-amount">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between fw-semibold fs-4 pt-3 border-top">
                    <span>Total</span><span className="total-amount">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;