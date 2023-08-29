// App.jsx
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Navigation from './components/Navigation';
import { AppearanceProvider, useAppearance } from './contexts/AppearenceContext';
import { UserProvider } from './contexts/UserContext';
import { darkTheme, lightTheme } from './styles/themes';

const App = () => {
  const statusBarStyle = isDarkMode ? 'light-content' : 'dark-content';
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  return (
    <AppearanceProvider>
      <UserProvider>
        <StatusBar
          backgroundColor={
            isDarkMode ? darkTheme.primaryColor : lightTheme.primaryColor
          }
          barStyle={statusBarStyle}
          animated={true}
        />
        <SafeAreaView style={{flex: 1}}>
          <Navigation />
        </SafeAreaView>
      </UserProvider>
    </AppearanceProvider>
  );
};

export default App;
