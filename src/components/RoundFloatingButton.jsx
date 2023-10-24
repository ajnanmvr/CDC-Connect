import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';
import LinearGradient from 'react-native-linear-gradient';

const RoundFloatingButton = ({onPress, icon}) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['white', 'white']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[
          styles.button,
          {
            backgroundColor: isDarkMode
              ? darkTheme.primaryColor
              : lightTheme.primaryColor,
          },
        ]}><Text style={styles.icon}>{icon}</Text>
        {/* <Image source={icon} style={styles.imageStyle} /> */}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    borderWidth:5,
    borderColor:"#067869"
  },icon:{
    fontSize:45,
    marginTop:-12
    ,
    color:"#067869"
  }

});

export default RoundFloatingButton;
