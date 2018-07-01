import React from 'react';
import { mount } from 'enzyme';
import Restaurant from '../Restaurant';

describe('Restaurant', () => {
  it('extracts the restaurant ID out of the path params', () => {
    const match = { params: { id: '5' } };
    const restaurant = mount(<Restaurant match={match} />);

    expect(restaurant).toHaveText('Restaurant 5');
  });
});
