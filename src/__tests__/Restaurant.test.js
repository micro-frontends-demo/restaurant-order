import React from 'react';
import { mount } from 'enzyme';
import Restaurant from '../Restaurant';

describe('Restaurant', () => {
  it('shows an error when the restaurant data fails to load', async () => {
    fetch.mockRejectOnce(new Error('Cannot'));

    const restaurant = mount(<Restaurant match={{ params: { id: '5' } }} />);

    await new Promise(setTimeout);
    restaurant.update();

    expect(restaurant).toIncludeText('unavailable');
  });

  it('shows the restaurant information once the data has loaded', async () => {
    fetch.once(JSON.stringify({ id: 5, name: 'Curry delights' }));

    const restaurant = mount(<Restaurant match={{ params: { id: '5' } }} />);

    expect(restaurant).toIncludeText('Loading');

    await new Promise(setTimeout);
    restaurant.update();

    expect(restaurant).toIncludeText('Curry delights');
  });
});
