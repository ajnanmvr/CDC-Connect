import {StyleSheet, Text} from 'react-native';

const Title = ({children}) => {
  return <Text style={[styles.title]}>{children}</Text>;
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
