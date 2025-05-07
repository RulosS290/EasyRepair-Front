import React from 'react';

function Profile({ name, description, photo, size = 100 }) {
    return (
      <div>
        <img 
          src={photo} 
          alt={`Foto de ${name}`} 
          style={{ 
            borderRadius: '50%', 
            width: `${size}px`, 
            height: `${size}px` 
          }} 
        />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }
  

export default Profile;
