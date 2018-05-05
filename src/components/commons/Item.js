import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Item = ({ children, onPress }) => {
  return (
    <View style={styles.container} onPressOut={onPress}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#a4a4a4',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2
      },
      android: {
        elevation: 1
      }
    }),
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10
  }
});

export { Item };
