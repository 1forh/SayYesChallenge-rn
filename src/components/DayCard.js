import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import DayCardHeader from '@components/DayCardHeader';
import PhotoPicker from '@components/PhotoPicker';
import SuggestionsLink from '@components/SuggestionsLink';
import { black } from '@utils/colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function DayCard({ goToSuggestions, updateDay, day }) {
  const [image, setImage] = useState(day?.image);

  useEffect(() => {
    if (!image) return;

    if (image !== day?.image) {
      updateDay({ ...day, image });
    }
  }, [image]);

  return (
    <View style={styles.wrapper}>
      <LinearGradient colors={[black, '#060708']} style={styles.gradient} />
      <View style={styles.inner}>
        <DayCardHeader day={day?.index} date={day?.date} />
        {image ? (
          <View style={styles.imageWrapper}>
            <LinearGradient
              colors={['rgba(0,0,0,0.8)', 'transparent']}
              style={styles.imageGradient}
            />
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ) : (
          <View style={styles.content}>
            <PhotoPicker pick={setImage} photo={image} />

            {typeof goToSuggestions === 'function' && (
              <SuggestionsLink goToSuggestions={goToSuggestions} />
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: black,
    borderRadius: 8,
    height: 310,
    overflow: 'hidden',
  },
  inner: {
    position: 'relative',
    zIndex: 2,
    height: 310,
    padding: 20,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: -200,
    zIndex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
  },
  imageGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '50%',
    zIndex: 1,
  },
});
