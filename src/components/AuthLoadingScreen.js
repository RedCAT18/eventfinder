import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage,
  StatusBar
} from 'react-native';
import { withNavigation } from 'react-navigation';

class AuthLoadingScreen extends Component {
  componentDidMount() {
    this._boorstrapAsync();
  }

  _boorstrapAsync = async () => {
    AsyncStorage.removeItem('userToken');
    const userToken = await AsyncStorage.getItem('usertoken');
    this.props.navigation.navigate(userToken ? 'Personal' : 'Sign');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={48} />
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default withNavigation(AuthLoadingScreen);
