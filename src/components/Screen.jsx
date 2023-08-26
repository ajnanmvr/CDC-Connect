import React from 'react';
import {View} from 'react-native';
import {useTheme} from '../hooks/ThemeProvider'; // Import the theme hook

const Screen = ({children}) => {
  const theme = useTheme(); // Get the current theme

  return (
    <View style={{backgroundColor: theme.backgroundColor}}>{children}</View>
  );
};

export default Screen;
