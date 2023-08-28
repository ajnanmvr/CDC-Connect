import {StyleSheet, Text} from 'react-native';
import {useTheme} from '../hooks/ThemeProvider'; // Import the theme hook

const Link = ({children}) => {
  const theme = useTheme(); // Get the current theme

  return (
    <Text style={[{color: theme.linkColor}, styles.link]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  link: {
    fontWeight: 'bold',
  },
});
export default Link;
