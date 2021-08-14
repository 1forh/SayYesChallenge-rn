import React from 'react';
import { StyleSheet } from 'react-native';
import Container from '@components/Container';
import PageWrapper from '@components/PageWrapper';
import Paragraph from '@components/Paragraph';

export default function Suggestions({ navigation }) {
  return (
    <PageWrapper>
      <Container>
        <Paragraph>
          Each day for 30 days do something you’ve never done before. What you
          do can be simple or complex.
        </Paragraph>

        <Paragraph>
          Take a photo and upload it here to track your progress.
        </Paragraph>

        <Paragraph>
          Share your experiences with your friends as you take the challenge.
        </Paragraph>

        <Paragraph>
          After 30 days of getting out of your comfort zone, it will be easier
          to say yes to new things.
        </Paragraph>

        <Paragraph>Have fun!</Paragraph>
      </Container>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({});
