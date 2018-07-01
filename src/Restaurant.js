import React from 'react';

const Restaurant = ({
  match: {
    params: { id },
  },
}) => {
  return <h1>Restaurant {id}</h1>;
};

export default Restaurant;
