import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(savedCart);
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      setCart([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  const addToCart = (product) => {
    try {
      const existingItem = cart.find(item => item.name === product.name);
      if (existingItem) {
        setCart(cart.map(item => 
          item.name === product.name 
            ? {...item, quantity: item.quantity + 1} 
            : item
        ));
      } else {
        setCart([...cart, {...product, quantity: 1}]);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeFromCart = (index) => {
    try {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    try {
      if (newQuantity < 1) return;
      const newCart = [...cart];
      newCart[index].quantity = newQuantity;
      setCart(newCart);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const calculateSubtotal = () => {
    try {
      return cart.reduce((sum, item) => {
        const priceString = item.price?.toString() || '0';
        const price = parseFloat(priceString.replace(/[^0-9.]/g, ''));
        return sum + (price * item.quantity);
      }, 0).toFixed(2);
    } catch (error) {
      console.error('Error calculating subtotal:', error);
      return '0.00';
    }
  };

  const clearCart = () => {
    try {
      setCart([]);
      localStorage.removeItem('cart');
      localStorage.removeItem('discountPercent');
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        calculateSubtotal,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

