import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
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

const RestaurantDetails = ({ restaurant }) => {
  return (
    <Container>
      <Menu menu={restaurant.menu} />
      <section>
        <RestaurantName>{restaurant.name}</RestaurantName>
        <Figure>
          <Img src={restaurant.imageSrc} alt={restaurant.imageDescription} />
          <Caption>{restaurant.description}</Caption>
        </Figure>
      </section>
    </Container>
  );
};

export default RestaurantDetails;
