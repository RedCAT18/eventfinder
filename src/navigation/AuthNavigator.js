import React from 'react';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import PersonalScreen from '../components/PersonalScreen';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import LoginScreen from '../components/LoginScreen';
import RegisterScreen from '../components/RegisterScreen';

const SignStack = StackNavigator(
  {
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen }
  },
  {
    initialRouteName: 'Login'
  }
);

const AuthNavigator = SwitchNavigator(
  {
    Personal: { screen: PersonalScreen },
    AuthLoading: { screen: AuthLoadingScreen },
    Sign: SignStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default AuthNavigator;
