import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { LinearGradient } from 'expo-linear-gradient';
import { faCog, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@react-navigation/native';

export const GoToSettingsButton = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Settings')}
      activeOpacity={0.75}
    >
      <FontAwesomeIcon icon={faCog} color={colors.text} size={24} />
    </TouchableOpacity>
  );
};

export default function Button({ icon, children, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <LinearGradient
        colors={['#FACD63', '#FC6C15']}
        style={styles.imageGradient}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.buttonText}>{children}</Text>
        <FontAwesomeIcon
          style={styles.buttonIcon}
          icon={icon}
          color={'#fff'}
          size={18}
        />
      </View>
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
    overflow: 'hidden',
  },
  textWrapper: {
    position: 'relative',
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
  },
  buttonIcon: {
    marginLeft: 8,
  },
  imageGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
});
