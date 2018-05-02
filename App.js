import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import reducer from './src/reducer';
import { tabConfig } from './src/navigation/tabConfig';

import PersonalScreen from './src/components/Personal/PersonalScreen';

import MainStack from './src/navigation/MainNavigator';

const RootNavigation = TabNavigator(
  {
    Main: { screen : MainStack },
    Personal: { screen: PersonalScreen },
  },
  {
    navigationOptions: tabConfig,
    tabBarOptions: {
      activeTintColor: '#1c5d99',
      inactiveTintColor: '#8e8e8e',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class App extends Component {
  render() {
    const store = createStore(reducer);
    return (
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
    );
  }
}

export default App;
