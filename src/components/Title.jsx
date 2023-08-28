import {StyleSheet, Text} from 'react-native';
import {useTheme} from '../hooks/ThemeProvider'; // Import the theme hook

const Title = ({children}) => {
  const theme = useTheme(); // Get the current theme

  return (
    <Text style={[{color: theme.titleColor}, styles.title]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
export default Title;
