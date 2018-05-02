import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class PersonalScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Personal Screen</Text>
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
  }
});

export default PersonalScreen;