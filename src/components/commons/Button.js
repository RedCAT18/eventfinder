import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPressOut={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#1c5d99'
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20
  }
});

export { Button };
