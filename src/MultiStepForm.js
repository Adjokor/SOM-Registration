import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    allergies: '',
    address: '',
    sex: '',
    parentName: '',
    parentContact: '',
    referral: '',
    arrival: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Replace with EmailJS or backend POST call
    console.log("Form submitted", formData);

    alert("Thank you for registering!");
    setFormData({}); // reset form
    setStep(1);
  };

  return (
    <div>
      {step === 1 ? (
        <Step1 formData={formData} handleChange={handleChange} nextStep={() => setStep(2)} />
      ) : (
        <Step2 formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} prevStep={() => setStep(1)} />
      )}
    </div>
  );
};

export default MultiStepForm;
