import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function SuggestionsLink({ goToSuggestions }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={goToSuggestions}
        activeOpacity={0.75}
      >
        <Text style={styles.text}>Need a suggestion?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Poppins_500Medium',
  },
});
