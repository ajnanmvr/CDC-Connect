import React from 'react';
import {StyleSheet,View} from 'react-native';
import {useTheme} from '../hooks/ThemeProvider'; // Import the theme hook

const Screen = ({children}) => {
  const theme = useTheme(); // Get the current theme

  return (
    <View style={[{backgroundColor: theme.backgroundColor}, styles.container]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
padding:20,
  },
});
export default Screen;
