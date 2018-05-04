import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Dimensions } from 'react-native';

import { withNavigation, SafeAreaView } from 'react-navigation';
import MainStack from '../../navigation/MainNavigator';

import { Button } from '../commons';
import ListItem from '../ListItem';

const { width, height } = Dimensions.get('window');

class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.props.showEvent();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ event_list }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(event_list);
    // console.log(this.dataSource);
  }

  _renderItem = rowData => {
    // console.log(rowData);
    return <ListItem event={rowData} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate('Add')}>
          Add
        </Button>
        <ListView
          style={styles.list}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this._renderItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  list: {
    marginTop: 10,
    width: width * 0.9
  },
  text: {
    color: '#000',
    fontSize: 28,
    fontWeight: '700'
  }
});

export default withNavigation(MainScreen);
