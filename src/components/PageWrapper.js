import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PageWrapper({ children }) {
  return (
    <SafeAreaView style={styles.wrapper} edges={['right', 'top', 'left']}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 0,
    flex: 1,
  },
});
