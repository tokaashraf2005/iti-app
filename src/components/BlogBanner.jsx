import React from 'react';

const BlogBanner = () => {
  return (
    <section className="banner py-1">
      <div className="container text-center text-white">
        <div className="banner-content rounded px-4 py-5">
          <div className="text-secondary mb-2">
            Home &gt; <span className="text-dark fw-semibold">Blog</span>
          </div>
          <h1 className="display-5 text-dark">Our Blog</h1>
          <p className="lead text-secondary">Home ideas and design inspiration</p>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
