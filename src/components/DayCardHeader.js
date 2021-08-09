import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { format } from 'date-fns';

export default function DayCardHeader({ day, date }) {
  const formattedDate = format(date, 'MMMM d');

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Day {day}</Text>
      <Text style={styles.text}>{formattedDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
  },
});
