import React from 'react';

const CartItem = ({ item, index, updateQuantity, removeItem }) => {
  const price = parseFloat(item.price.replace('$', ''));
  const subtotal = price * (item.quantity || 1);

  return (
    <tr className="cart-item-row">
      <td>
        <div className="cart-item-container">
          <img src={item.image} alt={item.name} className="cart-item-img" />
          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <button 
              className="remove-btn" 
              onClick={() => removeItem(index)}
            >
              ✕ Remove
            </button>
          </div>
        </div>
      </td>
      <td className="text-center">
        <div className="quantity-controls">
          <button 
            className="quantity-btn" 
            onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}
          >
            −
          </button>
          <span className="quantity-display">{item.quantity || 1}</span>
          <button 
            className="quantity-btn" 
            onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="text-end price-cell">${price.toFixed(2)}</td>
      <td className="text-end subtotal-cell">${subtotal.toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;