import React from 'react';
import Header from './Header';
import './Step2.css';

const Step2 = ({ formData, handleChange, handleSubmit, prevStep }) => {
  return (
    <div className="form-container">
    <form  onSubmit={handleSubmit}>
      <Header />
      <input
        className="form-input"
        type="text"
        name="allergies"
        placeholder="Any Allergies?"
        value={formData.allergies}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="address"
        placeholder="Home Address"
        value={formData.address}
        onChange={handleChange}
      />
      <select
        className="form-input"
        name="sex"
        value={formData.sex}
        onChange={handleChange}
      >
        <option value="">Select Sex</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input
        className="form-input"
        type="text"
        name="parentName"
        placeholder="Parent's Name"
        value={formData.parentName}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="parentContact"
        placeholder="Parent's Contact"
        value={formData.parentContact}
        onChange={handleChange}
      />

         <select
        className="form-input"
        name="hear"
        value={formData.hear}
        onChange={handleChange}
      >
        <option value="">How did you hear about us?</option>
        <option value="one">BLN/GMI Meetings</option>
        <option value="two">WhatsApp</option>
        <option value="three">Facebook</option>
        <option value="four">Other</option>
      </select>

     
        <select
        className="form-input"
        name="arrive"
        value={formData.arrive}
        onChange={handleChange}
      >
        <option value="">When will you arrive?</option>
        <option value="Thurday">Thursday </option>
        <option value="Friday">Friday</option>
      </select>

      
      <div className="button-row">
        <button type="button" className="form-button" onClick={prevStep}>
          Back
        </button>
        <button type="submit" className="form-button">
          Submit
        </button>
      </div>
    </form>
    </div>
  );
};

export default Step2;
