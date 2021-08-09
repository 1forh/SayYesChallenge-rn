import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { format } from 'date-fns';

function formatDate(d) {
  if (!d) return;
  return format(new Date(d), 'MMMM d');
}

export default function DayCardHeader({ day, date }) {
  const formattedDate = formatDate(date);

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
