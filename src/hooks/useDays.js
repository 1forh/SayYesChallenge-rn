import { createContext, useState } from 'react';

const STORAGE_KEY_DAYS = '@thirtydaysofnew.days';

// const generateInitialDays = (count = 30) => {
//   const initialDays = [];
//   for (let index = 1; index <= count; index++) {
//     initialDays.push({
//       index: index,
//       image: '',
//       description: '',
//     });
//   }
//   return initialDays;
// };

export const fetchDaysFromDB = async () => {
  return await AsyncStorage.getItem(STORAGE_KEY_DAYS);
};

const DaysContext = createContext(null);

export const DaysProvider = ({ days, children }) => {
  const [days, setDays] = useState(days);

  return (
    <DaysContext.Provider value={{ days, setDays }}>
      {children}
    </DaysContext.Provider>
  );
};

export const useDays = useContext(DaysContext);
