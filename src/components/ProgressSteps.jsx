import React from 'react';

const ProgressSteps = ({ currentStep }) => {
  return (
    <div className="progress-steps">
      <div className="step-container">
        <div className={`step ${currentStep > 1 ? 'completed' : currentStep === 1 ? 'active' : 'inactive'}`}>
          <div className="step-circle">
            <span className="step-number">{currentStep > 1 ? '✓' : '1'}</span>
          </div>
          <span className="step-label">Shopping cart</span>
          <div className={`step-underline ${currentStep > 1 ? 'completed' : currentStep === 1 ? 'active' : 'inactive'}`}></div>
        </div>

        <div className={`step ${currentStep > 2 ? 'completed' : currentStep === 2 ? 'active' : 'inactive'}`}>
          <div className="step-circle">
            <span className="step-number">{currentStep > 2 ? '✓' : '2'}</span>
          </div>
          <span className="step-label">Checkout details</span>
          <div className={`step-underline ${currentStep > 2 ? 'completed' : currentStep === 2 ? 'active' : 'inactive'}`}></div>
        </div>
        
        <div className={`step ${currentStep > 3 ? 'completed' : currentStep === 3 ? 'active' : 'inactive'}`}>
          <div className="step-circle">
            <span className="step-number">3</span>
          </div>
          <span className="step-label">Order complete</span>
          <div className={`step-underline ${currentStep > 3 ? 'completed' : currentStep === 3 ? 'active' : 'inactive'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;