import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Input } from '../commons';

class AddScreen extends Component {
  static navigationOptions = {
    title: 'Add New Event'
  };

  // state = {
  //   title: '',
  //   description: ''
  // };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.text}>Add Screen</Text>
        <Input label={'Title'} placeholder={'Title'} value={this.props.title} />
        <Input
          label={'Description'}
          placeholder={'Description'}
          value={this.props.description}
        />
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
  text: {
    color: '#000',
    fontSize: 28,
    fontWeight: '700'
  }
});

export default withNavigation(AddScreen);
