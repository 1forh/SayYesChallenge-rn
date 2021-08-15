import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function Heading({ children, marginBottom = 16 }) {
  const { colors } = useTheme();

  return (
    <Text style={[styles.heading, { marginBottom, color: colors.text }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 17,
    fontFamily: 'Poppins_700Bold',
  },
});
