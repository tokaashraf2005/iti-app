import React from 'react';

const ContactBreadcrumbLinks = () => {
  return (
    <div className="col-12">
      <a href="../index.html" className="text-secondary text-decoration-none fw-medium">Home</a>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
        stroke="#A2A2A2" width="15">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
      <a href="../pages/contact.html" className="text-secondary-emphasis active text-decoration-none fw-medium">Contact Us</a>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
        stroke="#2E2E2E" width="15">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
};

export default ContactBreadcrumbLinks;