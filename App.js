import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Asset } from 'expo-asset';
import WrapperNav from '@navigation/WrapperNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';
import { DaysProvider } from '@hooks/useDays';
import { WalkThroughProvider } from '@hooks/useWalkThrough';
import { ColorThemeProvider } from '@hooks/useColorTheme';
import { fonts, useTheFonts } from '@utils/fonts';

export default function App() {
  let [fontsLoaded] = useTheFonts(fonts);
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
      <AppearanceProvider>
        <SafeAreaProvider>
          <WalkThroughProvider>
            <ColorThemeProvider>
              <DaysProvider>
                <WrapperNav />
                <StatusBar animated />
              </DaysProvider>
            </ColorThemeProvider>
          </WalkThroughProvider>
        </SafeAreaProvider>
      </AppearanceProvider>
    </View>
  );
}
