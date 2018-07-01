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

const Menu = ({ menu }) => (
  <Container>
    <Title>Menu:</Title>
    <table>
      <tbody>
        {menu.map(menuItem => (
          <tr key={menuItem.item}>
            <Td>${menuItem.price}</Td>
            <Td>{menuItem.item}</Td>
            <Td>
              <Button>-</Button>
            </Td>
            <Td>x0</Td>
            <Td>
              <Button>+</Button>
            </Td>
            <Td>$0</Td>
          </tr>
        ))}
      </tbody>
    </table>
  </Container>
);

export default Menu;
