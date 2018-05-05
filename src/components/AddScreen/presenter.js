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

import { Item, Input } from '../commons';

const { width, height } = Dimensions.get('window');
class AddScreen extends Component {
  static navigationOptions = {
    title: 'Add New Event'
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView>
          <Input
            label={'Title'}
            placeholder={'Title'}
            value={this.props.title}
            onChangeText={value =>
              this.props.inputForm({ prop: 'title', value })
            }
          />
          <Input
            label={'Description'}
            placeholder={'Description'}
            value={this.props.description}
            onChangeText={value =>
              this.props.inputForm({ prop: 'description', value })
            }
          />
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
          <Input
            label={'Headcount'}
            placeholder={'Headcount'}
            value={this.props.headcount}
            onChangeText={value =>
              this.props.inputForm({ prop: 'headcount', value })
            }
          />
          <Text style={styles.label}>Deadline</Text>
          <DatePicker
            style={styles.picker}
            value={this.props.deadline}
            placeholder={this.props.deadline}
            customStyles={{ placeholderText: { color: '#000' } }}
            onDateChange={value =>
              this.props.updateEvent({ prop: 'deadline', value })
            }
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
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
  }
});

export default withNavigation(AddScreen);
