import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';

const AppearanceContext = createContext();

export const AppearanceProvider = ({ children }) => {
  const [appearance, setAppearance] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const handleAppearanceChange = ({ colorScheme }) => {
      setAppearance(colorScheme);
    };

    Appearance.addChangeListener(handleAppearanceChange);

    return () => {
      Appearance.removeChangeListener(handleAppearanceChange);
    };
  }, []);

  return (
    <AppearanceContext.Provider value={appearance}>
      {children}
    </AppearanceContext.Provider>
  );
};

export const useAppearance = () => {
  return useContext(AppearanceContext);
};
