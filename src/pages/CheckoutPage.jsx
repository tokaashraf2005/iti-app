import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutHeader from '../components/checkout/CheckoutHeader';
import ContactInfoForm from '../components/checkout/ContactInfoForm';
import ShippingAddressForm from '../components/checkout/ShippingAddressForm';
import PaymentMethodForm from '../components/checkout/PaymentMethodForm';
import OrderSummary from '../components/checkout/OrderSummary';
import EmptyCartMessage from '../components/checkout/EmptyCartMessage';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const priceString = item.price?.toString() || '0';
      const price = parseFloat(priceString.replace(/[^0-9.]/g, ''));
      return total + (price * (item.quantity || 1));
    }, 0);
  };

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [couponMessage, setCouponMessage] = useState({ text: '', type: '' });
  const [discountPercent, setDiscountPercent] = useState(0);

  const subtotal = calculateSubtotal();
  const discountAmount = subtotal * (discountPercent / 100);
  const total = subtotal - discountAmount;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      const formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) return;
      setFormData({ ...formData, [name]: formattedValue });
      return;
    }
    
    if (name === 'expirationDate') {
      let formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.substring(0, 2) + '/' + formattedValue.substring(2, 4);
      }
      if (formattedValue.length > 5) return;
      setFormData({ ...formData, [name]: formattedValue });
      return;
    }
    
    if (name === 'cvc') {
      setFormData({ ...formData, [name]: value.replace(/\D/g, '') });
      return;
    }
    
    if (name === 'phoneNumber') {
      setFormData({ ...formData, [name]: value.replace(/[^0-9\s\-\(\)\+]/g, '') });
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const patterns = {
      firstName: /^[A-Za-z\s]{2,50}$/,
      lastName: /^[A-Za-z\s]{2,50}$/,
      phoneNumber: /^[\+]?[0-9\s\-\(\)]{10,15}$/,
      emailAddress: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      streetAddress: /^.{5,100}$/,
      city: /^[A-Za-z\s\-]{2,50}$/,
      zipCode: /^[0-9A-Za-z\s\-]{3,10}$/,
      cardNumber: /^[0-9\s]{13,19}$/,
      expirationDate: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      cvc: /^[0-9]{3,4}$/
    };

    const validationMessages = {
      firstName: "First name must be 2-50 characters and contain only letters",
      lastName: "Last name must be 2-50 characters and contain only letters",
      phoneNumber: "Please enter a valid phone number (10-15 digits)",
      emailAddress: "Please enter a valid email address",
      streetAddress: "Street address must be 5-100 characters long",
      country: "Please select a country",
      city: "City must be 2-50 characters and contain only letters",
      state: "Please enter a valid state",
      zipCode: "Please enter a valid zip code",
      payment: "Please select a payment method",
      cardNumber: "Please enter a valid card number (13-19 digits)",
      expirationDate: "Please enter expiration date in MM/YY format",
      cvc: "Please enter a valid CVC (3-4 digits)"
    };

    if (!value && name !== 'couponCode') {
      setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` });
      return false;
    }

    if (patterns[name] && !patterns[name].test(value)) {
      setErrors({ ...errors, [name]: validationMessages[name] });
      return false;
    }

    const newErrors = { ...errors };
    delete newErrors[name];
    setErrors(newErrors);
    return true;
  };

  const handleCouponApply = () => {
    const couponCode = formData.couponCode?.toUpperCase();
    
    if (!couponCode) {
      setCouponMessage({ text: 'Please enter a coupon code', type: 'error' });
      return;
    }
    
    const validCoupons = ['SAVE10', 'WELCOME20', 'FIRST15'];
    const discounts = { 'SAVE10': 10, 'WELCOME20': 20, 'FIRST15': 15 };
    
    if (validCoupons.includes(couponCode)) {
      const discount = discounts[couponCode];
      setCouponMessage({ text: `Coupon applied! ${discount}% discount`, type: 'success' });
      setDiscountPercent(discount);
    } else {
      setCouponMessage({ text: 'Invalid coupon code', type: 'error' });
      setDiscountPercent(0);
    }
    
    setTimeout(() => setCouponMessage({ text: '', type: '' }), 3000);
  };

  const validateForm = () => {
    let isValid = true;
    const requiredFields = [
      'firstName', 'lastName', 'phoneNumber', 'emailAddress',
      'streetAddress', 'country', 'city', 'state', 'zipCode', 'payment'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        setErrors(prev => ({
          ...prev,
          [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
        }));
        isValid = false;
      }
    });

    if (formData.payment === 'credit') {
      const cardFields = ['cardNumber', 'expirationDate', 'cvc'];
      cardFields.forEach(field => {
        if (!formData[field]) {
          setErrors(prev => ({
            ...prev,
            [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
          }));
          isValid = false;
        }
      });
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    // Save order details to localStorage
    const orderDetails = {
      ...formData,
      cart,
      subtotal,
      discountPercent,
      discountAmount,
      total,
      date: new Date().toISOString(),
      status: 'Processing'
    };

    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    localStorage.setItem('finalTotal', total.toFixed(2));

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    clearCart();
    navigate('/order-complete');
  };

  if (cart.length === 0) {
    return <EmptyCartMessage />;
  }

  return (
    <div className="container py-4 py-lg-5">
      <CheckoutHeader currentStep={2} />
      
      <form id="checkout-form" onSubmit={handleSubmit} noValidate>
        <div className="row g-5">
          {/* Left Column - Forms */}
          <div className="col-lg-8">
            <ContactInfoForm 
              formData={formData} 
              errors={errors} 
              handleInputChange={handleInputChange} 
              handleBlur={handleBlur} 
            />

            <ShippingAddressForm 
              formData={formData} 
              errors={errors} 
              handleInputChange={handleInputChange} 
              handleBlur={handleBlur} 
            />

            <PaymentMethodForm 
              formData={formData} 
              errors={errors} 
              handleInputChange={handleInputChange} 
              handleBlur={handleBlur} 
            />

            <div className="d-grid">
              <button 
                type="submit" 
                className="btn btn-dark btn-lg py-3 fw-bold" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Processing Order...
                  </>
                ) : (
                  'Place Order'
                )}
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="col-lg-4">
            <OrderSummary
              cart={cart}
              formData={formData}
              handleInputChange={handleInputChange}
              handleCouponApply={handleCouponApply}
              couponMessage={couponMessage}
              subtotal={subtotal}
              discountPercent={discountPercent}
              discountAmount={discountAmount}
              total={total}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;