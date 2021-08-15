import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchDataFromDb, saveItemToDb } from '@utils/db';
import { useColorScheme } from 'react-native-appearance';
import { removeItemFromDb } from '../utils/db';

const STORAGE_KEY_THEME = '@thirtydaysofnew.colorTheme';
const STORAGE_KEY_SYSTEM = '@thirtydaysofnew.isUsingSystem';

const ColorThemeContext = createContext(null);

export const ColorThemeProvider = (props) => {
  const defaultTheme = useColorScheme();

  const [isUsingSystem, setIsUsingSystem] = useState(true);
  const [activeTheme, setActiveTheme] = useState(defaultTheme);

  const saveActiveTheme = async (theme) => {
    await saveItemToDb(STORAGE_KEY_THEME, theme);
    setActiveTheme(theme);
  };

  const resetActiveTheme = async (theme) => {
    await removeItemFromDb(STORAGE_KEY_THEME);
    setActiveTheme(defaultTheme);
  };

  const saveIsUsingSystem = async (is) => {
    await saveItemToDb(STORAGE_KEY_SYSTEM, is);
    setIsUsingSystem(is);

    if (is) {
      await resetActiveTheme();
    }
  };

  const fetchInitialData = () => {
    (async function () {
      const t = await fetchDataFromDb(STORAGE_KEY_THEME);

      if (t) {
        setActiveTheme(t);
      }

      const s = await fetchDataFromDb(STORAGE_KEY_SYSTEM);
      if (typeof s !== 'undefined') {
        setIsUsingSystem(s);
      }
    })();
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <ColorThemeContext.Provider
      value={{
        activeTheme,
        saveActiveTheme,
        resetActiveTheme,
        isUsingSystem,
        saveIsUsingSystem,
      }}
    >
      {props.children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = () => useContext(ColorThemeContext);
