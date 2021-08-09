import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Container from '@components/Container';

export default function Suggestions() {
  return (
    <SafeAreaView>
      <Container>
        <Text>Suggestions</Text>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
