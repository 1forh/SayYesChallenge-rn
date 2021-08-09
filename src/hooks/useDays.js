import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_DAYS = '@thirtydaysofnew.days';

function ANewDay(index) {
  return {
    index: index,
    image: '',
    title: '',
    description: '',
    date: new Date(),
  };
}

// todo: probably needs to be better
const generateInitialDays = (count = 1) => {
  const initialDays = [];
  for (let index = 1; index <= count; index++) {
    initialDays.push(ANewDay(index));
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

  const saveAndSetDays = async (updatedDays) => {
    await AsyncStorage.setItem(STORAGE_KEY_DAYS, JSON.stringify(updatedDays));
    setDays({ fromCache: true, data: updatedDays });
    console.log('💾 Saved days...');
  };

  const fetchInitialDaysData = () => {
    (async function () {
      let days = await fetchDaysFromDB();
      let fromCache = true;

      if (!days) {
        days = generateInitialDays();
        fromCache = false;
      }

      setDays({ fromCache, data: days });
    })();
  };

  const resetDays = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY_DAYS);
    days = generateInitialDays();
    fromCache = false;
    setDays({ fromCache, data: days });
  };

  const addEmptyDay = async () => {
    const sortedDays = [...days.data].sort((a, b) => b.index - a.index);
    const latestIndex = sortedDays[0]?.index;
    const nextIndex = latestIndex + 1;
    const nextDay = ANewDay(nextIndex);
    saveAndSetDays([...days.data, nextDay]);
  };

  const updateDay = async (day) => {
    const updatedDays = days?.data.map((d) => {
      if (d.index === day.index) {
        return day;
      }
      return d;
    });
    saveAndSetDays(updatedDays);
  };

  useEffect(() => {
    fetchInitialDaysData();
  }, []);

  useEffect(() => {
    if (!days) return;

    // const hasEmptyDay = [...days.data].sort((a, b) => b.index - a.index);
    console.log(days);

    // addEmptyDay();
    // console.log(days);
  }, [days]);

  return (
    <DaysContext.Provider value={{ days, resetDays, updateDay }}>
      {props.children}
    </DaysContext.Provider>
  );
};

export const useDays = () => useContext(DaysContext);
