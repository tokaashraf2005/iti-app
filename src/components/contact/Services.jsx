import React from 'react';

const Services = () => {
  const serviceItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
          <rect x="1" y="3" width="15" height="13" />
          <path d="M16 8h4l4 4v4h-2" />
          <circle cx="5.5" cy="18.5" r="2" />
          <circle cx="17.5" cy="18.5" r="2" />
        </svg>
      ),
      title: "Free Shipping",
      description: "Order above $200"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
      title: "Money-back",
      description: "30 days guarantee"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M12 16v2" />
          <path d="M8 11V7a4 4 0 1 1 8 0v4" />
        </svg>
      ),
      title: "Secure Payment",
      description: "Secured by Stripe"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 A19.5 19.5 0 0 1 4.14 9.8 19.5 19.5 0 0 1 3 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72 c.12.81.33 1.6.61 2.36 a2 2 0 0 1-.45 2.11L9 9 a16 16 0 0 0 6 6l1.81-1.18 a2 2 0 0 1 2.11-.45 c.76.28 1.55.49 2.36.61 A2 2 0 0 1 22 16.92Z" />
        </svg>
      ),
      title: "Customer Support",
      description: "24/7 Friendly support"
    }
  ];

  return (
    <section className="mt-5 bg-custom-light py-5">
      <div className="container">
        <div className="row text-center g-4">
          {serviceItems.map((service, index) => (
            <div key={index} className="col-12 col-md-3 service-item">
              {service.icon}
              <h6 className="fw-bold mt-3 mb-1">{service.title}</h6>
              <p className="text-secondary mb-0" style={{ fontSize: '14px' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;