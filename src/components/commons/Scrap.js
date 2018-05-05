import React from 'react';
import { View, StyleSheet } from 'react-native';

const Scrap = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    borderColor: '#eee',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  }
});

export { Scrap };
