import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import Container from '@components/Container';
// import ScreenHeading from '@components/ScreenHeading';
// import {
//   ChevronRightIcon,
//   StarIcon,
//   LockClosedIcon,
//   GlobeIcon,
//   QuestionMarkCircleIcon,
// } from 'react-native-heroicons/solid';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

// import { LogoutIcon } from 'react-native-heroicons/outline';
import * as Linking from 'expo-linking';

const SettingsLinkGroup = ({ children, style }) => {
  return (
    <View style={style}>
      <View style={tailwind('bg-gray-800 rounded-lg')}>{children}</View>
    </View>
  );
};

const SettingsLink = ({
  last = false,
  onPress,
  icon,
  text,
  iconBgColorClass = 'bg-gray-900',
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
      <View>
        <View>
          {/* {icon && <FontAwesomeIcon color='#fff' icon={icon} />} */}
        </View>

        <View>
          <Text>{text}</Text>
          <View>{/* <ChevronRightIcon color={gray[500]} size={30} /> */}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Settings({ navigation }) {
  const requestReview = () => {
    Linking.openURL(
      `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${1570186525}?action=write-review`
    );
  };

  const goToWebsite = () => {
    Linking.openURL(`https://www.tallylog.com`);
  };

  const goToSupport = () => {
    Linking.openURL(`https://www.tallylog.com/support`);
  };

  return (
    <SafeAreaView>
      <Container>
        {/* <ScreenHeading>Settings</ScreenHeading> */}
        <SettingsLinkGroup>
          <SettingsLink
            text={'Rate BrushMore'}
            // iconBgColorClass={'bg-pink-600'}
            // icon={faStar}
            last={true}
            onPress={requestReview}
          />
        </SettingsLinkGroup>
      </Container>
    </SafeAreaView>
  );
}
