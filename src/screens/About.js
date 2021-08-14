import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Container from '@components/Container';
import PageWrapper from '@components/PageWrapper';
import PageHeader from '@components/PageHeader';
import SuggestionGroup from '@components/SuggestionGroup';
import Paragraph from '@components/Paragraph';
import Heading from '@components/Heading';

export default function Suggestions({ navigation }) {
  return (
    <PageWrapper>
      <PageHeader
        title='About Say Yes! Challenge'
        goBack={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.scrollWrapper}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <View style={styles.scrollWrapperInner}>
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
        </Container>
      </ScrollView>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  scrollWrapperInner: {
    marginBottom: 60,
  },
});
