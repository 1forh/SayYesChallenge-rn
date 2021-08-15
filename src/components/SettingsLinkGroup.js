import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function SettingsLinkGroup({ children, style }) {
  const { colors } = useTheme();

  return (
    <View style={style}>
      <View
        style={[
          styles.wrapper,
          { backgroundColor: colors.backgroundSecondary },
        ]}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
    borderRadius: 10,
  },
});
