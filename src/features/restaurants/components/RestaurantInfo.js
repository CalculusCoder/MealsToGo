import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
  elevation: 10;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Cracker Barrel",
    icon,
    photos = [
      "https://www.allrecipes.com/thmb/WqWggh6NwG-r8PoeA3OfW908FUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg",
    ],
    address = "100 SW 5th Avenue",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <>
      <RestaurantCard>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    </>
  );
};

export default RestaurantInfo;
