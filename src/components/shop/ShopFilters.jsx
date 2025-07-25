import React from 'react';

function ShopFilters({ category, setCategory, priceRange, setPriceRange, sortBy, setSortBy, viewMode, setViewMode }) {
  return (
    <section className="shop-filters py-4">
      <div className="container">
        <div className="row align-items-end gy-3 justify-content-between">
          <div className="col-md-6 d-flex flex-wrap gap-5">
            <div>
              <p className="fw-semibold text-uppercase small mb-1">Categories</p>
              <select className="custom-dropdown" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>All</option>
                <option>Living Room</option>
                <option>Bedroom</option>
                <option>Kitchen</option>
              </select>
            </div>
            <div>
              <p className="fw-semibold text-uppercase small mb-1">Price</p>
              <select className="custom-dropdown" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <option>All Price</option>
                <option>$0.00 - $99.99</option>
                <option>$100.00 - $199.99</option>
                <option>$200.00 - $299.99</option>
                <option>$300.00 - $399.99</option>
                <option>$400.00+</option>
              </select>
            </div>
          </div>

          <div className="col-md-5 d-flex justify-content-md-end align-items-center gap-3">
            <div className="dropdown">
              <button
                className="btn bg-transparent text-dark p-0 d-flex align-items-center dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <span className="fw-semibold">Sort by</span>
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => setSortBy('price-asc')}>Price: Low to High</button></li>
                <li><button className="dropdown-item" onClick={() => setSortBy('price-desc')}>Price: High to Low</button></li>
                <li><button className="dropdown-item" onClick={() => setSortBy('name-asc')}>Name: A to Z</button></li>
                <li><button className="dropdown-item" onClick={() => setSortBy('name-desc')}>Name: Z to A</button></li>
              </ul>
            </div>

            <div className="shop-view d-flex gap-2 border rounded overflow-hidden">
              {['view-grid-4', 'view-grid-2', 'view-column', 'view-list'].map((mode) => (
                <button
                  key={mode}
                  className={`btn view-btn btn-sm ${viewMode === mode ? 'active' : ''}`}
                  onClick={() => setViewMode(mode)}
                >
                  <i
                    className={`fas ${
                      mode === 'view-grid-4'
                        ? 'fa-th'
                        : mode === 'view-grid-2'
                        ? 'fa-th-large'
                        : mode === 'view-column'
                        ? 'fa-columns'
                        : 'fa-bars'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopFilters;