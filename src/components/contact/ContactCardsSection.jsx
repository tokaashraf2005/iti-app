import React from 'react';

const ContactCardsSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center fs-1 my-5">Contact Us</h2>
          </div>
        </div>

        <div className="row text-center g-4">
          <div className="col-12 col-md-4">
            <div className="bg-custom-light p-4 d-flex flex-column align-items-center gap-3 h-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h6 className="text-secondary fw-bold mb-1">Address</h6>
              <p className="fw-bold mb-0">234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="bg-custom-light p-4 d-flex flex-column align-items-center gap-3 h-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 9.8 19.5 19.5 0 0 1 3 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.81.33 1.6.61 2.36a2 2 0 0 1-.45 2.11L9 9a16 16 0 0 0 6 6l1.81-1.18a2 2 0 0 1 2.11-.45c.76.28 1.55.49 2.36.61A2 2 0 0 1 22 16.92Z" />
              </svg>
              <h6 className="text-secondary fw-bold mb-1">Phone</h6>
              <p className="fw-bold mb-0">+84 234 567 890</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="bg-custom-light p-4 d-flex flex-column align-items-center gap-3 h-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4c-1.1 0-2-.9-2-2V6a2 2 0 0 1 2-2Z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <h6 className="text-secondary fw-bold mb-1">Email</h6>
              <p className="fw-bold mb-0">support@3legant.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCardsSection;