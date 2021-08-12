import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Heading({ children, marginBottom = 16 }) {
  return <Text style={[styles.heading, { marginBottom }]}>{children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Poppins_700Bold',
  },
});
