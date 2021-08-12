import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Container from '@components/Container';
import PageWrapper from '@components/PageWrapper';
import PageHeader from '@components/PageHeader';
import SuggestionGroup from '@components/SuggestionGroup';
import Paragraph from '@components/Paragraph';
import Heading from '@components/Heading';

export default function Suggestions({ navigation }) {
  return (
    <PageWrapper>
      <Container>
        <PageHeader
          title='Need a suggestion?'
          goBack={() => navigation.goBack()}
        />

        <ScrollView style={styles.scrollWrapper}>
          <Paragraph>
            Below are some examples of fun, unique things you can do to get your
            30 day journey started.{' '}
          </Paragraph>

          <Paragraph>
            If you can’t think of anything new to do yourself, pick something
            off this list and give it a shot!
          </Paragraph>

          <Heading>Suggestions</Heading>

          <SuggestionGroup
            title='Food'
            suggestions={[
              'Eat brocoli',
              'Try a new recipe you’ve had your eye on',
              'Bake cookies for your neighbors, co-workers, etc',
              'Make homemade pickles',
              'Make a loaf of bread from scratch',
              'Try a different type of coffee, tea, soft drink, beer, or mixed drink',
            ]}
          />
          <SuggestionGroup
            title='Food'
            suggestions={[
              'Eat brocoli',
              'Try a new recipe you’ve had your eye on',
              'Bake cookies for your neighbors, co-workers, etc',
              'Make homemade pickles',
              'Make a loaf of bread from scratch',
              'Try a different type of coffee, tea, soft drink, beer, or mixed drink',
            ]}
          />
        </ScrollView>
      </Container>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  scrollWrapper: {
    marginBottom: 60,
  },
});
