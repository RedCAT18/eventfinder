import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Platform,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';
import { Input, Button } from '../commons';

import { withNavigation } from 'react-navigation';

const { width } = Dimensions.get('window');

class LoginScreen extends Component {
  _getToken = () => {
    AsyncStorage.setItem('userToken', '12345');
    this.props.navigation.navigate('Personal');
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Login</Text>
          <Input label="Email" placeholder="Email here" />
          <Input label="Password" placeholder="Password here" secureTextEntry />
          <Button onPress={this._getToken}>Login</Button>
          <Text
            style={styles.message}
            onPress={() => this.props.navigation.navigate('Register')}
          >
            Not a member yet?
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        fontWeight: '100'
      },
      android: {
        fontFamily: 'sans-serif-thin'
      }
    })
  },
  box: {
    width: width - 20,
    padding: 10,
    alignItems: 'center'
  },
  message: {
    color: '#1c5d99',
    fontSize: 14,
    margin: 10
  }
});

export default withNavigation(LoginScreen);
