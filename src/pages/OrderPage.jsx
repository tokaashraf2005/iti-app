import React, { useEffect, useState } from 'react';
import ProgressSteps from '../components/ProgressSteps';
import OrderHeader from '../components/order/OrderHeader';
import OrderSummary from '../components/order/OrderSummary';
import { generateOrderCode, calculateTotal } from '../utils/orderUtils';

const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const [orderCode, setOrderCode] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [totalAmount, setTotalAmount] = useState('$0.00');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];

    const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    if (orderDetails && orderDetails.payment) {
      setPaymentMethod(orderDetails.payment === 'credit' ? 'Credit Card' : 'PayPal');
    }

    setOrderCode(generateOrderCode());

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    setOrderDate(formattedDate);

    const savedTotal = localStorage.getItem("finalTotal");
    if (savedTotal) {
      setTotalAmount(`$${savedTotal}`);
    } else {
      setTotalAmount(`$${calculateTotal(cartData)}`);
    }

    setTimeout(() => {
      localStorage.removeItem("cart");
      localStorage.removeItem("discountPercent");
    }, 1000);
  }, []);

  return (
    <div className="order-complete-page">
      <section className="container py-5">
        <h1 className="display-4 text-center mb-1"><strong>Complete!</strong></h1>
        
        <ProgressSteps currentStep={3} />
        
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="order-summary-box">
              <OrderHeader />
              
              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                {cart.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.name}
                    style={{ width: "60px" }}
                    className="rounded"
                    onError={(e) => {
                      e.target.src = '/assets/images/placeholder.jpg'; // Fallback image
                    }}
                  />
                ))}
              </div>

              <OrderSummary 
                orderCode={orderCode}
                orderDate={orderDate}
                totalAmount={totalAmount}
                paymentMethod={paymentMethod}
              />

              <div className="btn-container">
                <a href="/cart" className="btn btn-dark rounded-pill px-4 py-2">
                  Purchase History
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;