// components/FormInput.jsx
import React from 'react';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  pattern,
  title,
  minLength,
  maxLength,
  className = '',
}) => {
  return (
    <div className="mb-3">
      {label && (
        <label className="form-label text-uppercase small fw-semibold" htmlFor={name}>
          {label} {required && '*'}
        </label>
      )}
      <input
        type={type}
        className={`form-control rounded p-2 ${error ? 'is-invalid' : value ? 'is-valid' : ''} ${className}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
        minLength={minLength}
        maxLength={maxLength}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default FormInput;