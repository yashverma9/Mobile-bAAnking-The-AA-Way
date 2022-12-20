import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './MobileNumberStyles';
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
const MobileNumber = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  return (
    <View style={styles.MobileNumber}>
      <View style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>give us your{'\n'}mobile number</Text>
          <Text style={styles.bodyText}>
            to apply , we need your mobile number{'\n'}linked to your credit
            cards
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={setMobileNumber}
            value={mobileNumber}
            placeholder="9999999999"
            placeholderTextColor="#333"
            keyboardType="numeric"
            autoFocus={true}
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(400)}
          style={{marginTop: 'auto'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Otp');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default MobileNumber;
