import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 30px;
`;

const Container = styled.div`
  margin-top: 50px;
  width: 500px;
`;

const Td = styled.td`
  padding: 10px;
  font-size: 25px;
`;

const Button = styled.button`
  border-radius: 12px;
  border: 1px solid black;
  font-size: 18px;
`;

const MenuRow = ({ item, price, quantity, increase, decrease }) => (
  <tr>
    <Td>${price}</Td>
    <Td>{item}</Td>
    <Td>
      <Button onClick={decrease} disabled={quantity === 0}>
        -
      </Button>
    </Td>
    <Td>x{quantity}</Td>
    <Td>
      <Button onClick={increase}>+</Button>
    </Td>
    <Td>${quantity * price}</Td>
  </tr>
);

const Menu = ({ menu, quantities, increase, decrease }) => (
  <Container>
    <Title>Menu:</Title>
    <table>
      <tbody>
        {menu.map(menuItem => (
          <MenuRow
            key={menuItem.item}
            item={menuItem.item}
            price={menuItem.price}
            quantity={quantities[menuItem.item]}
            increase={increase(menuItem.item)}
            decrease={decrease(menuItem.item)}
          />
        ))}
      </tbody>
    </table>
  </Container>
);

export default Menu;
