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
import Carousel from 'react-native-snap-carousel';

export default function Days({ navigation }) {
  const { days, updateDay } = useDays();

  const renderItem = ({ item, index }) => {
    return (
      <DayCard
        day={item}
        updateDay={updateDay}
        goToSuggestions={() => navigation.navigate('Suggestions')}
      />
    );
  };

  return (
    <PageWrapper>
      <Container>
        <PageHeader
          title='Days'
          goToSettings={() => navigation.navigate('Settings')}
        />
        <View style={{ flex: 1 }}>
          <Carousel
            data={days?.data}
            renderItem={renderItem}
            sliderHeight={310}
            itemHeight={310}
            vertical={true}
            enableMomentum={true}
          />
          {/* {typeof days?.data === 'object' &&
            days?.data.map((day, index) => (
              <View key={index} style={{ marginBottom: 12 }}>
                <DayCard
                  day={day}
                  updateDay={updateDay}
                  goToSuggestions={() => navigation.navigate('Suggestions')}
                />
              </View>
            ))} */}

          {/* <View>
            <Text>Day started: Placeholder</Text>
          </View> */}
        </View>
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
