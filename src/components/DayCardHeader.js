import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { format } from 'date-fns';
import { useTheme } from '@react-navigation/native';

function formatDate(d) {
  if (!d) return;
  return format(new Date(d), 'MMMM d');
}

export default function DayCardHeader({ day, date }) {
  const { colors } = useTheme();

  const formattedDate = formatDate(date);

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.text, { color: colors.text }]}>Day {day}</Text>
      <Text style={[styles.text, { color: colors.text }]}>{formattedDate}</Text>
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
    fontFamily: 'Poppins_400Regular',
  },
});
