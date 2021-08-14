import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Container({ style, children }) {
  return <View style={[style, styles.container]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
});
