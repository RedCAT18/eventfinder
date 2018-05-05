import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from '../components/MainScreen';
import AddScreen from '../components/AddScreen';
import DetailScreen from '../components/DetailScreen';

const MainStack = StackNavigator(
  {
    Main: { screen: MainScreen },
    Add: { screen: AddScreen },
    Detail: { screen: DetailScreen }
  },
  {
    initialRouteName: 'Main',
    headerMode: 'screen'
  }
);

export default MainStack;
