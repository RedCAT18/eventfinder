import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { Input, Button } from '../commons';

import { withNavigation } from 'react-navigation';

const { width } = Dimensions.get('window');

class RegisterScreen extends Component {
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }

  _trySignUp = () => {
    const userData = {
      email: this.props.email,
      password: this.props.password,
      name: this.props.name
    };
    this.props.register(userData);
  };

  _renderBtn() {
    if (this.props.loading) {
      return <ActivityIndicator size={'large'} />;
    } else {
      return <Button onPress={this._trySignUp}>Sign Up</Button>;
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Sign Up</Text>
          <Input
            label="Email"
            value={this.props.email}
            onChangeText={value =>
              this.props.inputForm({ prop: 'email', value })
            }
            placeholder="Email here"
          />
          <Input
            label="User Name"
            value={this.props.name}
            onChangeText={value =>
              this.props.inputForm({ prop: 'name', value })
            }
            placeholder="Your Name here"
          />
          <Input
            label="Password"
            value={this.props.password}
            onChangeText={value =>
              this.props.inputForm({ prop: 'password', value })
            }
            placeholder="Password here"
            secureTextEntry
          />
          {this._renderBtn()}
          <Text
            style={styles.message}
            onPress={() => this.props.navigation.goBack()}
          >
            Back to Login page
          </Text>
        </View>
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
  title: {
    fontSize: 32,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        fontWeight: '100'
      },
      android: {
        fontFamily: 'sans-serif-thin'
      }
    })
  },
  box: {
    width: width - 20,
    padding: 10,
    alignItems: 'center'
  },
  message: {
    color: '#1c5d99',
    fontSize: 14,
    margin: 10
  }
});

export default withNavigation(RegisterScreen);
