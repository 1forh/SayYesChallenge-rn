import React from 'react';
import { ScrollView, Text } from 'react-native';
import Container from '@components/Container';
import PageWrapper from '@components/PageWrapper';
import SettingsLinkGroup from '@components/SettingsLinkGroup';
import SettingsAppearance from '@components/SettingsAppearance';

// import { config } from '@utils/config';
// import {
//   faStar,
//   faTrash,
//   faDownload,
//   faCalendar,
//   faInfoCircle,
//   faPepperHot,
// } from '@fortawesome/free-solid-svg-icons';

export default function SettingsDisplay({ navigation }) {
  return (
    <PageWrapper extraMarginTop={false}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <SettingsLinkGroup>
            <SettingsAppearance />
          </SettingsLinkGroup>
        </Container>
      </ScrollView>
    </PageWrapper>
  );
}
