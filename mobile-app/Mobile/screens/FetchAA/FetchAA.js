import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './FetchAAStyles';
import {getScaledDimension} from '../../utils/DynamicScaling';
import Logo from '../../assets/svg/fiu-logo-rmbg.svg';
import Lock from '../../assets/svg/lock.svg';
import Saafe from '../../assets/svg/saafe.svg';
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
import axios from 'axios';
const FetchAA = ({navigation}) => {
  //https://flask-production-a663.up.railway.app/api/checkConsentStatus
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [showMore, setShowMore] = React.useState(false);
  const [showLoader, setShowLoader] = React.useState(false);
  

  const callApi = async () => {
    setShowLoader(true);
    var config = {
      method: 'get',
      url: `https://flask-production-a663.up.railway.app/api/checkConsentStatus`,

      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios(config)
      .then(async function (response) {
        setShowLoader(false);
        console.log(response.data);
        if(response.data.Type==="Success"){
          navigation.navigate('Syncing');
        }
      })
      .catch(function (error) {
        setShowLoader(false);
        alert('some error occured');
      });
  };
  return (
    <View style={styles.FetchAA}>
      <View style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>consent request</Text>
          <Text style={styles.bodyText}>
            Grant consnet to retrieve{'\n'}account details
          </Text>
        </Animated.View>

        <View style={styles.consent}>
          <Animated.View
            entering={FadeInDown.duration(650)}
            style={styles.consentAimation}>
            {/* <Logo
              style={styles.headerImg}
              width={getScaledDimension(120, 'height')}
              height={getScaledDimension(120, 'height')}
            /> */}
            <View style={styles.id}>
              <Text style={styles.idText}>9987600001@dashboard-aa-uat</Text>
            </View>

            <View style={styles.txtParent}>
              <Text style={styles.big}>Consent Valid For</Text>
              <Text style={styles.small}>1 Year</Text>
              <Text style={[styles.small, {fontSize: 8, color: 'grey'}]}>
                You can revoke anytime
              </Text>
            </View>
            <View style={styles.txtParent}>
              <Text style={styles.big}>Details to share</Text>
              <Text style={styles.small}>PROFILE, SUMMARY, TRANSACTIONS</Text>
            </View>
            <View style={styles.txtParent}>
              <Text style={styles.big}>Accounts to connect</Text>
              <Text style={styles.small}>
                Savings ..3188, Fixed Deposit ..2242
              </Text>
              <Text style={styles.small}>Savings ..3221</Text>
              <Text style={styles.small}>Angel Broking</Text>
              <Text style={styles.small}>Max Life Insurance</Text>
            </View>
            {showMore && (
              <>
                <View style={styles.txtParent}>
                  <Text style={styles.big}>Purpose</Text>
                  <Text style={styles.small}>Mobile Banking</Text>
                </View>
                <View style={styles.txtParent}>
                  <Text style={styles.big}>Consent duration</Text>
                  <Text style={styles.small}>30 Dec 2022 - 30 Dec 2023</Text>
                </View>
                <View style={styles.txtParent}>
                  <Text style={styles.big}>Data Life</Text>
                  <Text style={styles.small}>
                    10 years (or earlier on request)
                  </Text>
                </View>
                <View style={styles.txtParent}>
                  <Text style={styles.big}>Details fetched</Text>
                  <Text style={styles.small}>Hourly</Text>
                </View>
              </>
            )}
            {showMore ? (
              <Text
                onPress={() => {
                  setShowMore(prev => !prev);
                }}
                style={styles.showMore}>
                Show Less{' '}
              </Text>
            ) : (
              <Text
                onPress={() => {
                  setShowMore(prev => !prev);
                }}
                style={styles.showMore}>
                Show More{' '}
              </Text>
            )}
            {!showMore && (
              <View style={styles.buttonParent}>
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate('Syncing');
                    callApi();
                  }}
                  style={styles.accept}>
                  {showLoader ? (
                    <ActivityIndicator size="small" color="white" />
                  ) : (
                    <Text style={styles.acceptText}>Accept</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.reject}>
                  <Text style={styles.rejectText}>Reject</Text>
                </TouchableOpacity>
              </View>
            )}
          </Animated.View>
        </View>
        <Animated.View
          entering={FadeInRight.duration(650)}
          style={styles.floatingMessage}>
          <Saafe
            style={{marginLeft: 'auto', marginRight: 'auto'}}
            width={getScaledDimension(20, 'height')}
            height={getScaledDimension(20, 'height')}
          />
          <Text style={styles.floatingMessage}>Powered by Saafe</Text>
        </Animated.View>

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('Name');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>...</Text>
        </TouchableOpacity> */}
      </View>
      {!showMore && (
        <View style={styles.secure}>
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
        </View>
      )}
    </View>
  );
};

export default FetchAA;
