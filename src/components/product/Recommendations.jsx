import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/product.css";

const products = [
  {
    name: "Loveseat Sofa",
    image: "loveseatsofa.jpg",
    price: "$199.00",
    oldPrice: "$400.00",
  },
  {
    name: "Table Lamp",
    image: "tablelamp.jpg",
    price: "$24.99",
  },
  {
    name: "Beige Table Lamp",
    image: "beigetablelamp.jpg",
    price: "$24.99",
  },
  {
    name: "Bamboo Basket",
    image: "bambobasket.jpg",
    price: "$24.99",
  },
  {
    name: "Toasted",
    image: "toasted.jpg",
    price: "$224.99",
  },
];

const Recommendations = () => {
  return (
    <div className="new-arrivals-section">
      <div className="category-header">
        <h1>You might also like</h1>
        <Link
          to="/shop"
          className="more-products"
          onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
        >
          More Products →
        </Link>
      </div>

      <div className="category-products">
        {products.map((product, i) => (
          <div key={i} className="category-card">
            <div className="img-wrapper">
              <img src={`/assets/images/${product.image}`} alt={product.name} />
              <div className="badge new">NEW</div>
              <div className="badge discount">-50%</div>
              <div className="wishlist-icon">♡</div>
              <button className="add-btn">Add to cart</button>
            </div>
            <div className="stars">★★★★★</div>
            <div className="product-name">{product.name}</div>
            <div className="price">
              {product.price}
              {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;



     
       
