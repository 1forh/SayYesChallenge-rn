import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorTheme } from '@hooks/useColorTheme';
import { useTheme } from '@react-navigation/native';
import { SettingsOptionButton } from '@components/SettingsOptionButton';

export default function SettingsAppearance({ onPress }) {
  const { activeTheme, saveActiveTheme, isUsingSystem, saveIsUsingSystem } =
    useColorTheme();

  const toggleSwitch = () => saveIsUsingSystem(!isUsingSystem);

  const { colors } = useTheme();

  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <Text style={[{ color: colors.text }, styles.text]}>
          Use System Light/Dark Mode
        </Text>
        <View>
          <Switch onValueChange={toggleSwitch} value={isUsingSystem} />
        </View>
      </View>
      {!isUsingSystem && (
        <View style={styles.bottom}>
          <SettingsOptionButton
            active={activeTheme === 'dark'}
            onPress={() => saveActiveTheme('dark')}
          >
            Dark
          </SettingsOptionButton>
          <SettingsOptionButton
            active={activeTheme === 'light'}
            onPress={() => saveActiveTheme('light')}
          >
            Light
          </SettingsOptionButton>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 17,
    fontFamily: 'Poppins_400Regular',
  },
  bottom: {
    marginTop: 20,
  },
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
