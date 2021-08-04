import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DayCard({ dayNumber }) {
  return (
    <View style={styles.wrapper}>
      <Text>Day {dayNumber}</Text>

      <View>
        <Text>Upload an image</Text>
      </View>

      <View>
        <Text>Add description</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#cec', // todo update this
    borderRadius: 20,
    padding: 20,
    flex: 1,
  },
});
