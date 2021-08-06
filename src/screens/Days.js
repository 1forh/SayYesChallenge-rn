import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import DayCard from '@components/DayCard';
import Container from '@components/Container';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDays } from '@hooks/useDays';

export default function Days() {
  const { days, updateDay, resetDays } = useDays();

  return (
    <SafeAreaView style={styles.wrapper} edges={['right', 'top', 'left']}>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          {typeof days === 'object' &&
            days.map((day, index) => (
              <View key={index} style={{ marginBottom: 12 }}>
                <DayCard day={day} updateDay={updateDay} />
              </View>
            ))}

          <View>
            <TouchableOpacity onPress={resetDays}>
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
