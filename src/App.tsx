// App.jsx
import React from 'react';
import { ThemeProvider } from './hooks/ThemeProvider';
import { lightTheme, darkTheme } from './styles/themes';
import { useColorScheme } from 'react-native'; // Import this for system theme detection

import AppContainer from './components/AppContainer'; // Replace this with your app's main container

const App = () => {
  const colorScheme = useColorScheme(); // Get the system's color scheme (light or dark)

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
console.log("Theme: " + colorScheme);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer  />
    </ThemeProvider>
  );
};

export default App;
