import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Asset } from 'expo-asset';
import WrapperNav from '@navigation/WrapperNav';
import { DaysProvider } from '@hooks/useDays';
import { WalkThroughProvider } from '@hooks/useWalkThrough';
import {
  useFonts,
  // Poppins_100Thin,
  // Poppins_100Thin_Italic,
  // Poppins_200ExtraLight,
  // Poppins_200ExtraLight_Italic,
  // Poppins_300Light,
  // Poppins_300Light_Italic,
  Poppins_400Regular,
  // Poppins_400Regular_Italic,
  Poppins_500Medium,
  // Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  // Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  // Poppins_700Bold_Italic,
  // Poppins_800ExtraBold,
  // Poppins_800ExtraBold_Italic,
  // Poppins_900Black,
  // Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    // Poppins_100Thin,
    // Poppins_100Thin_Italic,
    // Poppins_200ExtraLight,
    // Poppins_200ExtraLight_Italic,
    // Poppins_300Light,
    // Poppins_300Light_Italic,
    Poppins_400Regular,
    // Poppins_400Regular_Italic,
    Poppins_500Medium,
    // Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    // Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    // Poppins_700Bold_Italic,
    // Poppins_800ExtraBold,
    // Poppins_800ExtraBold_Italic,
    // Poppins_900Black,
    // Poppins_900Black_Italic,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  const stallSplashScreen = () => {
    const images = [require('./assets/splash.png')];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  if (!appIsReady || !fontsLoaded) {
    return (
      <AppLoading
        startAsync={stallSplashScreen}
        onFinish={() => setAppIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={{ flexGrow: 1 }}>
      <WalkThroughProvider>
        <DaysProvider>
          <WrapperNav />
          <StatusBar />
        </DaysProvider>
      </WalkThroughProvider>
    </View>
  );
}
