import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@react-navigation/native';

export default function PhotoPicker({
  pick,
  photo,
  showText = true,
  iconSize = 52,
}) {
  const [image, setImage] = useState(photo);
  const { colors } = useTheme();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      pick(result.uri);
    }
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={pickImage}
        activeOpacity={0.75}
      >
        <FontAwesomeIcon icon={faImage} color={colors.text} size={iconSize} />
        {showText && (
          <Text style={[styles.buttonText, { color: colors.text }]}>
            Upload photo
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginTop: 6,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 17,
  },
});
