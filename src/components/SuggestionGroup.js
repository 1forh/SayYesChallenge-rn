import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from '@components/Heading';

export default function SuggestionGroup({ title, children, suggestions }) {
  return (
    <View style={styles.wrapper}>
      <Heading>{title}</Heading>
      <View>
        {suggestions.map((s, i) => (
          <View style={styles.listItem} key={i}>
            <Text style={styles.listItemDot}>{'\u2022'}</Text>
            <Text style={styles.listItemText}>{s}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  listItem: {
    marginBottom: 8,
    flexDirection: 'row',
  },
  listItemDot: {
    color: '#fff',
    fontSize: 17,
  },
  listItemText: {
    flex: 1,
    paddingLeft: 5,
    color: '#fff',
    fontSize: 17,
  },
});
