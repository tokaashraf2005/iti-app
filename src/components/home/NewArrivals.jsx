import React from 'react';
import "../../styles/product.css";
import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContext';

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

const NewArrivals = () => {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = React.useState({});

  const handleAddToCart = (product) => {
    // Create a new product object with the full image path
    const productWithFullImage = {
      ...product,
      image: `/assets/images/${product.image}`
    };
    
    addToCart(productWithFullImage);
    setAddedItems(prev => ({ ...prev, [product.name]: true }));
    
    // Reset the button after 1 second
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.name]: false }));
    }, 1000);
  };

  return (
    <div className="new-arrivals-section">
      <div className="category-header">
        <h1>New <br /> Arrivals</h1>
        <Link to="/shop" className="more-products">More Products →</Link>
      </div>
      <div className="category-products">
        {products.map((product, i) => (
          <div key={i} className="category-card">
            <div className="img-wrapper">
              <img src={`/assets/images/${product.image}`} alt={product.name} />
              <div className="badge new">NEW</div>
              <div className="badge discount">-50%</div>
              <div className="wishlist-icon">♡</div>
              <button 
                className="add-btn" 
                onClick={() => handleAddToCart(product)}
              >
                {addedItems[product.name] ? "✓ Added!" : "Add to cart"}
              </button>
            </div>
            <Link to="/product" className="text-decoration-none text-reset">
              <div className="stars">★★★★★</div>
              <div className="product-name">{product.name}</div>
              <div className="price">
                {product.price}
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;