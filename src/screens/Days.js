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
import PageWrapper from '@components/PageWrapper';
import PageHeader from '@components/PageHeader';
import { useDays } from '@hooks/useDays';

export default function Days({ navigation }) {
  const { days, updateDay } = useDays();

  return (
    <PageWrapper>
      <Container>
        <PageHeader
          title='Days'
          goToSettings={() => navigation.navigate('Settings')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {typeof days?.data === 'object' &&
            days?.data.map((day, index) => (
              <View key={index} style={{ marginBottom: 12 }}>
                <DayCard
                  day={day}
                  updateDay={updateDay}
                  goToSuggestions={() => navigation.navigate('Suggestions')}
                />
              </View>
            ))}

          {/* <View>
            <Text>Day started: Placeholder</Text>
          </View> */}
        </ScrollView>
      </Container>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    width: '100%',
    flex: 1,
  },
});
