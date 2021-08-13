import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black } from '@utils/colors';

export default function SettingsLinkGroup({ children, style }) {
  return (
    <View style={style}>
      <View style={styles.wrapper}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
    backgroundColor: black,
    borderRadius: 10,
  },
});
