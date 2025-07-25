import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Offcanvas, Dropdown, Tooltip } from 'bootstrap';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showDiscountBar, setShowDiscountBar] = useState(true);
  const location = useLocation();
  const { cart, removeFromCart, updateQuantity, calculateSubtotal } = useCart();

  // Initialize Bootstrap components
  useEffect(() => {
    // Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => {
      return new Tooltip(tooltipTriggerEl);
    
    });

    // Dropdowns
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.map(dropdownToggleEl => {
      return new Dropdown(dropdownToggleEl);
    });
  }, []);

  const updateCartBadge = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'block' : 'none';
    });
  };

  useEffect(() => {
    updateCartBadge();
  }, [cart]);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header>
      {/* Discount Bar */}
      {showDiscountBar && (
        <div className="discount-bar d-flex align-items-center justify-content-center gap-3 py-1 bg-custom-light lh-lg z-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" width="25" className="d-none d-sm-block">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>

          <p className="mb-0 discount-text">30% off storewide — <strong>Limited time!</strong></p>
          <Link to="/shop"
            className="shop-link d-none d-lg-block d-flex align-items-center lh-base border-bottom border-primary gap-2 text-decoration-none text-primary">
            <span>Shop Now</span>
            <svg className="arrow-icon text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" width="20">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <svg className="close-btn position-absolute end-0 me-5 d-block" onClick={() => setShowDiscountBar(false)} 
            style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" width="18">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="navbar position-fixed navbar-expand-lg top-0 start-0 w-100 z-3  bg-light">
        <div className="container">
          <div className="toggle-logo-custom d-flex align-items-center gap-2 flex-grow-1">
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand fw-bold fs-3" to="/">3legant.</Link>
          </div>
          
          {/* Mobile Cart Icon */}
          <div className="d-flex d-lg-none align-items-center gap-3 ms-auto cart-custom">
            <div className="position-relative">
              <a className="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#cartSidebar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" width="24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </a>
              <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white" 
                style={{fontSize: '0.75rem', minWidth: '1.5rem', height: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
          </div>

          <div className="collapse navbar-collapse justify-content-between" id="mainNavbar">
            {/* Main Navigation Links */}
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-5">
              <li className="nav-item">
                <Link className={`nav-link ${isActiveLink('/') ? 'active fw-bolder text-dark' : 'text-secondary fw-medium'}`} 
                  to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActiveLink('/shop') ? 'active fw-bolder text-dark' : 'text-secondary fw-medium'}`} 
                  to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActiveLink('/blog') ? 'active fw-bolder text-dark' : 'text-secondary fw-medium'}`} 
                  to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActiveLink('/contact') ? 'active fw-bolder text-dark' : 'text-secondary fw-medium'}`} 
                  to="/contact">Contact Us</Link>
              </li>
            </ul>

            {/* Right Side Icons */}
            <ul className="navbar-nav d-flex flex-row gap-3 align-items-center mb-2 mb-lg-0">
              {/* Search Icon */}
              <li className="nav-item position-relative">
                <a className="nav-link position-relative" href="#" onClick={(e) => {
                  e.preventDefault();
                  setShowSearch(!showSearch);
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M21 21l-5.197-5.197M16.803 15.803a7.5 7.5 0 1 0-1.006 1.006L21 21z" />
                  </svg>
                </a>

                {/* Search Box */}
                {showSearch && (
                  <div id="search-box" className="position-absolute start-50 translate-middle-x mt-2 p-2 z-3">
                    <input type="text" className="border border-dark rounded shadow" />
                  </div>
                )}
              </li>

              {/* User Icon */}
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="2" stroke="currentColor" width="24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </Link>
              </li>

              {/* Cart Icon */}
              <li className="nav-item position-relative">
                <div className="position-relative">
                  <a className="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#cartSidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth="2" stroke="currentColor" width="24">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                  </a>
                  <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white" 
                    style={{fontSize: '0.75rem', minWidth: '1.5rem', height: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Offcanvas */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileMenu">
        <div className="offcanvas-body">
          {/* Search Box */}
          <div className="position-relative mb-4">
            <input type="text" className="form-control rounded-pill ps-5 py-2" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg"
              className="position-absolute top-50 start-0 translate-middle-y ms-3" width="20" height="20"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-5.197-5.197M16.803 15.803a7.5 7.5 0 1 0-1.006 1.006L21 21z" />
            </svg>
          </div>

          {/* Offcanvas Links */}
          <ul className="navbar-nav mb-4">
            <li className="nav-item"><Link className={`nav-link border-bottom p-3 ${isActiveLink('/') ? 'active' : ''}`} to="/">Home</Link></li>
            <li className="nav-item"><Link className={`nav-link border-bottom p-3 ${isActiveLink('/shop') ? 'active' : ''}`} to="/shop">Shop</Link></li>
            <li className="nav-item"><Link className={`nav-link border-bottom p-3 ${isActiveLink('/blog') ? 'active' : ''}`} to="/blog">Blog</Link></li>
            <li className="nav-item"><Link className={`nav-link border-bottom p-3 mb-4 ${isActiveLink('/contact') ? 'active' : ''}`} to="/contact">Contact</Link></li>
          </ul>

          {/* Cart Section */}
          <div className="custom-height d-flex justify-content-between align-items-center border-bottom py-3">
            <p className="fw-semibold text-uppercase mb-0 text-secondary">Cart</p>
            <div className="d-flex align-items-center gap-2">
              <div className="position-relative">
                <a className="nav-link p-0" href="#" data-bs-toggle="offcanvas" data-bs-target="#cartSidebar">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" width="24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
                            1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125
                            0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1
                            5.513 7.5h12.974c.576 0 1.059.435 1.119
                            1.007ZM8.625 10.5a.375.375 0 1 1-.75
                            0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375
                            0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </a>
                <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white" 
                  style={{fontSize: '0.75rem', minWidth: '1.5rem', height: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Wishlist Section */}
          <div className="d-flex justify-content-between align-items-center border-bottom py-3">
            <p className="fw-semibold text-uppercase mb-0 text-secondary">Wishlist</p>
            <div className="d-flex align-items-center gap-2">
              <Link className="nav-link p-0" to="/wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" width="25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935
                          0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1
                          3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </Link>
              <span className="badge rounded-circle bg-dark text-white px-2 py-1">0</span>
            </div>
          </div>
          
          {/* Sign In Button */}
          <Link to="/login" className="bg-dark w-100 text-white p-2 my-4 rounded fw-bold text-center d-block">Sign In</Link>

          {/* Social Media Icons */}
          <div className="d-flex justify-content-center gap-3">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
              <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 1 1-7.9 1.43 4 4 0 0 1 7.9-1.43Z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark">
              <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v9h4v-9h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-dark">
              <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z">
                </path>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Cart Sidebar Offcanvas */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartSidebar" aria-labelledby="cartSidebarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="cartSidebarLabel">Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          {cart.length === 0 ? (
            <p className="empty-msg">No Products In Cart</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt={item.name} className="me-2" style={{width: '50px', height: '50px', objectFit: 'cover'}} />
                    <div>
                      <div className="fw-bold">{item.name}</div>
                      <div className="text-muted">{item.price}</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-sm btn-outline-dark me-1" 
                      onClick={() => updateQuantity(index, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-sm btn-outline-dark ms-1" 
                      onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                  </div>
                </div>
              ))}
            </>
          )}
          
          <div className="cart-summary mt-auto">
            <div className="subtotal d-flex justify-content-between">
              <span>Subtotal</span>
              <span>${calculateSubtotal()}</span>
            </div>
            <div className="total d-flex justify-content-between">
              <strong>Total</strong>
              <strong>${calculateSubtotal()}</strong>
            </div>
            <Link to="checkout" className="btn btn-dark w-100 mt-3 checkout-link">Checkout</Link>
            <Link to="cart" className="btn btn-outline-dark w-100 mt-2 view-cart-link">View Cart</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;