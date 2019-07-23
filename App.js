import React from "react";
import
{
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import Home from './screens/Home'
import List from './screens/List'
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
  headerStyle: { backgroundColor: '#6b52ae' },
  headerBackTitle: null,
};

const HomeStack = createStackNavigator(
  {
    Home: Home
  },

)

const ListStack = createStackNavigator(
  {
    List:List
  }
)
const AlphbetStack = createStackNavigator(
  {
    A: A,
    B: B,
    C: C,
    D: D,
    E: E
  },
  {
    defaultNavigationOptions,
  }
);

const NumberStack = createStackNavigator(
  {
    One: One,
    Two: Two,
    Three: Three,
    Four: Four,
    Five: Five
  },
  {
    defaultNavigationOptions,
  }
);

const AppStack = createBottomTabNavigator(
  {
    Alphabet: AlphbetStack,
    Numbers: NumberStack,
    ListStack: ListStack
  },
  {
    order: ['Alphabet', 'Numbers','ListStack'],
    tabBarOptions: {
      activeBackgroundColor: '#6b52ae',
      inactiveBackgroundColor: '#FFF',
      inactiveTintColor: 'black',
      activeTintColor: 'white',
      labelStyle: '#FFF',
      showLabel: true,
    },
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    HomeStack: HomeStack,
    App: AppStack,
  },
  {
    initialRouteName: 'HomeStack',
  },
);

export default createAppContainer(SwitchNavigator);
