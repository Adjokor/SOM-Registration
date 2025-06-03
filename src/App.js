import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false); // ✅ Modal toggle
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Show modal after submission
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setStep(1); // Reset form to step 1
  };

  return (
    <div className="App">
      {step === 1 ? (
        <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />
      ) : (
        <Step2
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          prevStep={prevStep}
        />
      )}

      {/* ✅ Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Thanks for Registering. God bless you.</h2>
            <p>
              Join us for this spirit-filled camp meeting and your life will never be the same.
            </p>
            <a
  href="https://wa.me/233XXXXXXXXX"  // Replace with your WhatsApp number or group link
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="modal-button" onClick={closeModal}>
    Join WhatsApp Group
  </button>
</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
