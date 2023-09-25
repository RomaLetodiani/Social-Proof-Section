import React from 'react';
import User from './User';

const Users = ({ userObjs }) => {
  return (
    <>
      {userObjs.map((item) => (
        <User
          key={item.id}
          id={item.id}
          name={item.name}
          user={item.user}
          desc={item.desc}
        />
      ))}
    </>
  );
};

export default Users;
