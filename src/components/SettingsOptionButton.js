import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@react-navigation/native';

export const SettingsOptionButton = ({ children, onPress, active }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colors.text }]}>
        {children}
      </Text>
      {active && <FontAwesomeIcon icon={faCheck} color='#fff' size={17} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontFamily: 'Poppins_400Regular',
  },
});
