import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_DAYS = '@thirtydaysofnew.days';

const generateInitialDays = (count = 1) => {
  const initialDays = [];
  for (let index = 1; index <= count; index++) {
    initialDays.push({
      index: index,
      image: '',
      description: '',
    });
  }
  return initialDays;
};

export const fetchDaysFromDB = async () => {
  const response = await AsyncStorage.getItem(STORAGE_KEY_DAYS);
  if (response) return JSON.parse(response);
};

const DaysContext = createContext(null);

export const DaysProvider = (props) => {
  const [days, setDays] = useState([]);

  const fetchInitialDaysData = () => {
    (async function () {
      let days = await fetchDaysFromDB();
      if (!days) {
        days = generateInitialDays(); // todo: probably needs to be better
      }
      setDays(days);
    })();
  };

  const resetDays = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY_DAYS);
    setDays(generateInitialDays());
  };

  const updateDay = async (day) => {
    const updatedDays = days.map((d) => {
      if (d.index === day.index) {
        return day;
      }
      return d;
    });
    await AsyncStorage.setItem(STORAGE_KEY_DAYS, JSON.stringify(updatedDays));
    setDays(updatedDays);
  };

  useEffect(() => {
    fetchInitialDaysData();
  }, []);

  return (
    <DaysContext.Provider value={{ days, resetDays, updateDay }}>
      {props.children}
    </DaysContext.Provider>
  );
};

export const useDays = () => useContext(DaysContext);
