// components/checkout/ContactInfoForm.jsx
import React from 'react';
import FormInput from './FormInput';

const ContactInfoForm = ({ formData, errors, handleInputChange, handleBlur }) => {
  return (
    <div className="card mb-4">
      <div className="card-body p-4">
        <h2 className="h5 mb-4">Contact Information</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <FormInput
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.firstName}
              placeholder="First Name"
              required
              minLength="2"
              maxLength="50"
              pattern="[A-Za-z\s]+"
              title="First name should contain only letters and spaces"
            />
          </div>
          <div className="col-md-6">
            <FormInput
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.lastName}
              placeholder="Last Name"
              required
              minLength="2"
              maxLength="50"
              pattern="[A-Za-z\s]+"
              title="Last name should contain only letters and spaces"
            />
          </div>
          <div className="col-12">
            <FormInput
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.phoneNumber}
              placeholder="Phone Number"
              required
              pattern="[\+]?[0-9\s\-\(\)]{10,15}"
              title="Please enter a valid phone number (10-15 digits)"
            />
          </div>
          <div className="col-12">
            <FormInput
              label="Email Address"
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.emailAddress}
              placeholder="Email Address"
              required
              maxLength="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;