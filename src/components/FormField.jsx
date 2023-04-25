import React from 'react';
import '../style/FormField.css';

const FormField = ({
  //labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div className="form-field">
    <div className="form-field-title">
      {/* <label
        htmlFor={name}
      >
        {labelName}
      </label> */}
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
        >
          Surprise me
        </button>
      )}
    </div>
    <div className="form-field-input">
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
    </div>
  </div>
);

export default FormField;