import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WrapperNav from '@navigation/WrapperNav';
import { DaysProvider } from '@hooks/useDays';

export default function App() {
  return (
    <View style={{ flexGrow: 1 }}>
      <DaysProvider>
        <WrapperNav />
        <StatusBar style='auto' />
      </DaysProvider>
    </View>
  );
}
