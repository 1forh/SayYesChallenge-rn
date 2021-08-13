import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@thirtydaysofnew.days';

function ANewDay(index, date) {
  return {
    index,
    image: '',
    title: '',
    description: '',
    date,
  };
}

// todo: probably needs to be better
const generateInitialDays = (count = 30) => {
  const initialDays = [];
  for (let index = 1; index <= count; index++) {
    if (index === 1) {
      initialDays.push(ANewDay(index, new Date()));
    } else {
      initialDays.push(ANewDay(index));
    }
  }
  return initialDays;
};

export const fetchDaysFromDB = async () => {
  const response = await AsyncStorage.getItem(STORAGE_KEY);
  if (response) return JSON.parse(response);
};

const DaysContext = createContext(null);

export const DaysProvider = (props) => {
  const [days, setDays] = useState({ fromCache: false, data: [] });

  const saveAndSetDays = async (updatedDays) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDays));
    setDays({ fromCache: true, data: updatedDays });
    console.log('💾 Saved days...');
  };

  const fetchInitialDaysData = () => {
    (async function () {
      let initialDays = await fetchDaysFromDB();
      let fromCache = true;

      if (!initialDays) {
        initialDays = generateInitialDays();
        fromCache = false;
      }

      console.log('fetched!', { fromCache });
      setDays({ fromCache, data: initialDays });
    })();
  };

  const resetDays = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    const resetDays = { fromCache: false, data: generateInitialDays() };
    setDays(resetDays);
  };

  const exportDaysData = async () => {
    console.log('exporting days data');
  };

  // const addEmptyDay = async () => {
  //   const sortedDays = [...days.data].sort((a, b) => b.index - a.index);
  //   const latestIndex = sortedDays[0]?.index;
  //   const nextIndex = latestIndex + 1;
  //   const nextDay = ANewDay(nextIndex);
  //   saveAndSetDays([...days.data, nextDay]);
  // };

  const updateDay = async (day) => {
    const updatedDays = days?.data.map((d) => {
      if (d.index === day.index) {
        day.date = new Date();
        return day;
      }
      return d;
    });
    saveAndSetDays(updatedDays);
  };

  useEffect(() => {
    fetchInitialDaysData();
  }, []);

  return (
    <DaysContext.Provider
      value={{ days, resetDays, updateDay, exportDaysData }}
    >
      {props.children}
    </DaysContext.Provider>
  );
};

export const useDays = () => useContext(DaysContext);
