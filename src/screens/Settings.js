import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import Container from '@components/Container';
import PageHeader from '@components/PageHeader';
import PageWrapper from '@components/PageWrapper';
import SettingsLinkGroup from '@components/SettingsLinkGroup';
import SettingsLink from '@components/SettingsLink';
import { useDays } from '@hooks/useDays';
import { useWalkThrough } from '@hooks/useWalkThrough';
import { config } from '@utils/config';
import {
  faStar,
  faTrash,
  faDownload,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import * as Linking from 'expo-linking';

export default function Settings({ navigation }) {
  const { resetDays, exportDaysData } = useDays();
  const { clearWalkThroughData } = useWalkThrough();

  const twoButtonAlert = () =>
    Alert.alert(
      'Clear all data?',
      'Are you sure you want to clear all data?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => clearData() },
      ],
      { cancelable: false }
    );

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

  const clearData = () => {
    resetDays();
    clearWalkThroughData();
    navigation.navigate('Splash');
  };

  const exportData = () => {
    exportDaysData();
    console.log('exportData');
  };

  return (
    <PageWrapper>
      <Container>
        <PageHeader title='Settings' goBack={() => navigation.goBack()} />

        {/* <SettingsLinkGroup>
          <SettingsLink
            text={'Number of days'}
            iconBgColor={'#71717A'}
            icon={faCalendar}
            last={true}
            onPress={resetDays}
          />
        </SettingsLinkGroup> */}

        <SettingsLinkGroup>
          <SettingsLink
            text={`Rate ${config.name}`}
            iconBgColor={'#EC4899'}
            icon={faStar}
            last={true}
            onPress={requestReview}
          />
        </SettingsLinkGroup>

        <SettingsLinkGroup>
          {/* <SettingsLink
            text={'Export data'}
            iconBgColor={'#9333EA'}
            icon={faDownload}
            onPress={exportData}
          /> */}
          <SettingsLink
            text={'Clear data'}
            iconBgColor={'#EF4444'}
            icon={faTrash}
            last={true}
            onPress={twoButtonAlert}
          />
        </SettingsLinkGroup>
      </Container>
    </PageWrapper>
  );
}
