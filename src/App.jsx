// App.jsx
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Navigation from './components/Navigation';
import { AppearanceProvider, useAppearance } from './contexts/AppearenceContext';
import { UserProvider } from './contexts/UserContext';


const App = () => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const statusBarStyle = isDarkMode ? 'light-content' : 'dark-content';
console.log(isDarkMode);
  return (
    <AppearanceProvider>
      <UserProvider>
        <StatusBar
          backgroundColor={
            isDarkMode ? "black" : "white"
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
