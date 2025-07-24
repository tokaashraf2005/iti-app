import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
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
    cvc: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const patterns = {
    name: /^[A-Za-z\s]{2,50}$/,
    phone: /^[\+]?[0-9\s\-\(\)]{10,15}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    address: /^.{5,100}$/,
    city: /^[A-Za-z\s\-]{2,50}$/,
    zipCode: /^[0-9A-Za-z\s\-]{3,10}$/,
    cardNumber: /^[0-9\s]{13,19}$/,
    expirationDate: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
    cvc: /^[0-9]{3,4}$/
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateField = (name, value) => {
    let isValid = true;
    let message = '';

    if (!value && document.querySelector(`[name="${name}"]`).required) {
      isValid = false;
      message = 'This field is required';
    } else if (value) {
      switch (name) {
        case 'firstName':
        case 'lastName':
          isValid = patterns.name.test(value);
          message = 'Must be 2-50 characters and contain only letters';
          break;
        case 'phoneNumber':
          isValid = patterns.phone.test(value);
          message = 'Please enter a valid phone number (10-15 digits)';
          break;
        case 'emailAddress':
          isValid = patterns.email.test(value);
          message = 'Please enter a valid email address';
          break;
        case 'streetAddress':
          isValid = patterns.address.test(value);
          message = 'Street address must be 5-100 characters long';
          break;
        case 'country':
          isValid = value !== '';
          message = 'Please select a country';
          break;
        case 'city':
          isValid = patterns.city.test(value);
          message = 'City must be 2-50 characters and contain only letters';
          break;
        case 'state':
          isValid = value.length >= 2 && value.length <= 50;
          message = 'Please enter a valid state';
          break;
        case 'zipCode':
          isValid = patterns.zipCode.test(value);
          message = 'Please enter a valid zip code';
          break;
        case 'cardNumber':
          if (formData.payment === 'credit') {
            const cardNum = value.replace(/\s/g, '');
            isValid = patterns.cardNumber.test(value) && isValidCardNumber(cardNum);
            message = 'Please enter a valid card number (13-19 digits)';
          }
          break;
        case 'expirationDate':
          if (formData.payment === 'credit') {
            isValid = patterns.expirationDate.test(value) && isValidExpirationDate(value);
            message = 'Please enter expiration date in MM/YY format';
          }
          break;
        case 'cvc':
          if (formData.payment === 'credit') {
            isValid = patterns.cvc.test(value);
            message = 'Please enter a valid CVC (3-4 digits)';
          }
          break;
      }
    }

    if (!isValid) {
      setErrors(prev => ({
        ...prev,
        [name]: message
      }));
    }

    return isValid;
  };

  const isValidCardNumber = (cardNumber) => {
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

  const formatCardNumber = (value) => {
    let formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
    if (formattedValue.length > 19) {
      formattedValue = formattedValue.substring(0, 19);
    }
    return formattedValue;
  };

  const formatExpirationDate = (value) => {
    let formattedValue = value.replace(/\D/g, '');
    if (formattedValue.length >= 2) {
      formattedValue = formattedValue.substring(0, 2) + '/' + formattedValue.substring(2, 4);
    }
    return formattedValue;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let formIsValid = true;
    const newErrors = {};

    // Validate all fields
    Object.keys(formData).forEach(key => {
      if (key === 'cardNumber' || key === 'expirationDate' || key === 'cvc') {
        if (formData.payment === 'credit') {
          const isValid = validateField(key, formData[key]);
          if (!isValid) formIsValid = false;
        }
      } else {
        const isValid = validateField(key, formData[key]);
        if (!isValid) formIsValid = false;
      }
    });

    if (!formData.payment) {
      newErrors.payment = 'Please select a payment method';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        // Clear cart
        localStorage.removeItem('cart');
        // Redirect to order confirmation
        navigate('/order-complete');
      }, 2000);
    }
  };

  return (
    <form id="checkout-form" onSubmit={handleSubmit} noValidate>
      <div className="checkout-box">
        <div className="card mb-4">
          <div className="card-body p-4">
            <h2 className="h5 mb-4">Contact Information</h2>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label text-uppercase small fw-semibold" htmlFor="firstName">
                  First Name *
                </label>
                <input
                  type="text"
                  className={`form-control rounded p-2 ${errors.firstName ? 'is-invalid' : formData.firstName ? 'is-valid' : ''}`}
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={(e) => validateField('firstName', e.target.value)}
                  required
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>
              <div className="col-md-6">
                <label className="form-label text-uppercase small fw-semibold" htmlFor="lastName">
                  Last Name *
                </label>
                <input
                  type="text"
                  className={`form-control rounded p-2 ${errors.lastName ? 'is-invalid' : formData.lastName ? 'is-valid' : ''}`}
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={(e) => validateField('lastName', e.target.value)}
                  required
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>
              <div className="col-12">
                <label className="form-label text-uppercase small fw-semibold" htmlFor="phoneNumber">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className={`form-control rounded p-2 ${errors.phoneNumber ? 'is-invalid' : formData.phoneNumber ? 'is-valid' : ''}`}
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9\s\-\(\)\+]/g, '');
                    handleChange(e);
                  }}
                  onBlur={(e) => validateField('phoneNumber', e.target.value)}
                  required
                />
                {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
              </div>
              <div className="col-12">
                <label className="form-label text-uppercase small fw-semibold" htmlFor="emailAddress">
                  Email Address *
                </label>
                <input
                  type="email"
                  className={`form-control rounded p-2 ${errors.emailAddress ? 'is-invalid' : formData.emailAddress ? 'is-valid' : ''}`}
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  onBlur={(e) => validateField('emailAddress', e.target.value)}
                  required
                />
                {errors.emailAddress && <div className="invalid-feedback">{errors.emailAddress}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout-box">
        <div className="card mb-4">
          <div className="card-body p-4">
            <h2 className="h5 mb-4">Shipping Address</h2>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label text-uppercase small fw-semibold" htmlFor="streetAddress">
                  Street Address *
                </label>
                <input
                  type="text"
                  className={`form-control rounded p-2 ${errors.streetAddress ? 'is-invalid' : formData.streetAddress ? 'is-valid' : ''}`}
                  id="streetAddress"
                  name="streetAddress"
                  placeholder="Street Address"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  onBlur={(e) => validateField('streetAddress', e.target.value)}
                  required
                />
                {errors.streetAddress && <div className="invalid-feedback">{errors.streetAddress}</div>}
              </div>
              <div className="col-12">
                <label className="form-label text-uppercase small fw-semibold" htmlFor="country">
                  Country *
                </label>
                <select
                  className={`form-select ${errors.country ? 'is-invalid' : formData.country ? 'is-valid' : ''}`}
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
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
                <label className="form-label text-uppercase small fw-semibold" htmlFor="city">
                  Town / City *
                </label>
                <input
                  type="text"
                  className={`form-control rounded p-2 ${errors.city ? 'is-invalid' : formData.city ? 'is-valid' : ''}`}
                  id="city"
                  name="city"
                  placeholder="Town / City"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={(e) => validateField('city', e.target.value)}
                  required
                />
                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
              </div>
              <div className="col-md-6">
                <label className="form-label text-uppercase small fw-semibold" htmlFor="state">
                  State *
                </label>
                <input
                  type="text"
                  className={`form-control rounded p-2 ${errors.state ? 'is-invalid' : formData.state ? 'is-valid' : ''}`}
                  id="state"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  onBlur={(e) => validateField('state', e.target.value)}
                  required
                />
                {errors.state && <div className="invalid-feedback">{errors.state}</div>}
              </div>
              <div className="col-md-6">
                <label className="form-label text-uppercase small fw-semibold" htmlFor="zipCode">
                  Zip Code *
                </label>
                <input
                  type="text"
                  className={`form-control rounded p-2 ${errors.zipCode ? 'is-invalid' : formData.zipCode ? 'is-valid' : ''}`}
                  id="zipCode"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  onBlur={(e) => validateField('zipCode', e.target.value)}
                  required
                />
                {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label flex-grow-1" htmlFor="creditCard">
                  Pay by Card Credit
                </label>
              </div>
              <div className="form-check p-3 border rounded">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="paypal"
                  value="paypal"
                  checked={formData.payment === 'paypal'}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="paypal">
                  Paypal
                </label>
              </div>
              {errors.payment && <div className="invalid-feedback">{errors.payment}</div>}
            </div>
            {formData.payment === 'credit' && (
              <div className="card-details border-top pt-4" id="card-details">
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label text-uppercase small fw-semibold" htmlFor="cardNumber">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.cardNumber ? 'is-invalid' : formData.cardNumber ? 'is-valid' : ''}`}
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 1234 1234 1234"
                      value={formData.cardNumber}
                      onChange={(e) => {
                        e.target.value = formatCardNumber(e.target.value);
                        handleChange(e);
                      }}
                      onBlur={(e) => validateField('cardNumber', e.target.value)}
                      required={formData.payment === 'credit'}
                    />
                    {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-uppercase small fw-semibold" htmlFor="expirationDate">
                      Expiration Date *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.expirationDate ? 'is-invalid' : formData.expirationDate ? 'is-valid' : ''}`}
                      id="expirationDate"
                      name="expirationDate"
                      placeholder="MM/YY"
                      value={formData.expirationDate}
                      onChange={(e) => {
                        e.target.value = formatExpirationDate(e.target.value);
                        handleChange(e);
                      }}
                      onBlur={(e) => validateField('expirationDate', e.target.value)}
                      required={formData.payment === 'credit'}
                    />
                    {errors.expirationDate && <div className="invalid-feedback">{errors.expirationDate}</div>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-uppercase small fw-semibold" htmlFor="cvc">
                      CVC *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.cvc ? 'is-invalid' : formData.cvc ? 'is-valid' : ''}`}
                      id="cvc"
                      name="cvc"
                      placeholder="CVC"
                      value={formData.cvc}
                      onChange={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, '');
                        handleChange(e);
                      }}
                      onBlur={(e) => validateField('cvc', e.target.value)}
                      required={formData.payment === 'credit'}
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
    </form>
  );
};

export default CheckoutForm;