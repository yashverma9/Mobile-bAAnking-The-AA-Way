import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './SyncingStyles';
import {getScaledDimension} from '../../utils/DynamicScaling';
import Logo from '../../assets/svg/fiu-logo-rmbg.svg';
import Sc from '../../assets/svg/standardCharted.svg';
import Sbi from '../../assets/svg/sbi.svg';
import Pnb from '../../assets/svg/pnb.svg';
import Hdfc from '../../assets/svg/hdfc.svg';
import Kotak from '../../assets/svg/kotak.svg';
import Tick from '../../assets/svg/tick.svg';
import SearchBar from 'react-native-dynamic-search-bar';
import Animated, {
  SlideInDown,
  SlideInUp,
  ZoomIn,
  ZoomInEasyUp,
  ZoomInEasyDown,
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeInRight,
  FadeOutRight,
  AnimatedComponent,
} from 'react-native-reanimated';
import Lottie from 'lottie-react-native';

const Syncing = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [hide, setHide] = React.useState(true);
  const [msg, setMsg] = React.useState('Analyzing your financial data');
  const data = ['Getting your personalized view ready', 'Fully Secure'];
  let i = 0;
  React.useEffect(() => {
    const timeoutId = setTimeout(function () {
      changeMessage();
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const changeMessage = () => {
    // alert('Message Change Successfull');
    setTimeout(function () {
      console.log('Hello World');
      setHide(prev => !prev);
      console.log(data[i]);
      setMsg(data[i]);
      {
        i < data.length - 1 ? i++ : (i = 0);
      }
      setHide(prev => !prev);
      changeMessage();
    }, 2500);
  };
  return (
    <View style={styles.FetchAA}>
      <View style={styles.content}>
        <Animated.View
          entering={FadeInDown.duration(1000)}
          exiting={FadeOutRight.duration(1000)}>
          <Text style={styles.headerText}>
            Syncing your{'\n'}Account Details
          </Text>
          <Text style={styles.bodyText}>Hang Tight</Text>
        </Animated.View>

        <View style={styles.consent}>
          {hide && (
            <Animated.View
              entering={FadeInDown.duration(1000)}
              style={[styles.consentAimation]}>
              <Text style={styles.ctxt}>{msg}</Text>
            </Animated.View>
          )}
        </View>
        <Lottie
          source={require('../../assets/svg/4UBrDxZTaD.json')}
          autoPlay
          loop
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setHide(prev => !prev);
        }}>
        <Text>Click Me</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SelectBankAccount');
        }}>
        <Text>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Syncing;