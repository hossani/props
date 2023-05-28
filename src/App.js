import React from 'react';
import Profile from './profile/Profile';
import profileImage from './profile/profile-image.jpg';
import './App.css'
const App = () => {
  const handleName = (fullName) => {
    alert(`Profile user's full name: ${fullName}`);
  };

  return (
    <div>
      <Profile
        fullName="Hamza Hossani"
        bio="FullStack Developer"
        profession="Software Engineer"
        handleName={handleName}
      >
        {profileImage}
      </Profile>
    </div>
  );
};

export default App;

