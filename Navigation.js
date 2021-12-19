import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import MeeetingRoom from './screens/MeeetingRoom';

function Navigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen
          name="Home"
          component={Home} />
        <Stack.Screen
          name="Room"
          component={MeeetingRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
