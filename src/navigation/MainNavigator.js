import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from '../components/MainScreen';
import AddScreen from '../components/AddScreen';

const MainStack = StackNavigator(
  {
    Main: { screen: MainScreen },
    Add: { screen: AddScreen }
  },
  {
    initialRouteName: 'Main',
    headerMode: 'screen'
  }
);

export default MainStack;
