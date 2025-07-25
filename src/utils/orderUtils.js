export const generateOrderCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomPart = () =>
    Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `#${randomPart()}_${randomPart()}`;
};

export const calculateTotal = (cart) => {
  let total = cart.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    const price = parseFloat(item.price?.toString().replace(/[^0-9.]/g, '') || '0');
    return sum + (price * quantity);
  }, 0);

  // Apply discount if available
  const discountPercent = parseFloat(localStorage.getItem("discountPercent"));
  if (!isNaN(discountPercent) && discountPercent > 0) {
    total = total * (1 - discountPercent / 100);
  }

  return total.toFixed(2);
};