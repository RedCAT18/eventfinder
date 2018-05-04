import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { Item } from '../commons';

class ListItem extends Component {
  render() {
    const { id, title } = this.props.event;
    console.log(this.props.event);
    return (
      <Item>
        <View style={styles.container}>
          <Text style={styles.id}>{id}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Item>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  id: {
    fontSize: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: '400'
  }
});

export default withNavigation(ListItem);