import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import DayCard from '@components/DayCard';
import Container from '@components/Container';
import PageWrapper from '@components/PageWrapper';
import { useDays } from '@hooks/useDays';

export default function Days({ navigation }) {
  const { days, updateDay } = useDays();

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ marginBottom: 12 }} key={index}>
        <DayCard
          day={item}
          updateDay={updateDay}
          goToSuggestions={() => navigation.navigate('Suggestions')}
        />
      </View>
    );
  };

  return (
    <PageWrapper canScroll={false}>
      <Container>
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
