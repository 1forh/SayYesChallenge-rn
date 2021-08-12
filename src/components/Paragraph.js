import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Paragraph({ children }) {
  return <Text style={styles.paragraph}>{children}</Text>;
}

const styles = StyleSheet.create({
  paragraph: {
    marginBottom: 16,
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Poppins_400Regular',
  },
});
