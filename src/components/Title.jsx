import {StyleSheet, Text} from 'react-native';
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';

const Title = ({children}) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  return <Text style={[styles(isDarkMode).title]}>{children}</Text>;
};

const styles = isDarkMode =>
  StyleSheet.create({
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
  });
export default Title;
