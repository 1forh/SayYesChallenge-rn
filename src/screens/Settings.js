import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Container from '@components/Container';
import PageHeader from '@components/PageHeader';
import PageWrapper from '@components/PageWrapper';
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
      <View>{children}</View>
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
          <Text style={{ color: '#fff' }}>{text}</Text>
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
    <PageWrapper>
      <Container>
        <PageHeader title='Settings' goBack={() => navigation.goBack()} />

        <SettingsLinkGroup>
          <SettingsLink
            text={'Rate 30 Days of New'}
            // iconBgColorClass={'bg-pink-600'}
            // icon={faStar}
            last={true}
            onPress={requestReview}
          />
        </SettingsLinkGroup>
      </Container>
    </PageWrapper>
  );
}
