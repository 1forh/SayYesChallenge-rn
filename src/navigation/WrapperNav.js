import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from '@navigation/TabNav';
import WalkThrough from '@components/WalkThrough';

const Stack = createStackNavigator();

export default function WrapperNav() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#EBDDD3',
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
        initialRouteName='TabNav'
        screenOptions={{
          cardStyle: { backgroundColor: '#EBDDD3' },
        }}
      >
        <Stack.Screen
          name='WalkThrough'
          component={WalkThrough}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        />
        <Stack.Screen
          name='TabNav'
          component={TabNav}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
