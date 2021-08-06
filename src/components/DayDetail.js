import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function DayDetail({ day }) {
  const { title, description, image } = day;

  return (
    <View style={styles.wrapper}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode={'cover'}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  image: {
    width: '100%',
    height: 200,
    marginBottom: 24,
  },
  title: {
    marginBottom: 4,
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
  },
});
