import {StyleSheet, Text} from 'react-native';

const Link = ({children}) => {

  return (
    <Text style={[ styles.link]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  link: {
    fontWeight: 'bold',
  },
});
export default Link;
