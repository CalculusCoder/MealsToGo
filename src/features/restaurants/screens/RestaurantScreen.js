import { View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Searchbox from "../../../components/Searchbox";
import RestaurantInfo from "../components/RestaurantInfo";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled(View)`
  padding: 20px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

const RestaurantScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbox />
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfo />
        </RestaurantListContainer>
      </SafeArea>
    </>
  );
};

export default RestaurantScreen;
