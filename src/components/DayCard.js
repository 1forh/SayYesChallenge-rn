import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DayForm from '@components/DayForm';
import DayDetail from '@components/DayDetail';
import { gray } from '@utils/colors';

export default function DayCard({ day, updateDay }) {
  const [editing, setEditing] = useState(false);

  const onDayFormSubmit = (payload) => {
    updateDay(payload);
    setEditing(false);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Day {day?.index}</Text>

      {day?.title && !editing ? (
        <View>
          <DayDetail day={day} />
          <TouchableOpacity onPress={setEditing} style={styles.button}>
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <DayForm day={day} submit={onDayFormSubmit} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: gray[700],
  },
  wrapper: {
    backgroundColor: '#cec', // todo update this
    borderRadius: 8,
    padding: 20,
    flex: 1,
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});
