import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { withNavigation } from 'react-navigation';
import MainStack from '../../navigation/MainNavigator';

import { Button } from '../commons';

class MainScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Add')}
        >Add</Button>        
        <Text style={styles.text}>Main Screen</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#000',
    fontSize: 28,
    fontWeight: '700'
  },
});

export default withNavigation(MainScreen);