import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-custom text-white py-5">
      <div className="container">
        {/* Top Footer */}
        <div className="row align-items-center justify-content-between text-center text-md-start mb-4">
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-center gap-2">
            <Link to="/" className="text-decoration-none text-white fw-bold fs-4">3legant.</Link>
            <span className="d-none d-md-inline">|</span>
            <span>Gift & Decoration Store</span>
          </div>

          <div className="col-12 col-md-6">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-md-end gap-3 mb-0">
              <li><Link to="/" className="text-decoration-none text-white">Home</Link></li>
              <li><Link to="/shop" className="text-decoration-none text-white">Shop</Link></li>
              <li><Link to="/blog" className="text-decoration-none text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-secondary my-4 px-2" />

        {/* Bottom Footer */}
        <div className="row align-items-center justify-content-between text-center text-md-start">
          <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column flex-md-row align-items-center gap-3">
            <span className="small">© 2023 3legant. All rights reserved</span>
            <Link to="#" className="text-decoration-none text-white small">Privacy Policy</Link>
            <Link to="#" className="text-decoration-none text-white small">Terms of Use</Link>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end gap-3">
            {/* Social Icons */}
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-white">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="text-white">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-custom {
          background-color: #111; 
        }
        .footer-custom a:hover {
          color: #999 !important;
        }
      `}</style>
    </footer>
  );
}

export default Footer;


