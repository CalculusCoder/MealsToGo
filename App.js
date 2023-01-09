import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";

const App = () => {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
