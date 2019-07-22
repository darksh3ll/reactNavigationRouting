import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import A from './screens/A'
import B from './screens/B'
import C from './screens/C'
import D from './screens/D'
import E from './screens/E'
import Home from './screens/Home'

const AppNavigator = createStackNavigator({
  Home:{
    screen:Home,
  },
  A: {
    screen: A
  },
  B: {
    screen: B
  },
  C: {
    screen: C
  },
  D: {
    screen: D
  },
 E: {
    screen: E
  }
});

export default createAppContainer(AppNavigator);