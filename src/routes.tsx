import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#00BFFF",
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
