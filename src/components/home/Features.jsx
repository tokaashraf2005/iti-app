import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "fa-solid fa-truck",
      title: "Free Shipping",
      description: "On orders over $200"
    },
    {
      icon: "fa-solid fa-money-bill-wave",
      title: "Money-back Guarantee",
      description: "30-day guarantee"
    },
    {
      icon: "fa-solid fa-lock",
      title: "Secure Payments",
      description: "Secured by Stripe"
    },
    {
      icon: "fa-solid fa-headset",
      title: "24/7 Support",
      description: "Phone and Email support"
    }
  ];

  return (
    <div className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature-box">
          <i className={feature.icon}></i>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;