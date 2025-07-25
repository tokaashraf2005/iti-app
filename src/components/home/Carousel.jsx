import React from 'react';

function Carousel() {
  return (
    <div className="container">
      {/* Bootstrap Carousel component */}
      <div id="carouselExampleIndicators" className="carousel slide">
        {/* ----- Carousel indicators ------ */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
            className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
            aria-label="Slide 5"></button>
        </div>
        {/* ------- Carousel slides -------- */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/1.jpg" className="d-block w-100 " alt="Carousel slide 1" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/2.jpg" className="d-block w-100 " alt="Carousel slide 2" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/3.jpg" className="d-block w-100 " alt="Carousel slide 3" />
          </div>
          <div className="carousel-item ">
            <img src="/assets/images/4.jpg" className="d-block w-100 " alt="Carousel slide 4" />
          </div>
          <div className="carousel-item ">
            <img src="/assets/images/5.jpg" className="d-block w-100 " alt="Carousel slide 5" />
          </div>
        </div>
        {/* ------ CAROUSEL BUTTONS--------- */}
        <button className="carousel-control-prev d-none d-lg-block" type="button"
          data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
            stroke="#000" width="35">
            <circle cx="12" cy="12" r="12" fill="white" stroke="none" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next d-none d-lg-block" type="button"
          data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
            stroke="#000" width="35">
            <circle cx="12" cy="12" r="12" fill="white" stroke="none" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;