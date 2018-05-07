import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions
} from 'react-native';
import { withNavigation } from 'react-navigation';
import DatePicker from 'react-native-datepicker';

import { Item, Input, Button, Scrap } from '../commons';

const { width, height } = Dimensions.get('window');

class AddScreen extends Component {
  static navigationOptions = {
    title: 'Add New Event'
  };

  _addEvent = () => {
    console.log(this.props);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView>
          <Scrap>
            <Input
              label={'Title'}
              placeholder={'Title'}
              value={this.props.title}
              onChangeText={value =>
                this.props.inputForm({ prop: 'title', value })
              }
            />
          </Scrap>
          <Scrap>
            <Input
              label={'Description'}
              placeholder={'Description'}
              value={this.props.description}
              multiline={true}
              onChangeText={value =>
                this.props.inputForm({ prop: 'description', value })
              }
            />
          </Scrap>
          <Scrap>
            <Text style={styles.label}>Date</Text>
            <DatePicker
              style={styles.picker}
              value={this.props.date}
              placeholder={this.props.date}
              customStyles={{ placeholderText: { color: '#000' } }}
              onDateChange={value =>
                this.props.inputForm({ prop: 'date', value })
              }
            />
          </Scrap>
          <Scrap>
            <Input
              label={'Headcount'}
              placeholder={'Headcount'}
              value={this.props.headcount}
              onChangeText={value =>
                this.props.inputForm({ prop: 'headcount', value })
              }
            />
          </Scrap>
          <Scrap>
            <Text style={styles.label}>Deadline</Text>
            <DatePicker
              style={styles.picker}
              value={this.props.deadline}
              placeholder={this.props.deadline}
              customStyles={{ placeholderText: { color: '#000' } }}
              onDateChange={value =>
                this.props.inputForm({ prop: 'deadline', value })
              }
            />
          </Scrap>
          <View style={styles.place}>
            <Button onPress={this._addEvent}>Add Event</Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text: {
    color: '#000',
    fontSize: 28,
    fontWeight: '700'
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start'
  },
  picker: {
    marginBottom: 10,
    width: width * 0.8
  },
  place: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});

export default withNavigation(AddScreen);
