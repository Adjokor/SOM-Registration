import React from 'react';
import Header from './Header';
import './Step1.css';

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="form-container">
    <form>
      <Header />
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className="form-input"
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button type="button" className="form-button" onClick={nextStep}>
        Next
      </button>
    </form>
    </div>
  );
};

export default Step1;
