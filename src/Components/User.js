import React from 'react';

const User = ({ name, user, desc, id }) => {
  return (
    <div className={`user user-${id}`}>
      <div>
        <img src={name} alt={`${user}`} />
        <div>
          <h2>{user}</h2>
          <h3>Verified Buyer</h3>
        </div>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default User;
