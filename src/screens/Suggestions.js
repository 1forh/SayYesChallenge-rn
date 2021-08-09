import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from '@components/Container';
import PageWrapper from '@components/PageWrapper';
import PageHeader from '@components/PageHeader';

export default function Suggestions({ navigation }) {
  return (
    <PageWrapper>
      <Container>
        <PageHeader
          title='Need a suggestion?'
          goBack={() => navigation.goBack()}
        />
      </Container>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({});
