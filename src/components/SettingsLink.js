import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { black, gray } from '@utils/colors';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function SettingsLink({
  last = false,
  onPress,
  icon,
  text,
  iconGradient = ['#FACD63', '#FC6C15'],
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={styles.wrapper}
    >
      <View style={styles.innerWrapper}>
        <View style={[styles.iconBg]}>
          <LinearGradient colors={iconGradient} style={styles.gradient} />
          {icon && (
            <FontAwesomeIcon
              style={styles.icon}
              icon={icon}
              color='#fff'
              size={18}
            />
          )}
        </View>

        <View
          style={[
            styles.textWrapper,
            last ? { borderBottomWidth: 0 } : { borderBottomWidth: 1 },
          ]}
        >
          <Text style={styles.text}>{text}</Text>
          <View style={styles.textIconWrapper}>
            <FontAwesomeIcon icon={faChevronRight} color='#fff' size={18} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 4,
  },
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  iconBg: {
    position: 'relative',
    zIndex: 1,
    marginRight: 16,
    padding: 6,
    borderRadius: 6,
    overflow: 'hidden',
  },
  icon: {
    position: 'relative',
    zIndex: 2,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 12,
    borderColor: gray[800],
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'Poppins_500Medium',
  },
  textIconWrapper: {
    marginRight: 8,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
});
