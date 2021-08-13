import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { gray } from '@utils/colors';

export default function Button({ icon, children, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Text style={styles.buttonText}>{children}</Text>
      <FontAwesomeIcon
        style={styles.buttonIcon}
        icon={icon}
        color={gray[800]}
        size={18}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: gray[800],
  },
  buttonIcon: {
    marginLeft: 8,
  },
});
