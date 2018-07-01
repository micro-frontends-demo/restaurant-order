import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LeftColumn = styled.section`
  display: flex;
  flex-direction: column;
`;

const RestaurantName = styled.h1`
  font-size: 40px;
  margin: 10px 0 20px;
`;

const Img = styled.img`
  width: 500px;
  margin-bottom: 10px;
`;

const Figure = styled.figure`
  margin: 0;
`;

const Caption = styled.figcaption`
  font-size: 30px;
`;

const Total = styled.div`
  align-self: flex-end;
  margin: 50px 0 0;
  font-size: 30px;
`;

const OrderButton = styled.button`
  padding: 10px 15px;
  margin-top: 15px;
  align-self: flex-end;
  border: none;
  background-color: #e79652;
  font-size: 25px;
`;

class RestaurantDetails extends React.Component {
  render() {
    const {
      menu,
      name,
      imageSrc,
      imageDescription,
      description,
    } = this.props.restaurant;

    return (
      <Container>
        <LeftColumn>
          <Menu menu={menu} />
          <Total>Total: $0</Total>
          <OrderButton>Order now</OrderButton>
        </LeftColumn>
        <section>
          <RestaurantName>{name}</RestaurantName>
          <Figure>
            <Img src={imageSrc} alt={imageDescription} />
            <Caption>{description}</Caption>
          </Figure>
        </section>
      </Container>
    );
  }
}
export default RestaurantDetails;
