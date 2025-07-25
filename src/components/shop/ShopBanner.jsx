import React from 'react';

function ShopBanner() {
  return (
    <section className="shop-banner-section py-4">
      <div className="container">
        <div className="position-relative">
          <img src="/assets/images/shop-banner.png" alt="banner" className="img-fluid w-100" />
          <div className="shop-banner-text text-center text-dark position-absolute top-50 start-50 translate-middle">
            <p className="text-muted mb-1">Home &gt; <span className="text-dark">Shop</span></p>
            <h1 className="fw-bold display-5">Shop Page</h1>
            <p className="fs-5">Let’s design the place you always imagined.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopBanner;
