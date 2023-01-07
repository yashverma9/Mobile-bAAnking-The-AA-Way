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
import styles from './JourneyStyles';
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
import Lock from '../../assets/svg/lock.svg';
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
const Journey = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  const [c1, sc1] = React.useState(true);
  const [c2, sc2] = React.useState(true);
  const [c3, sc3] = React.useState(true);
  return (
    <View style={styles.FetchAA}>
      <View style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>
            recommended insurance based on your{'\n'}demographic and finances
          </Text>
          {/* <Text style={styles.bodyText}>
            recommended insurance baased on your{'\n'}demographic and finances
            </Text> */}
        </Animated.View>

        <View style={styles.consent}>
          <Animated.View
            entering={FadeInDown.duration(650)}
            style={styles.consentAimation}>
            <View style={styles.row}>
              <Bob
                style={styles.headerImg}
                width={getScaledDimension(70, 'height')}
                height={getScaledDimension(70, 'height')}
              />
              <India
                style={styles.headerImg}
                width={getScaledDimension(70, 'height')}
                height={getScaledDimension(70, 'height')}
              />
            </View>

            {/* <View style={styles.txtParent}>
              <Text style={styles.big}>Insurance Name</Text>
              <Text style={styles.small}>name</Text>
            </View>

            <View style={styles.txtParent}>
              <Text style={styles.big}>Cover Amount</Text>
              <Text style={styles.small}>amount</Text>
            </View>
            <View style={styles.txtParent}>
              <Text style={styles.big}>Cover till age</Text>
              <Text style={styles.small}>amount</Text>
            </View>

            <View style={styles.txtParent}>
              <Text style={styles.big}>Premium</Text>
              <Text style={styles.small}>amount</Text>
            </View> */}

            <Text style={styles.bktxt}>Details</Text>
            <TouchableOpacity style={[styles.bankAccount, styles.selected]}>
            <View style={styles.txtParent}>
              <Text style={styles.big}>Insurance Name</Text>
              <Text style={styles.small}>IndiaFirst Life Insurance promoted by Bank of Baroda</Text>
            </View>

            <View style={styles.txtParent}>
              <Text style={styles.big}>Cover Amount</Text>
              <Text style={styles.small}>1Crore</Text>
            </View>
            <View style={styles.txtParent}>
              <Text style={styles.big}>Cover till age</Text>
              <Text style={styles.small}>60</Text>
            </View>

            <View style={styles.txtParent}>
              <Text style={styles.big}>Annual Premium</Text>
              <Text style={styles.small}>₹7063</Text>
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
            navigation.navigate('JourneyTwo');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Proceed</Text>
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

export default Journey;
