import React from 'react';
import { mount } from 'enzyme';
import RestaurantDetails from '../RestaurantDetails';

describe('RestaurantDetails', () => {
  const menu = [];

  it('has a total of zero to start with', () => {
    const restaurantDetails = mount(
      <RestaurantDetails restaurant={{ menu }} />,
    );

    expect(restaurantDetails).toIncludeText('Total: $0');
  });
});
