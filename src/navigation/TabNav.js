import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Days from '@screens/Days';
import Settings from '@screens/Settings';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import {
//   faChartBar,
//   faCog,
//   faClock,
//   faHome,
// } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName='Days'
      // screenOptions={({ route }) => ({
      // cardStyle: { backgroundColor: '#EBDDD3' },
      // tabBarIcon: ({ color, size }) => {
      //   if (route.name === 'Statistics') {
      //     return (
      //       <FontAwesomeIcon icon={faChartBar} color={color} size={size} />
      //     );
      //   } else if (route.name === 'Timer') {
      //     return <FontAwesomeIcon icon={faClock} color={color} size={size} />;
      //   } else if (route.name === 'Settings') {
      //     return <FontAwesomeIcon icon={faCog} color={color} size={size} />;
      //   } else if (route.name === 'Home') {
      //     return <FontAwesomeIcon icon={faHome} color={color} size={size} />;
      //   }
      // },
      // })}
      // tabBarOptions={{
      //   activeTintColor: '#403C3C',
      //   inactiveTintColor: '#A09797',
      //   style: {
      //     borderTopColor: 'transparent',
      //     backgroundColor: '#EBDDD3',
      //   },
      // }}
    >
      <Tab.Screen name='Days' component={Days} options={{ title: 'Days' }} />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
}
