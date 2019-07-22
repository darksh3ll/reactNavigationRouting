import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator,createAppContainer,createBottomTabNavigator,createSwitchNavigator } from "react-navigation";
import Home from './screens/Home'
import A from './screens/A'
import B from './screens/B'
import C from './screens/C'
import D from './screens/D'
import E from './screens/E'
import One from './screens/One';
import Two from './screens/Two';
import Three from './screens/Three';
import Four from './screens/Four';
import Five from './screens/Five';


const defaultNavigationOptions = {
  headerStyle: { backgroundColor: '#6b52ae', borderBottomWidth: 0 },
  headerTintColor: '#fff',
  headerBackTitle: null,
};

const HomeStack = createStackNavigator({
  Home:{
    screen:Home,
  },
})

const AlphbetStack = createStackNavigator({
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
},
{
  defaultNavigationOptions,
  }
);

const NumberStack = createStackNavigator({
 One: {
    screen: One
  },
  Two: {
    screen: Two
  },
  Three: {
    screen: Three
  },
  Four: {
    screen: Four
  },
 Five: {
    screen: Five
  },

},
{
  defaultNavigationOptions,
  }

);

const AppStack = createBottomTabNavigator(
  {
    Alphabet:AlphbetStack,
    Numbers:NumberStack
},
  {
    order: ['Alphabet','Numbers'],
    tabBarOptions: {
      activeBackgroundColor: '#6b52ae',
      inactiveBackgroundColor: '#FFF',
      inactiveTintColor:'black',
      activeTintColor:'white',
      labelStyle:'#FFF',
      showLabel:true,
    },
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    HomeStack: HomeStack,
    AlphbetStack: AppStack,
    NumberStack: NumberStack,
  },
  {
    initialRouteName: 'HomeStack',
  },
);

export default createAppContainer(SwitchNavigator);
