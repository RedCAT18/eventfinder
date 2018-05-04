import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Input = ({
  label,
  value,
  placeholder,
  secureTextEntry = false,
  onChangeText
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#aaa'}
        underlineColorAndroid={'transparent'}
        autoCorrect={false}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    width: width * 0.8
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    justifyContent: 'center'
  },
  input: {
    color: '#000',
    marginTop: 10,
    paddingVertical: 5,
    fontSize: 14,
    lineHeight: 23
  }
});

export { Input };
