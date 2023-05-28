import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  // fonction handleName permet d'afficher une alert
  const handleClick = () => {
    handleName(fullName);
  };
  // Un peu de style pour le nom et le prenom de l'utilisateur
  const headStyle = {
    color: 'green',
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={headStyle}>{fullName}</h2>
      <img src={children} alt="Profile" style={{ width: '200px', borderRadius: '50%' }} />
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={handleClick}>Show Name</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: 'Anonyme',
  bio: 'No bio available for the moment',
  profession: 'Unknown',
};

export default Profile;

