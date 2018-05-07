import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Item, Button, Scrap } from '../commons';

const { width } = Dimensions.get('window');

class DetailScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const id = params ? params.event.id : '0';
    const title = params ? params.event.title : ' test title ';
    // console.log(params.event);
    return (
      // <View>
        <Item>
          <View style={styles.container}>
            <Text style={styles.title}> Detail Screen </Text>
            <Scrap>
              <Text> {id} </Text>
            </Scrap>
            <Scrap>
              <Text> {title} </Text>
            </Scrap>
          </View>
        </Item>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20
  }
});

export default withNavigation(DetailScreen);
