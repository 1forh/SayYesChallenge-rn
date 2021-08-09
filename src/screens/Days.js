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
  const { days, updateDay, resetDays } = useDays();

  return (
    <PageWrapper>
      <Container>
        <PageHeader
          title='Days'
          goToSettings={() => navigation.navigate('Settings')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View>
            <Text>Day started: Placeholder</Text>
          </View> */}
          <View style={{ marginBottom: 12 }}>
            <DayCard
              goToSuggestions={() => navigation.navigate('Suggestions')}
            />
          </View>

          {/* {typeof days === 'object' &&
            days.map((day, index) => (
              <View key={index} style={{ marginBottom: 12 }}>
                <DayCard day={day} updateDay={updateDay} />
              </View>
            ))} */}
          {/* <View>
            <TouchableOpacity onPress={resetDays}>
              <Text>Reset</Text>
            </TouchableOpacity>
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
