import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { Item } from '../commons';

const { width } = Dimensions.get('window');

class ListItem extends Component {
  _showDetail = () => {
    this.props.navigation.navigate('Detail', { event: this.props.event });
  };

  render() {
    const { id, title } = this.props.event;
    // console.log(this.props.event);
    return (
      <TouchableWithoutFeedback onPressOut={this._showDetail}>
        <View>
          <Item>
            <View style={styles.container}>
              <Text style={styles.id}>{id}</Text>
              <Text style={styles.title}>{title}</Text>
            </View>
          </Item>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    width: width * 0.8
  },
  id: {
    fontSize: 24,
    fontWeight: '600'
  },
  title: {
    fontSize: 24,
    fontWeight: '400'
  }
});

export default withNavigation(ListItem);
