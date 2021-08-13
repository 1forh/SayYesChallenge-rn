import React, { useEffect, useRef } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useWalkThrough } from '@hooks/useWalkThrough';
import Button from '@components/Button';
import Paragraph from '@components/Paragraph';

export default function Splash({ navigation }) {
  const { saveSeenWalkThrough } = useWalkThrough();

  const takeChallenge = () => {
    navigation.navigate('Days');
    saveSeenWalkThrough(true);
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => fadeIn(), []);

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('@assets/splash.png')}
        style={styles.image}
      >
        <Animated.View style={[{ opacity: fadeAnim }, styles.animatedWrapper]}>
          <View style={styles.textWrapper}>
            <Paragraph>
              Each day for 30 days do something you’ve never done before. What
              you do can be simple or complex.
            </Paragraph>

            <Paragraph>
              Take a photo and upload it here to track your progress.
            </Paragraph>

            <Paragraph>
              Share your experiences with your friends as you take the
              challenge.
            </Paragraph>

            <Paragraph>
              After 30 days of getting out of your comfort zone, it will be
              easier to say yes to new things.
            </Paragraph>

            <Paragraph>Have fun!</Paragraph>
          </View>

          <View style={styles.actions}>
            <Button onPress={takeChallenge} icon={faChevronRight}>
              Take the challenge
            </Button>
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedWrapper: {
    marginTop: 225,
  },
  textWrapper: {
    marginTop: 12,
    maxWidth: 300,
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
});
