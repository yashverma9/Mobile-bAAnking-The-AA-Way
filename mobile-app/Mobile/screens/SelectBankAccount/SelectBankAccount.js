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
import styles from './SelectBankAccountStyles';
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
  AnimatedComponent,
} from 'react-native-reanimated';
const SelectBankAccount = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  return (
    <View style={styles.FetchAA}>
      <View style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>Select Bank{'\n'}Account</Text>
          <Text style={styles.bodyText}>
            Choose your current Bank Account to{'\n'}Link with AA
          </Text>
        </Animated.View>

        <View style={styles.consent}>
          <Animated.View
            entering={FadeInDown.duration(650)}
            style={styles.consentAimation}>
            <Logo
              style={styles.headerImg}
              width={getScaledDimension(100, 'height')}
              height={getScaledDimension(100, 'height')}
            />
            <Text style={styles.bktxt}>Auto Detected</Text>
            <TouchableOpacity style={[styles.bankAccount, styles.selected]}>
              <Kotak
                style={styles.headerImg}
                width={getScaledDimension(40, 'height')}
                height={getScaledDimension(40, 'height')}
              />
              <Text style={styles.bankName}>Kotak</Text>
              <Tick
                style={styles.tick}
                width={getScaledDimension(25, 'height')}
                height={getScaledDimension(25, 'height')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bankAccount}>
              <Hdfc
                style={styles.headerImg}
                width={getScaledDimension(40, 'height')}
                height={getScaledDimension(40, 'height')}
              />
              <Text style={styles.bankName}>HDFC</Text>
            </TouchableOpacity>
            <Text style={[styles.bktxt, {marginTop: '8%'}]}>
              Search All Banks
            </Text>
            <SearchBar
              placeholder="Search here"
              onPress={() => alert('onPress')}
              onChangeText={text => console.log(text)}
            />
          </Animated.View>
        </View>
        <Animated.View
          entering={FadeInRight.duration(650)}
          style={styles.floatingMessage}>
          <Text style={styles.floatingMessage}>Revoke consent anytime</Text>
        </Animated.View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Syncing');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectBankAccount;
