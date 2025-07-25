import React, { useState } from 'react';
import "../../styles/product.css";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);

  const chairOptions = [
    { color: 'Black', image: 'blackchair.jpg' },
    { color: 'Brown', image: 'brownchair.jpg' },
    { color: 'Red', image: 'redchair.jpg' },
    { color: 'White', image: 'whitechair.jpg' },
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  return (
    <div className="details">
      <div className="stars">★★★★★ 11 Reviews</div>
      <div className="product-title">Tray Table</div>
      <div className="description">
        Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.
      </div>
      <div className="price">
        $199.00 <span className="old-price">$400.00</span>
      </div>

      <div className="color-label">{selectedColor}</div>
      <div className="chair-options">
        {chairOptions.map((option, i) => (
          <div
            key={i}
            className={`chair-option ${selectedColor === option.color ? 'selected' : ''}`}
            onClick={() => handleColorSelect(option.color)}
          >
            <img src={`../assets/images/${option.image}`} alt={`${option.color} Chair`} />
          </div>
        ))}
      </div>

      <div className="top-row">
        <div className="quantity">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <div className="wishlist">♡ Wishlist</div>
      </div>

      <button className="add-to-cart">Add to Cart</button>

      <div className="section">
        <div className="section-title">Additional Info</div>
        <div className="section-content">
          <strong>Measurements:</strong> 17 1/2×20 5/8"<br /><br />
          <strong>SKU:</strong> 1117<br />
          <strong>Category:</strong> Living Room, Bedroom<br /><br />
          <strong>Details:</strong> You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.<br /><br />
          <strong>Packaging:</strong> Width: 20" &nbsp; Height: 1 ½" &nbsp; Length: 21 ⅝"<br />
          Weight: 7 lb 8 oz
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;