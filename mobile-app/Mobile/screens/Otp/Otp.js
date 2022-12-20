import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
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
const Otp = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  return (
    <View style={styles.Otp}>
      <View style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>we have sent you{'\n'}an OTP</Text>
          <Text style={styles.bodyText}>
            to apply , we need your mobile number{'\n'}linked to your credit
            cards
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={setMobileNumber}
            value={mobileNumber}
            placeholder="1234"
            placeholderTextColor="#333"
            keyboardType="numeric"
            autoFocus={true}
          />
        </Animated.View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Name');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp;
