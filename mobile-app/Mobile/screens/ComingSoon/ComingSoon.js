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
import styles from './ComingSoonStyles';
import {getScaledDimension} from '../../utils/DynamicScaling';
import Logo from '../../assets/svg/fiu-logo-rmbg.svg';
import Sc from '../../assets/svg/standardCharted.svg';
import Sbi from '../../assets/svg/sbi.svg';
import Pnb from '../../assets/svg/pnb.svg';
import Hdfc from '../../assets/svg/hdfc.svg';
import Kotak from '../../assets/svg/kotak.svg';
import Bob from '../../assets/svg/bob.svg';
import India from '../../assets/svg/india.svg';
import Angel from '../../assets/svg/angel.svg';
import Max from '../../assets/svg/max.svg';
import Tick from '../../assets/svg/tick.svg';
import SearchBar from 'react-native-dynamic-search-bar';
import CS from '../../assets/svg/comingsoon.svg';
import CheckBox from '@react-native-community/checkbox';
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
import {GeneralContext} from '../../contexts/GeneralContext';
const ComingSoon = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  const {insurance, setInsurance} = React.useContext(GeneralContext);
  const {profileData, setProfileData} = React.useContext(GeneralContext);
  const [c1, sc1] = React.useState(false);
  const [c2, sc2] = React.useState(false);
  const [c3, sc3] = React.useState(false);
  return (
    <View style={styles.FetchAA}>
      <View style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>We are cooking it up!</Text>
          {/* <Text style={styles.bodyText}>
              recommended insurance baased on your{'\n'}demographic and finances
              </Text> */}
        </Animated.View>

        <View style={styles.consent}>
          <Animated.View
            entering={FadeInDown.duration(650)}
            style={styles.consentAimation}>
            <View style={styles.row}>
              <CS
                style={styles.headerImg}
                width={getScaledDimension(120, 'height')}
                height={getScaledDimension(120, 'height')}
              />
            </View>

            {/* <Text style={styles.bktxt}>Details</Text> */}
            <TouchableOpacity style={[styles.bankAccount, styles.selected]}>
              <View style={styles.txtParent}>
                <Text style={styles.big}>
                  This feature page will be available soon
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* <Animated.View
              entering={FadeInRight.duration(650)}
              style={styles.floatingMessage}>
              <Text style={styles.floatingMessage}>Revoke consent anytime</Text>
            </Animated.View> */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.secure}>
          <View style={styles.secureGroup}>
            <Lock
              style={styles.lock}
              width={getScaledDimension(20, 'height')}
              height={getScaledDimension(20, 'height')}
            />
            <Text style={styles.secureText}>
              this secure session is end-to-end encrypted
            </Text>
          </View>
        </View> */}
    </View>
  );
};

export default ComingSoon;
