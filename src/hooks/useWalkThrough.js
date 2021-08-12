import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@thirtydaysofnew.walkthrough';

export const fetchDataFromDb = async () => {
  const response = await AsyncStorage.getItem(STORAGE_KEY);
  if (response) return JSON.parse(response);
};

const WalkThroughContext = createContext(null);

export const WalkThroughProvider = (props) => {
  const [seenWalkThrough, setSeenWalkThrough] = useState(false);
  const [fetchedWalkThroughData, setFetchedWalkThroughData] = useState(false);

  const saveSeenWalkThrough = async (seen) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(seen));
    setSeenWalkThrough(seen);
  };

  const clearWalkThroughData = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setSeenWalkThrough(false);
  };

  const fetchInitialData = () => {
    (async function () {
      const seen = await fetchDataFromDb();
      if (seen) {
        setSeenWalkThrough(seen);
      }
      setFetchedWalkThroughData(true);
    })();
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <WalkThroughContext.Provider
      value={{
        seenWalkThrough,
        saveSeenWalkThrough,
        fetchedWalkThroughData,
        clearWalkThroughData,
      }}
    >
      {props.children}
    </WalkThroughContext.Provider>
  );
};

export const useWalkThrough = () => useContext(WalkThroughContext);
