import React, { useState, useEffect, useRef } from 'react';
import './VerifyOtp.css';

const VerifyOtp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(30); // Timer for OTP validity
  const inputRefs = useRef([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Auto-tab to next input
    if (element.value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    setError('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join('').length !== 6) {
      setError('Please enter a valid 6-digit OTP.');
      return;
    }

    // Simulate OTP verification
    if (otp.join('') === '123456') {
      setMessage('OTP verified successfully!');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleResend = () => {
    setOtp(new Array(6).fill(''));
    inputRefs.current[0].focus();
    setTimer(30); // Reset timer
    setMessage('OTP resent. Please check your email/phone.');
  };

  return (
    <div className="verify-otp-container">
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit} className="verify-otp-form">
        <div className="otp-input-group">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={otp[index]}
              onChange={(e) => handleChange(e.target, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className={error ? 'error' : ''}
            />
          ))}
        </div>
        {error && <span className="error-message">{error}</span>}
        {message && <span className="success-message">{message}</span>}

        <button type="submit" className="verify-btn" disabled={timer === 0}>
          Verify
        </button>

        <div className="resend-section">
          {timer > 0 ? (
            <p>Resend OTP in {timer} seconds</p>
          ) : (
            <button type="button" onClick={handleResend} className="resend-btn">
              Resend OTP
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VerifyOtp;
