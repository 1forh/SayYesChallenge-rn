import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Splash from '@screens/Splash';
import Days from '@screens/Days';
import Suggestions from '@screens/Suggestions';
import Settings from '@screens/Settings';
import SettingsDisplay from '@screens/SettingsDisplay';
import About from '@screens/About';
import { useWalkThrough } from '@hooks/useWalkThrough';
import { GoToSettingsButton } from '@components/Button';
import { darkTheme, defaultTheme } from '@utils/styleguide';
import { useColorScheme } from 'react-native-appearance';
import { useColorTheme } from '@hooks/useColorTheme';

const Stack = createNativeStackNavigator();

const ChallengeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Days'}
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        headerTransparent: true,
        headerTitleStyle: {
          color: '#fff',
        },
        headerLargeTitleStyle: {
          color: '#fff',
        },
        headerBlurEffect: 'dark',
        headerRight: () => {
          if (route.name === 'Days') {
            return <GoToSettingsButton navigation={navigation} />;
          }
        },
      })}
    >
      <Stack.Screen
        name='Days'
        component={Days}
        options={{
          headerTitle: 'The Challenge',
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen
        name='Settings'
        component={Settings}
        options={{
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen
        name='SettingsDisplay'
        component={SettingsDisplay}
        options={{ headerTitle: 'Display' }}
      />
      <Stack.Screen
        name='Suggestions'
        component={Suggestions}
        options={{
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen
        name='About'
        component={About}
        options={{
          headerLargeTitle: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default function WrapperNav() {
  const { seenWalkThrough, fetchedWalkThroughData } = useWalkThrough();
  const { activeTheme } = useColorTheme();
  const scheme = useColorScheme();
  const theme = activeTheme === 'dark' ? darkTheme : defaultTheme;

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  if (fetchedWalkThroughData) {
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName={seenWalkThrough ? 'ChallengeStack' : 'Splash'}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='ChallengeStack' component={ChallengeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return <View></View>;
}
