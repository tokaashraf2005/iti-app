import React from 'react';
import { Link } from 'react-router-dom';

const HomeSection = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="home-section container">
      <div className="row mb-5">
        <div className="col-md-8">
          <h1 className="fw-semibold">Simply Unique/<br />Simply Better.</h1>
        </div>
        <div className="col-md-4">
          <p><strong>3legant</strong> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="grid-item position-relative w-100 h-100">
            <div className="position-absolute top-0 start-0 m-4 z-2">
              <h2>Living Room</h2>
              <Link to="/shop" onClick={handleScrollTop}>Shop Now <span className="arrow">→</span></Link>
            </div>
            <img src="assets/images/couch.png" alt="Living Room" className="img-fluid w-100 h-100 object-fit-cover" />
          </div>
        </div>

        <div className="col-lg-4 d-flex flex-column gap-3">
          <div className="grid-item position-relative overflow-hidden flex-fill">
            <img src="assets/images/drawer.png" alt="Bedroom" className="img-fluid w-100 h-100 object-fit-cover" />
            <div className="position-absolute bottom-0 start-0 p-3">
              <h2>Bedroom</h2>
              <Link to="/shop" onClick={handleScrollTop}>Shop Now <span className="arrow">→</span></Link>
            </div>
          </div>
          <div className="grid-item position-relative overflow-hidden flex-fill">
            <img src="assets/images/toaster.png" alt="Kitchen" className="img-fluid w-100 h-100 object-fit-cover" />
            <div className="position-absolute bottom-0 start-0 p-3">
              <h2>Kitchen</h2>
              <Link to="/shop" onClick={handleScrollTop}>Shop Now <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;