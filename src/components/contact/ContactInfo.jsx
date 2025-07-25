const ContactInfo = ({ formData, errors, handleChange, handleBlur }) => {
  return (
    <div className="checkout-box">
      <div className="card mb-4">
        <div className="card-body p-4">
          <h2 className="h5 mb-4">Contact Information</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label text-uppercase small fw-semibold" htmlFor="firstName">First Name *</label>
              <input 
                type="text" 
                className={`form-control rounded p-2 ${errors.firstName ? 'is-invalid' : formData.firstName ? 'is-valid' : ''}`}
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="First Name"
                required
                minLength="2"
                maxLength="50"
                pattern="[A-Za-z\s]+"
                title="First name should contain only letters and spaces"
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
            <div className="col-md-6">
              <label className="form-label text-uppercase small fw-semibold" htmlFor="lastName">Last Name *</label>
              <input 
                type="text" 
                className={`form-control rounded p-2 ${errors.lastName ? 'is-invalid' : formData.lastName ? 'is-valid' : ''}`}
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Last Name"
                required
                minLength="2"
                maxLength="50"
                pattern="[A-Za-z\s]+"
                title="Last name should contain only letters and spaces"
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>
            <div className="col-12">
              <label className="form-label text-uppercase small fw-semibold" htmlFor="phoneNumber">Phone Number *</label>
              <input 
                type="tel" 
                className={`form-control rounded p-2 ${errors.phoneNumber ? 'is-invalid' : formData.phoneNumber ? 'is-valid' : ''}`}
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Phone Number"
                required
                pattern="[\+]?[0-9\s\-\(\)]{10,15}"
                title="Please enter a valid phone number (10-15 digits)"
              />
              {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
            </div>
            <div className="col-12">
              <label className="form-label text-uppercase small fw-semibold" htmlFor="emailAddress">Email Address *</label>
              <input 
                type="email" 
                className={`form-control rounded p-2 ${errors.emailAddress ? 'is-invalid' : formData.emailAddress ? 'is-valid' : ''}`}
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email Address"
                required
                maxLength="100"
              />
              {errors.emailAddress && <div className="invalid-feedback">{errors.emailAddress}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;