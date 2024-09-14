import React from 'react';
import '../assets/css/ProfilePic.css';
import profileImage from '../assets/pic.jpg'; // Adjust path according to your image location

const ProfilePicture: React.FC = () => {
  return (
    <div className="profile-picture">
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>
  );
};

export default ProfilePicture;
