import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from '../commons';

import { withNavigation } from 'react-navigation';

class AuthScreen extends Component {
  _getToken = () => {
    AsyncStorage.setItem('userToken', '12345');
    this.props.navigation.navigate('Personal');
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Login</Text>

        <Button onPress={this._getToken}>Get Token</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '600'
  }
});

export default withNavigation(AuthScreen);
