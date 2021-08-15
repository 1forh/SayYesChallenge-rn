import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function SuggestionsLink({ goToSuggestions }) {
  const { colors } = useTheme();

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={goToSuggestions}
        activeOpacity={0.75}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          Need a suggestion?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
  },
  text: {
    fontSize: 17,
    fontFamily: 'Poppins_500Medium',
  },
});
