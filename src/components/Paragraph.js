import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function Paragraph({ children }) {
  const { colors } = useTheme();

  return (
    <Text style={[styles.paragraph, { color: colors.text }]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    marginBottom: 16,
    fontSize: 17,
    fontFamily: 'Poppins_400Regular',
  },
});
