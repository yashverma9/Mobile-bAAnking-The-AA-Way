import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './OtpStyles';
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
  AnimatedComponent,
} from 'react-native-reanimated';
import Lottie from 'lottie-react-native';
import axios from 'axios';
const Otp = ({navigation}) => {
  //https://flask-production-a663.up.railway.app/api/initiateConsentJourney
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [hide, setHide] = React.useState(false);
  const [showLoader, setShowLoader] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 700);
    setTimeout(() => {
      setMobileNumber('1234');
      setHide(true);
      setShowLoader(true)
      setTimeout(() => {
         navigation.navigate('SEA');
      }, 1500);
    }, 3000);
  }, []);

  const callApi = async () => {
    setShowLoader(true);
    var config = {
      method: 'post',
      url: `https://flask-production-a663.up.railway.app/api/initiateConsentJourney`,

      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios(config)
      .then(async function (response) {
        setShowLoader(false);
        console.log(response.data);
      })
      .catch(function (error) {
        setShowLoader(false);
        alert('some error occured');
      });
  };

  return (
    <View style={styles.Otp}>
      <View style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>we have sent you{'\n'}an OTP</Text>
          <Text style={styles.bodyText}>
            just verifying your mobile{'\n'}number
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={setMobileNumber}
            value={mobileNumber}
            placeholder="4444"
            placeholderTextColor="#C2C2C2"
            keyboardType="numeric"
            autoFocus={true}
          />
          {!hide && (
            <View style={styles.fetchingOtp}>
              <Lottie
                source={require('../../assets/svg/otp-loader-two.json')}
                autoPlay
                loop
                style={{width: 150, height: 150}}
              />
              <Text style={styles.otp}>Fetching OTP</Text>
            </View>
          )}
        </Animated.View>

        <TouchableOpacity
          onPress={() => {
            callApi();
            navigation.navigate('SEA');
          }}
          style={styles.button}>
          {showLoader ? (
            <ActivityIndicator size="small" color="#00214E" />
          ) : (
            <Text style={styles.buttonText}>Continue</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp;
