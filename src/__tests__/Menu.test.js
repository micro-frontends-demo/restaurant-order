import React from 'react';
import { mount } from 'enzyme';
import Menu from '../Menu';

describe('Menu', () => {
  it('has a row for each menu item', () => {
    const menu = mount(<Menu menu={[{ item: 'burger' }, { item: 'fries' }]} />);

    expect(menu.find('tr')).toHaveLength(2);
  });

  it('shows the price in dollars', () => {
    const menu = mount(<Menu menu={[{ item: 'burger', price: 5 }]} />);

    expect(menu).toIncludeText('$5');
  });
});
