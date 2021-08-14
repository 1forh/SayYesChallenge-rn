import React from 'react';
import { StyleSheet } from 'react-native';
import Container from '@components/Container';
import PageWrapper from '@components/PageWrapper';
import SuggestionGroup from '@components/SuggestionGroup';
import Paragraph from '@components/Paragraph';
import Heading from '@components/Heading';

export default function Suggestions({ navigation }) {
  return (
    <PageWrapper>
      <Container>
        <Paragraph>
          Below are some examples of fun, unique things you can do to get your
          30 day journey started.{' '}
        </Paragraph>

        <Paragraph>
          If you can’t think of anything new to do yourself, pick something off
          this list and give it a shot!
        </Paragraph>

        <Heading>Suggestions</Heading>

        <SuggestionGroup
          title='Food'
          suggestions={[
            'Eat a ghost pepper',
            'Eat brocoli',
            'Try a new recipe you’ve had your eye on',
            'Bake cookies for your neighbors, co-workers, etc',
            'Make homemade pickles',
            'Make a loaf of bread from scratch',
            'Try a different type of coffee, tea, soft drink, beer, or mixed drink',
          ]}
        />
        <SuggestionGroup
          title='Beauty/Self-care'
          suggestions={[
            'Get a professional massage',
            'Get a pedicure/manicure',
            'Take a photography class',
            'Learn origami',
            'Learn how to count to 10 in a new language.',
            'Learn a magic trick',
          ]}
        />
        <SuggestionGroup
          title='Charity/Generosity'
          suggestions={[
            'Find a box, fill it with stuff you don’t need, and donate it',
            'Volunteer your time at a shelter or other worthy cause',
            'Pick up trash that isn’t yours',
          ]}
        />
        <SuggestionGroup
          title='Fitness'
          suggestions={[
            'Run a mile',
            'Do a push-up',
            'Do a pull-up',
            'Do a muscle-up',
            'Complete a couch to 5k challenge',
          ]}
        />
        <SuggestionGroup
          title='Misc'
          suggestions={[
            'Watch a sunrise and sunset in the same day',
            'Take public transportation',
            'Indoor rock climbing/bouldering',
            'Pick your own fruit',
            'Ask an elderly person you don’t know to tell you a story',
            'Get lost on purpose',
            'Start a podcast',
            'Make a YouTube video',
            'Try to break a world record',
            'Fire a gun',
            'Go to your podcast player, type any word, and listen to the first result.',
            'Put together a time capsule',
            'Write a letter to a relative',
            'Teach your pet a new trick',
            'Read a book you’ve always wanted',
          ]}
        />
      </Container>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({});
