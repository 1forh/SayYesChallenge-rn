import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchDataFromDb = async (key) => {
  const response = await AsyncStorage.getItem(key);
  if (response) return JSON.parse(response);
};

export const saveItemToDb = async (key, item) => {
  await AsyncStorage.setItem(key, JSON.stringify(item));
};

export const removeItemFromDb = async (key) => {
  await AsyncStorage.removeItem(key);
};
