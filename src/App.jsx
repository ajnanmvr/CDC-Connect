// App.jsx
import React from 'react';
import {ThemeProvider} from './hooks/ThemeProvider';
import {lightTheme, darkTheme} from './styles/themes';
import {SafeAreaView, useColorScheme, StatusBar} from 'react-native';
import Navigation from './components/Navigation';

const App = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const statusBarStyle = theme === darkTheme ? 'light-content' : 'dark-content';

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.backgroundColor}
        barStyle={statusBarStyle}
        animated={true}
      />
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
