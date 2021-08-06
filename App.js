import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WrapperNav from '@navigation/WrapperNav';
import { DaysProvider, fetchDaysFromDB } from '@hooks/useDays';

export default async function App() {
  const days = await fetchDaysFromDB();

  return (
    <View>
      <DaysProvider days={days}>
        <WrapperNav />
        <StatusBar style='auto' />
      </DaysProvider>
    </View>
  );
}
