import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { black, gray } from '@utils/colors';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function SettingsLink({
  last = false,
  onPress,
  icon,
  text,
  iconBgColor = black,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={styles.wrapper}
    >
      <View style={styles.innerWrapper}>
        <View style={[styles.iconBg, { backgroundColor: iconBgColor }]}>
          {icon && <FontAwesomeIcon icon={icon} color='#fff' size={18} />}
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
    marginRight: 16,
    padding: 6,
    borderRadius: 6,
  },
  textWrapper: {
    // tailwind(
    //           'flex-row items-center justify-between flex-1 border-gray-700 py-3'
    //         ),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 12,
    borderColor: gray[800],
  },
  text: {
    // tailwind('text-white text-lg')
    color: '#fff',
    fontSize: 18,
  },
  textIconWrapper: {
    marginRight: 8,
  },
});
