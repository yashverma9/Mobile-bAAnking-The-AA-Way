import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
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
const Otp = ({navigation}) => {
  //https://flask-production-a663.up.railway.app/api/initiateConsentJourney
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [hide, setHide] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 700);
    setTimeout(() => {
      setMobileNumber("4444")
      setHide(true);
    }, 3000);
  }, []);

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
            placeholder="1234"
            placeholderTextColor="#C2C2C2"
            keyboardType="numeric"
            autoFocus={true}
          />
          {!hide && (
            <View style={styles.fetchingOtp}>
              <Lottie
                source={require('../../assets/svg/otp-loader.json')}
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
            navigation.navigate('SEA');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp;
