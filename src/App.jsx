// App.jsx
import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './components/Navigation';
import {AppearanceProvider} from './contexts/AppearenceContext';
import {UserProvider} from './contexts/UserContext';

const App = () => {
  return (
    <AppearanceProvider>
      <UserProvider>
        <SafeAreaView style={{flex: 1}}>
          <Navigation />
        </SafeAreaView>
      </UserProvider>
    </AppearanceProvider>
  );
};

export default App;
