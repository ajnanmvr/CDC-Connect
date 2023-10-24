import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import React, {createContext, useContext, useEffect, useState} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAsyncStorage = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userDataJSON = JSON.parse(userDataString);
          setUser(userDataJSON);
        }
      } catch (error) {
        setUser(null);
      }
    };

    checkAsyncStorage();
  }, []);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
