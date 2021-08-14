import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Container from '@components/Container';

export default function PageHeader({ goToSettings, goBack, title }) {
  const GoBackButton = () => {
    return (
      <TouchableOpacity
        style={styles.backButton}
        onPress={goBack}
        activeOpacity={0.75}
      >
        <FontAwesomeIcon icon={faChevronLeft} color='#fff' size={18} />
      </TouchableOpacity>
    );
  };

  const GoToSettingsButton = () => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={goToSettings}
        activeOpacity={0.75}
      >
        <FontAwesomeIcon icon={faCog} color='#fff' size={24} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Container style={styles.inner}>
        <View style={styles.titleWrapper}>
          {typeof goBack === 'function' && <GoBackButton />}
          <Text style={styles.title}>{title}</Text>
        </View>

        {typeof goToSettings === 'function' && <GoToSettingsButton />}
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inner: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
    fontSize: 20,
  },
  backButton: {
    marginRight: 8,
  },
  button: {},
});
