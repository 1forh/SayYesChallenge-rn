import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import DayCard from '@components/DayCard';
import Container from '@components/Container';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDays } from '@hooks/useDays';

// const STORAGE_KEY_DAYS = '@thirtydaysofnew.days';

export default function Days() {
  const { days } = useDays();

  console.log(days);
  // const [days, setDays] = useState([]);

  // const saveDaysData = async (days) => {
  //   console.log('💾 Saving days data');
  //   await AsyncStorage.setItem(STORAGE_KEY_DAYS, JSON.stringify(days));
  // };

  // const fetchDaysData = async () => {
  //   let daysFromStorage = await AsyncStorage.getItem(STORAGE_KEY_DAYS);

  //   if (daysFromStorage) {
  //     daysFromStorage = JSON.parse(daysFromStorage);
  //     setDays(daysFromStorage);
  //   } else {
  //     setDays(generateInitialDays());
  //   }
  // };

  // const resetStorage = async () => {
  //   await AsyncStorage.removeItem(STORAGE_KEY_DAYS);
  // };

  // const onUpdateDay = async (day) => {
  //   const updatedDays = days.map((d) => {
  //     if (d.index === day.index) {
  //       return day;
  //     } else {
  //       return d;
  //     }
  //   });
  //   try {
  //     await saveDaysData(updatedDays);
  //     setDays(updatedDays);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDaysData();
  // }, []);

  console.log(days);

  return (
    <SafeAreaView style={styles.wrapper} edges={['right', 'top', 'left']}>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          {days.map((day, index) => (
            <View key={index} style={{ marginBottom: 12 }}>
              <DayCard day={day} updateDay={onUpdateDay} />
            </View>
          ))}

          <View>
            <TouchableOpacity onPress={resetStorage}>
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Container>
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
