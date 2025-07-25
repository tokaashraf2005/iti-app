// components/checkout/ShippingAddressForm.jsx
import React from 'react';
import FormInput from './FormInput';

const ShippingAddressForm = ({ formData, errors, handleInputChange, handleBlur }) => {
  return (
    <div className="card mb-4">
      <div className="card-body p-4">
        <h2 className="h5 mb-4">Shipping Address</h2>
        <div className="row g-3">
          <div className="col-12">
            <FormInput
              label="Street Address"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.streetAddress}
              placeholder="Street Address"
              required
              minLength="5"
              maxLength="100"
            />
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
              onChange={handleInputChange}
              onBlur={handleBlur}
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
            <FormInput
              label="Town / City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.city}
              placeholder="Town / City"
              required
              minLength="2"
              maxLength="50"
              pattern="[A-Za-z\s\-]+"
              title="City should contain only letters, spaces, and hyphens"
            />
          </div>
          <div className="col-md-6">
            <FormInput
              label="State"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.state}
              placeholder="State"
              required
              minLength="2"
              maxLength="50"
            />
          </div>
          <div className="col-md-6">
            <FormInput
              label="Zip Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.zipCode}
              placeholder="Zip Code"
              required
              pattern="[0-9A-Za-z\s\-]{3,10}"
              title="Please enter a valid zip code"
            />
          </div>
          <div className="col-12">
            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" id="different-billing" />
              <label className="form-check-label" htmlFor="different-billing">
                Use a different billing address (step 2)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressForm;