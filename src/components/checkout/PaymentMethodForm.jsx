// components/checkout/PaymentMethodForm.jsx
import React from 'react';
import FormInput from './FormInput';

const PaymentMethodForm = ({ formData, errors, handleInputChange, handleBlur }) => {
  return (
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
              onChange={handleInputChange}
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
                <FormInput
                  label="Card Number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.cardNumber}
                  placeholder="1234 1234 1234 1234"
                  required={formData.payment === 'credit'}
                  pattern="[0-9\s]{13,19}"
                  maxLength="19"
                  title="Please enter a valid card number"
                />
              </div>
              <div className="col-md-6">
                <FormInput
                  label="Expiration Date"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.expirationDate}
                  placeholder="MM/YY"
                  required={formData.payment === 'credit'}
                  pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                  maxLength="5"
                  title="Please enter expiration date in MM/YY format"
                />
              </div>
              <div className="col-md-6">
                <FormInput
                  label="CVC"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.cvc}
                  placeholder="CVC"
                  required={formData.payment === 'credit'}
                  pattern="[0-9]{3,4}"
                  maxLength="4"
                  title="Please enter a valid CVC (3-4 digits)"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodForm;