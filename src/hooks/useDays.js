import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_DAYS = '@thirtydaysofnew.days';

const generateInitialDays = (count = 30) => {
  const initialDays = [];
  for (let index = 1; index <= count; index++) {
    initialDays.push({
      index: index,
      image: '',
      description: '',
    });
  }
  console.log(initialDays);
  return initialDays;
};

export const fetchDaysFromDB = async () => {
  const response = await AsyncStorage.getItem(STORAGE_KEY_DAYS);
  if (response) return JSON.parse(response);
};

const DaysContext = createContext(null);

export const DaysProvider = (props) => {
  const [days, setDays] = useState([]);

  const resetDays = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY_DAYS);
    setDays(generateInitialDays());
  };

  useEffect(() => {
    (async function () {
      let days = await fetchDaysFromDB();

      console.log(setDays);

      if (!days) {
        days = generateInitialDays();
      }

      setDays(days);
    })();
  }, []);

  return (
    <DaysContext.Provider value={{ days, setDays, resetDays }}>
      {props.children}
    </DaysContext.Provider>
  );
};

export const useDays = () => useContext(DaysContext);
