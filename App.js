import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { TabNavigator, TabBarBottom } from 'react-navigation';

import reducer from './src/reducer';

import { tabConfig } from './src/navigation/tabConfig';

import AuthNavigator from './src/navigation/AuthNavigator';
import MainStack from './src/navigation/MainNavigator';

const RootNavigation = TabNavigator(
  {
    Main: { screen: MainStack },
    Auth: { screen: AuthNavigator }
  },
  {
    navigationOptions: tabConfig,
    tabBarOptions: {
      activeTintColor: '#1c5d99',
      inactiveTintColor: '#8e8e8e'
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
);

let store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}

export default App;
