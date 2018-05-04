import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';

import { withNavigation, SafeAreaView } from 'react-navigation';
import MainStack from '../../navigation/MainNavigator';

import { Button } from '../commons';
import ListItem from '../ListItem';

class MainScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.props.showEvent();
    this.createDataSource(this.props);
    // console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
    // console.log(nextProps);
  };
  
  createDataSource({ event_list }) {

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows({ event_list });
    // console.log(this.dataSource);
  }


  _renderItem(event) {
    // console.log(event);
    return <ListItem event={event}/>;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Add')}
        >Add</Button>        
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this._renderItem}
        />
      </SafeAreaView>
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