import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import PagerView from 'react-native-pager-view';
import DayCard from '@components/DayCard';
import Container from '@components/Container';
import { SafeAreaView } from 'react-native-safe-area-context';

const STORAGE_KEY_DAYS = '@thirtydaysofnew.days';

const generateInitialDays = (count = 30) => {
  const initialDays = [];
  for (let index = 1; index <= count; index++) {
    initialDays.push({
      index: index,
      image: '',
      description: '',
    });
  }
  return initialDays;
};

export default function App() {
  const [days, setDays] = useState([]);

  const saveDaysData = async (days) => {
    console.log('💾 Saving days data...');
    await AsyncStorage.setItem(STORAGE_KEY_DAYS, days);
  };

  const fetchDaysData = async () => {
    try {
      const daysFromStorage = await AsyncStorage.getItem(STORAGE_KEY_DAYS);

      if (daysFromStorage) {
        setDays(daysFromStorage);
      } else {
        setDays(generateInitialDays());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDaysData();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          {days &&
            days.map((day, index) => (
              <View key={index} style={{ marginBottom: 12 }}>
                <DayCard day={day} />
              </View>
            ))}
        </ScrollView>
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
