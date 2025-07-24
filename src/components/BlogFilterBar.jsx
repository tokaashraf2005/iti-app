import React from 'react';

const BlogFilterBar = () => {
  return (
    <section className="container py-3 filter-bar">
      <div className="row align-items-center">
        {/* Filters */}
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div className="d-flex gap-3 justify-content-md-start justify-content-center">
            <a href="#blogGrid" className="fw-bold border-bottom border-dark pb-1 text-dark text-decoration-none">
              All Blog
            </a>
            <a href="#" className="text-dark text-decoration-none">Featured</a>
          </div>
        </div>

        {/* View & Sort */}
        <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center gap-3 flex-wrap">
          <div>
            <select className="form-select">
              <option selected>Sort by</option>
              <option value="1">Latest</option>
              <option value="2">Popular</option>
              <option value="3">Best Sellers</option>
            </select>
          </div>

          <div className="bg-light px-3 py-1 d-flex gap-2">
            {/* SVG icons */}
            <svg className="view-icon active" data-view="grid-3" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="1" y="1" width="5" height="5" rx="1" />
              <rect x="8" y="1" width="5" height="5" rx="1" />
              <rect x="15" y="1" width="5" height="5" rx="1" />
              <rect x="1" y="8" width="5" height="5" rx="1" />
              <rect x="8" y="8" width="5" height="5" rx="1" />
              <rect x="15" y="8" width="5" height="5" rx="1" />
              <rect x="1" y="15" width="5" height="5" rx="1" />
              <rect x="8" y="15" width="5" height="5" rx="1" />
              <rect x="15" y="15" width="5" height="5" rx="1" />
            </svg>

            <svg className="view-icon" data-view="grid-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="1" y="2" width="9" height="9" rx="3" />
              <rect x="13" y="2" width="9" height="9" rx="3" />
              <rect x="1" y="13" width="9" height="9" rx="3" />
              <rect x="13" y="13" width="9" height="9" rx="3" />
            </svg>

            <svg className="view-icon" data-view="columns" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="2" width="8" height="20" rx="2" />
              <rect x="13" y="2" width="8" height="20" rx="2" />
            </svg>

            <svg className="view-icon" data-view="horizontal" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="20" height="7" rx="2" />
              <rect x="4" y="14" width="20" height="7" rx="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFilterBar;


