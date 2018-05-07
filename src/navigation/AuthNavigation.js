import React from 'react';
import { SwitchNavigator } from 'react-navigation';

import AuthScreen from '../components/AuthScreen';
import PersonalScreen from '../components/PersonalScreen';
import AuthLoadingScreen from '../components/AuthLoadingScreen';

const AuthNavigation = SwitchNavigator(
  {
    Personal: { screen: PersonalScreen },
    Auth: { screen: AuthScreen },
    AuthLoading: { screen: AuthLoadingScreen }
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default AuthNavigation;
