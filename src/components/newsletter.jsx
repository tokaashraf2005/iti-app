import React from 'react';
import '../styles/Newsletter.css';
import bgImage from '../assets/images/Placeholder.png';

function Newsletter() {
  return (
    <section
      className="newsletter-section d-flex justify-content-center text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-5" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="mb-2">Join Our Newsletter</h2>
        <p className="mb-4">Sign up for deals, new products and promotions</p>
        <form className="newsletter-form d-flex flex-wrap justify-content-center gap-2">
          <div className="position-relative flex-grow-1" style={{ minWidth: '250px' }}>
            <span className="material-icons-outlined email-icon">email</span>
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
          <button type="submit" className="btn">Signup</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
