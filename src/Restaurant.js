import React from 'react';

const Restaurant = ({ match: { params: { id } } }) => {
  return (
    <div>Restaurant: {id}</div>
  );
};

export default Restaurant;
