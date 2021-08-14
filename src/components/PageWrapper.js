import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';

export default function PageWrapper({
  children,
  edges = ['right', 'left'],
  canScroll = true,
}) {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={styles.wrapper} edges={edges}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: headerHeight + 50 }}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 16,
  },
});
