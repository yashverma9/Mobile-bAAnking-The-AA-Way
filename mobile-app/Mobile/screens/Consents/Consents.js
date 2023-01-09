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
import styles from './ConsentsStyles';
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
import ProfileBig from '../../assets/svg/profileBig.svg';
import P from '../../assets/svg/p.svg';
import ConsentHistory from '../../assets/svg/consentHistory.svg';
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
const Consents = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  const [c1, sc1] = React.useState(true);
  const [c2, sc2] = React.useState(true);
  const [c3, sc3] = React.useState(true);
  const {consentDetails, setConsentDetails} = React.useContext(GeneralContext);
  return (
    <View style={styles.FetchAA}>
      <ScrollView style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>Consents{'\n'}</Text>
          {/* <Text style={styles.bodyText}>
                recommended insurance baased on your{'\n'}demographic and finances
                </Text> */}
        </Animated.View>
        <Text style={styles.headerTextTwo}>Connected Accounts{'\n'}</Text>
        {consentDetails.accountsToConnect.map((item, index) => {
          return (
            <Animated.View
              entering={FadeInDown.duration(650)}
              style={styles.consent}>
              <View style={styles.consentAimation}>
                <View style={styles.row}>
                  {item.providerName === 'Bank of Baroda' && (
                    <Bob
                      width={getScaledDimension(38, 'height')}
                      height={getScaledDimension(38, 'height')}
                    />
                  )}
                  {item.providerName === 'HDFC Bank' && (
                    <Hdfc
                      width={getScaledDimension(38, 'height')}
                      height={getScaledDimension(38, 'height')}
                    />
                  )}
                  {item.providerName === 'Angel Broking' && (
                    <Angel
                      width={getScaledDimension(38, 'height')}
                      height={getScaledDimension(38, 'height')}
                    />
                  )}
                  {item.providerName === 'Max Life Insurance' && (
                    <Max
                      width={getScaledDimension(38, 'height')}
                      height={getScaledDimension(38, 'height')}
                    />
                  )}
                  {item.providerName === 'Pirimid FinTech' && (
                    <P
                      width={getScaledDimension(38, 'height')}
                      height={getScaledDimension(38, 'height')}
                    />
                  )}
                  <Text style={styles.bankName}>&nbsp;{item.providerName}</Text>
                  {/* <Tick
                  style={styles.tick}
                  width={getScaledDimension(25, 'height')}
                  height={getScaledDimension(25, 'height')}
                /> */}
                </View>
              </View>
            </Animated.View>
          );
        })}

   

        <Text style={styles.headerTextThree}>Consent History{'\n'}</Text>

        <Animated.View
          entering={FadeInDown.duration(650)}
          style={styles.consentTwo}>
          <View style={styles.consentAimation}>
            <View style={styles.consentRow}>
              <ConsentHistory
                style={styles.headerImg}
                width={getScaledDimension(38, 'height')}
                height={getScaledDimension(38, 'height')}
              />
              <Text style={[styles.bankName, {color: 'white'}]}>
                &nbsp;Bank of Baroda
              </Text>
              {/* <Tick
                  style={styles.tick}
                  width={getScaledDimension(25, 'height')}
                  height={getScaledDimension(25, 'height')}
                /> */}
            </View>

            <View style={styles.consentRow}>
              <Text style={[styles.consentText]}>Consents</Text>
            </View>
            {consentDetails.accountsToConnect.map((item, index) => {
              return (
                <View style={styles.consentRow}>
                  <Text style={[styles.consentText]}>{item.providerName}</Text>
                  <View style={styles.status}>
                    <Text style={styles.statusText}>Active</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </Animated.View>

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
      </ScrollView>
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

export default Consents;
