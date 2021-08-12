import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '@components/Container';
import PageWrapper from '@components/PageWrapper';
import PageHeader from '@components/PageHeader';
import Paragraph from '@components/Paragraph';
import Heading from '@components/Heading';
import { config } from '@utils/config';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useWalkThrough } from '@hooks/useWalkThrough';

export default function WalkThrough({ navigation }) {
  const { saveSeenWalkThrough } = useWalkThrough();

  const takeChallenge = () => {
    navigation.navigate('Days');
    saveSeenWalkThrough(true);
  };

  return (
    <PageWrapper>
      <Container>
        <PageHeader title={config.name} />

        <ScrollView style={styles.scrollWrapper}>
          <Heading>The Challenge</Heading>

          <Paragraph>
            Each day for 30 days do something you’ve never done before. Can be
            simple, can be complex.
          </Paragraph>

          <Paragraph>
            Each day after completing your awesome new experience, snap a photo
            and upload it here.
          </Paragraph>

          <Paragraph>
            Share your experiences with your friends as you take the challenge.
          </Paragraph>

          <Paragraph>
            When you’re finished with the challenge, you’ll have 30 brand new
            experiences in your life to look back on.
          </Paragraph>

          <Paragraph>
            You’ll also hopefully start a new habit of opening up, getting out
            of your comfort zone, and trying new things in your life.
          </Paragraph>

          <View style={styles.linkWrapper}>
            <TouchableOpacity
              onPress={takeChallenge}
              style={styles.link}
              activeOpacity={0.75}
            >
              <Text style={styles.linkText}>Take the challenge </Text>
              <FontAwesomeIcon icon={faChevronRight} color='#fff' size={18} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Container>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  scrollWrapper: {
    marginBottom: 60,
  },
  linkWrapper: {
    marginTop: 48,
    alignItems: 'center',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 20,
    color: '#fff',
  },
});
