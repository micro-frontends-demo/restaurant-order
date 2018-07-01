import React from 'react';
import { mount } from 'enzyme';
import Menu from '../Menu';

describe('Menu', () => {
  it('has a row for each menu item', () => {
    const menu = mount(
      <Menu
        menu={[{ item: 'burger' }, { item: 'chips' }]}
        quantities={{ burger: 0 }}
        decrease={() => {}}
        increase={() => {}}
      />,
    );

    expect(menu.find('tr')).toHaveLength(2);
  });

  it('shows the price in dollars', () => {
    const menu = mount(
      <Menu
        menu={[{ item: 'burger', price: 5 }]}
        quantities={{ burger: 0 }}
        decrease={() => {}}
        increase={() => {}}
      />,
    );

    expect(menu).toIncludeText('$5');
  });

  it('shows the quantities and subtotals of items', () => {
    const menu = mount(
      <Menu
        menu={[{ item: 'burger', price: 5 }, { item: 'chips', price: 2 }]}
        quantities={{ burger: 3, chips: 2 }}
        decrease={() => {}}
        increase={() => {}}
      />,
    );

    expect(menu.find('tr').at(0)).toIncludeText('x3');
    expect(menu.find('tr').at(0)).toIncludeText('$15');
    expect(menu.find('tr').at(1)).toIncludeText('x2');
    expect(menu.find('tr').at(1)).toIncludeText('$4');
  });

  it('disables the decrease button when quantity is 0', () => {
    const menu = mount(
      <Menu
        menu={[{ item: 'burger', price: 5 }, { item: 'chips', price: 2 }]}
        quantities={{ burger: 0, chips: 1 }}
        decrease={() => {}}
        increase={() => {}}
      />,
    );

    expect(
      menu
        .find('tr')
        .at(0)
        .find('button')
        .at(0),
    ).toBeDisabled();
    expect(
      menu
        .find('tr')
        .at(1)
        .find('button')
        .at(0),
    ).not.toBeDisabled();
  });

  it('binds event handlers for increasing and decreasing quantities', () => {
    const increaseSpy = jest.fn();
    const increase = item => () => increaseSpy(item);

    const decreaseSpy = jest.fn();
    const decrease = item => () => decreaseSpy(item);

    const quantities = { burger: 0, chips: 1 };

    const menu = mount(
      <Menu
        menu={[{ item: 'burger', price: 5 }, { item: 'chips', price: 2 }]}
        quantities={quantities}
        increase={increase}
        decrease={decrease}
      />,
    );

    menu
      .find('tr')
      .at(0)
      .find('button')
      .at(1)
      .simulate('click');
    menu
      .find('tr')
      .at(1)
      .find('button')
      .at(0)
      .simulate('click');

    expect(increaseSpy).toHaveBeenCalledWith('burger');
    expect(decreaseSpy).toHaveBeenCalledWith('chips');
  });
});
