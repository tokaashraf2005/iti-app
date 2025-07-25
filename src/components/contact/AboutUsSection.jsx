import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="container my-5">
      <div className="row g-0">
        {/* About Us Image */}
        <div className="col-12 col-md-6">
          <img
            src="/assets/images/4.jpg"
            alt="about"
            className="img-fluid w-100 h-100 object-fit-cover"
            style={{ maxHeight: '400px' }}
          />
        </div>

        {/* About Us Text Box */}
        <div className="col-12 col-md-6 bg-light d-flex align-items-center">
          <div className="p-4">
            <h2 className="fw-bold mb-4">About Us</h2>
            <p className="text-secondary mb-4" style={{ fontSize: '14px' }}>
              3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
              Our customer service is always prepared to support you 24/7.
            </p>

            {/* Shop Now Link */}
            <a
              href="../pages/shop.html"
              className="fw-bold text-decoration-none text-dark d-inline-flex align-items-center gap-2"
            >
              <span className="border-bottom border-dark">Shop Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;