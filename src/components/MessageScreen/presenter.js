import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { withNavigation } from 'react-navigation';

import { Item, Scrap, Button } from '../commons';

class MessageScreen extends Component {
  render() {
    const { message } = this.props;

    return (
      <View>
        <Item>
          <Text>{message}</Text>
          <Scrap>
            <Button>Close</Button>
          </Scrap>
        </Item>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {},
  text: {
    fontSize: 14,
    fontWeight: '500'
  }
});

export default withNavigation(MessageScreen);
