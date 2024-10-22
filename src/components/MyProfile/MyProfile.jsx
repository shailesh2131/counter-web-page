import React, { useState } from 'react';
import './MyProfile.css';

const MyProfile = () => {
  const [fullName, setFullName] = useState('');
  const [email] = useState('user@example.com'); // non-editable email
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [preview, setPreview] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneNumberChange = (e) => {
    const phone = e.target.value;
    const phonePattern = /^[0-9]{10}$/;
    if (phonePattern.test(phone)) {
      setError('');
      setPhoneNumber(phone);
    } else {
      setError('Phone number must be 10 digits.');
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const fileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 1024 * 1024; // 1MB size limit

    if (file && fileTypes.includes(file.type) && file.size <= maxSize) {
      setProfilePicture(file);
      setPreview(URL.createObjectURL(file)); // Preview the selected image
      setError('');
    } else {
      setError('Invalid file. Only JPG, PNG under 1MB are allowed.');
      setProfilePicture(null);
      setPreview('');
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    if (!fullName || !phoneNumber) {
      setError('Full Name and Phone Number are required.');
      return;
    }

    setMessage('Profile updated successfully!');
    setError('');
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setAddress('');
    setProfilePicture(null);
    setPreview('');
    setMessage('');
    setError('');
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <form onSubmit={handleSaveChanges} className="profile-form">
        <div className="input-group">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email (non-editable)</label>
          <input type="email" id="email" value={email} readOnly />
        </div>

        <div className="input-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            id="phone-number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter 10-digit phone number"
          />
        </div>

        <div className="input-group">
          <label htmlFor="address">Address (optional)</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>

        <div className="input-group">
          <label htmlFor="profile-picture">Profile Picture</label>
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Profile Preview" />
            </div>
          )}
        </div>

        {error && <span className="error-message">{error}</span>}
        {message && <span className="success-message">{message}</span>}

        <button type="submit" className="save-btn">Save Changes</button>
        <button type="button" className="reset-btn" onClick={handleReset}>
          Reset to Default
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
