import { useState, useEffect } from 'react';

export default function useCart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Update cart count 
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartCount", count);
  }, [cart]);

  const addToCart = (product) => {
    const existing = cart.find(p => p.name === product.name);
    if (existing) {
      setCart(cart.map(p => 
        p.name === product.name 
          ? { ...p, quantity: p.quantity + 1 } 
          : p
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  return { cart, cartCount, addToCart, increaseQuantity, decreaseQuantity };
}