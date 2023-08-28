// App.jsx
import React from 'react';
import {ThemeProvider} from './hooks/ThemeProvider';
import {lightTheme, darkTheme} from './styles/themes';
import {SafeAreaView, useColorScheme, StatusBar,StyleSheet} from 'react-native'; // Import this for system theme detection

import Navigation from './Navigation'; // Replace this with your app's main container

const App = () => {
  const colorScheme = useColorScheme(); // Get the system's color scheme (light or dark)

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  console.log('Theme: ' + colorScheme);
  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.primaryColor} />
      <SafeAreaView style={[{backgroundColor: theme.backgroundColor}, styles.container]}>
        <Navigation />
      </SafeAreaView>
    </ThemeProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default App;
