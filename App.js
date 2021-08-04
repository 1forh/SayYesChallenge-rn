import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import DayCard from '@components/DayCard';
import Container from '@components/Container';

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Container>
        <PagerView style={styles.pagerView} initialPage={0}>
          <DayCard key='0' dayNumber='1' />
        </PagerView>
      </Container>

      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  pagerView: {
    width: '100%',
    flex: 1,
  },
});
