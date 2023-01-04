import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './FetchAAStyles';
import {getScaledDimension} from '../../utils/DynamicScaling';
import Logo from '../../assets/svg/fiu-logo-rmbg.svg';
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
const FetchAA = ({navigation}) => {
  //https://flask-production-a663.up.railway.app/api/checkConsentStatus
  const [mobileNumber, setMobileNumber] = React.useState('');
  return (
    <View style={styles.FetchAA}>
      <View style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>Consent Request</Text>
          <Text style={styles.bodyText}>
            Financia wants to access your{'\n'}data
          </Text>
        </Animated.View>

        <View style={styles.consent}>
          <Animated.View
            entering={FadeInDown.duration(650)}
            style={styles.consentAimation}>
            <Logo
              style={styles.headerImg}
              width={getScaledDimension(120, 'height')}
              height={getScaledDimension(120, 'height')}
            />
            <View style={styles.id}>
              <Text style={styles.idText}>9987600001@dashboard-aa-uat</Text>
            </View>

            <View style={styles.txtParent}>
              <Text style={styles.big}>Transactions</Text>
              <Text style={styles.small}>30 May 2022 - 30 Dec 2022</Text>
            </View>
            <View style={styles.txtParent}>
              <Text style={styles.big}>FI data type</Text>
              <Text style={styles.small}>PROFILE, SUMMARY, TRANSACTIONS</Text>
            </View>
            <View style={styles.txtParent}>
              <Text style={styles.big}>Purpose</Text>
              <Text style={styles.small}>Aggregated statement</Text>
            </View>
            <View style={styles.txtParent}>
              <Text style={styles.big}>Consent duration</Text>
              <Text style={styles.small}>30 Dec 2022 - 30 Dec 2023</Text>
            </View>
            <Text style={styles.showMore}>Show More</Text>

            <View style={styles.buttonParent}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SelectBankAccount');
                }}
                style={styles.accept}>
                <Text style={styles.acceptText}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.reject}>
                <Text style={styles.rejectText}>Reject</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
        <Animated.View
          entering={FadeInRight.duration(650)}
          style={styles.floatingMessage}>
          <Text style={styles.floatingMessage}>Encrypted end to end</Text>
        </Animated.View>

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('Name');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>...</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default FetchAA;
