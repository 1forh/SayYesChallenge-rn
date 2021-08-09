import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export default function PageHeader({ goToSettings, title }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={goToSettings}
        activeOpacity={0.75}
      >
        <FontAwesomeIcon icon={faCog} color='#fff' size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
    fontSize: 20,
  },
  button: {},
});
