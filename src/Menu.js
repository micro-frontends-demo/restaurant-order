import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 30px;
`;

const Container = styled.div`
  margin-top: 50px;
  font-size: 25px;
`;

const Ol = styled.ol`
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
`;

const QtyBox = styled.span`
  margin-left: 20px;
`;

const Cell = styled.span`
  display: inline-block;
  padding: 0 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border-radius: 12px;
  border: 1px solid black;
  font-size: 18px;
`;

const MenuRow = ({ item, price, quantity, increase, decrease }) => (
  <Li>
    <span>
      <Cell style={{ width: 55 }}>${price}</Cell>
      <Cell>{item}</Cell>
    </span>
    <QtyBox>
      <Cell>
        <Button onClick={decrease} disabled={quantity === 0}>
          -
        </Button>
      </Cell>
      <Cell>x{quantity}</Cell>
      <Cell>
        <Button onClick={increase}>+</Button>
      </Cell>
      <Cell>${quantity * price}</Cell>
    </QtyBox>
  </Li>
);

const Menu = ({ menu, quantities, increase, decrease }) => (
  <Container>
    <Title>Menu:</Title>
    <Ol>
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
    </Ol>
  </Container>
);

export default Menu;
