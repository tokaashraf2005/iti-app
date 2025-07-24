import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3" data-category={product.category} data-price={product.price}>
      <div className="card border-0 bg-transparent position-relative overflow-hidden product-card">
        <div className="position-absolute top-0 start-0 m-2 d-flex flex-column gap-1 z-1">
          <span className="badge bg-light text-dark small fw-semibold">NEW</span>
          <span className="badge bg-success text-white small fw-semibold">-50%</span>
        </div>
        <div className="bg-light position-relative">
          <img src={product.image} className="card-img-top img-fluid" alt={product.title} />
          <button className="btn btn-dark text-white position-absolute start-50 translate-middle-x px-3 py-2 rounded add-to-cart-btn">
            Add to cart
          </button>
        </div>
        <div className="card-body bg-white">
          <div className="small mb-1 text-secondary">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </div>
          <h6 className="card-title fw-semibold text-dark mb-1">{product.title}</h6>
          <p className="card-text mb-0">
            <span className="fw-bold text-dark">${product.price.toFixed(2)}</span>
            <del className="ms-1 text-muted">${product.oldPrice.toFixed(2)}</del>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
