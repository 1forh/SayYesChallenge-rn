import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Splash from '@screens/Splash';
import Days from '@screens/Days';
import Suggestions from '@screens/Suggestions';
import Settings from '@screens/Settings';
import About from '@screens/About';
import { gray } from '@utils/colors';
import { useWalkThrough } from '@hooks/useWalkThrough';

const Stack = createStackNavigator();

export default function WrapperNav() {
  const { seenWalkThrough, fetchedWalkThroughData } = useWalkThrough();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: gray[800],
    },
  };

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  if (fetchedWalkThroughData) {
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName={seenWalkThrough ? 'Days' : 'Splash'}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='Days' component={Days} />
          <Stack.Screen name='Suggestions' component={Suggestions} />
          <Stack.Screen name='Settings' component={Settings} />
          <Stack.Screen name='About' component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return <View></View>;
}
