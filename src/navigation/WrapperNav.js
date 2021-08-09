import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import TabNav from '@navigation/TabNav';
import WalkThrough from '@screens/WalkThrough';
import Days from '@screens/Days';
import Suggestions from '@screens/Suggestions';
import Settings from '@screens/Settings';
import { gray } from '@utils/colors';

const Stack = createStackNavigator();

export default function WrapperNav() {
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

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName='Days'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Days' component={Days} />
        <Stack.Screen name='Suggestions' component={Suggestions} />
        <Stack.Screen name='WalkThrough' component={WalkThrough} />
        <Stack.Screen name='Settings' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
