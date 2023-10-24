import {StyleSheet, Text} from 'react-native';

const Link = ({children}) => {
  return <Text style={[styles.link]}>{children}</Text>;
};

const styles = StyleSheet.create({
  link: {
    fontWeight: 'bold',
    color: '#067869',
  },
});
export default Link;
