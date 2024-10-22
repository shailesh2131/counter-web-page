import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.emailOrUsername) {
      errors.emailOrUsername = 'Email or Username is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailOrUsername)) {
      errors.emailOrUsername = 'Email format is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully', formData);
      // Further actions (e.g., API call) can go here.
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="input-group">
          <label htmlFor="emailOrUsername">Email/Username</label>
          <input
            type="text"
            id="emailOrUsername"
            name="emailOrUsername"
            value={formData.emailOrUsername}
            onChange={handleChange}
            className={errors.emailOrUsername ? 'error' : ''}
          />
          {errors.emailOrUsername && <span className="error-message">{errors.emailOrUsername}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        <button type="submit" className="signin-btn">Sign In</button>

        <div className="forgot-password-link">
          <a href="/forgot-password">Forgot Password?</a>
                               
        </div>
      </form>
    </div>
  );
};

export default SignIn;
