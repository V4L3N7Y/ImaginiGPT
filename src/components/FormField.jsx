import React from 'react';
import '../style/FormField.css';

const FormField = ({
  type,
  name,
  placeholder,
  value,
  onKeyDown,
}) => (
  <div className="form-field">
    <div className="form-field-input">
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onKeyDown}
      required
    />
    </div>
  </div>
);

export default FormField;