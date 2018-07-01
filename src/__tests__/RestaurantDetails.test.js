import React from 'react';
import { mount } from 'enzyme';
import RestaurantDetails from '../RestaurantDetails';

describe('RestaurantDetails', () => {
  const menu = [{ item: 'burger', price: 5 }, { item: 'chips', price: 2 }];

  it('has a total of zero to start with', () => {
    const restaurantDetails = mount(
      <RestaurantDetails restaurant={{ menu }} />,
    );

    expect(restaurantDetails.find('Menu')).toHaveProp('quantities', {
      burger: 0,
      chips: 0,
    });
    expect(restaurantDetails).toIncludeText('Total: $0');
  });

  it('can increase and decrease quantities and show the new total', () => {
    const restaurantDetails = mount(
      <RestaurantDetails restaurant={{ menu }} />,
    );

    restaurantDetails.find('Menu').prop('increase')('burger')();
    restaurantDetails.find('Menu').prop('increase')('burger')();
    restaurantDetails.find('Menu').prop('increase')('chips')();
    restaurantDetails.find('Menu').prop('increase')('chips')();
    restaurantDetails.find('Menu').prop('decrease')('chips')();
    restaurantDetails.update();

    expect(restaurantDetails.find('Menu')).toHaveProp('quantities', {
      burger: 2,
      chips: 1,
    });
    expect(restaurantDetails).toIncludeText('Total: $12');
  });
});
