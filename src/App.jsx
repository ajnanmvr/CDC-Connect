// App.jsx
import React from 'react';
import {ThemeProvider} from './hooks/ThemeProvider';
import {lightTheme, darkTheme} from './styles/themes';
import {SafeAreaView, useColorScheme, StatusBar} from 'react-native'; 
import Navigation from './components/Navigation'; 
import { PRIMARY_COLOR } from './utils/consts';

const App = () => {
  const colorScheme = useColorScheme(); 
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
