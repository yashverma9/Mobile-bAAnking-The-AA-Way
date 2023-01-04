import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './SplashStyles';
import {getScaledDimension} from '../../utils/DynamicScaling';
import AppLogo from '../../assets/svg/logo.svg';
import Header from '../../assets/svg/header.svg';
const Splash = ({navigation}) => {
  return (
    <View style={styles.splash}>
      {/* <Logo width={120} height={40} fill={"any color"} /> */}

      <AppLogo style={styles.logo} />
      <Header
        style={styles.headerImg}
        width={getScaledDimension(300, 'height')}
        height={getScaledDimension(300, 'height')}
      />
      <Text style={styles.heroText}>Start bAAnking the AA way</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MobileNumber');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Begin your Journey</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
