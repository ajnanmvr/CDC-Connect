// themes.js
import { createContext, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
