import React from 'react';

import star from '../images/icon-star.svg';

const Stars = () => {
  return (
    <div className="stars">
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </div>
  );
};

export default Stars;
