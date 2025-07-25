const CheckoutHeader = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6">
        <h1 className="text-center mb-5 cart-title mt-4">Checkout</h1>
        <div className="progress-steps mb-5">
          <div className="step-container d-flex justify-content-between align-items-start">
            <div className="step completed">
              <div className="step-circle"><span className="step-number">✓</span></div>
              <div className="step-label">Shopping cart</div>
              <div className="step-underline completed"></div>
            </div>
            <div className="step active">
              <div className="step-circle"><span className="step-number">2</span></div>
              <div className="step-label">Checkout details</div>
              <div className="step-underline active"></div>
            </div>
            <div className="step inactive">
              <div className="step-circle"><span className="step-number">3</span></div>
              <div className="step-label">Order complete</div>
              <div className="step-underline inactive"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;