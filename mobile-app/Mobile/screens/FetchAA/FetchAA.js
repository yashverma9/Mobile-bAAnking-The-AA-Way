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
import Sc from '../../assets/svg/standardCharted.svg';
import Sbi from '../../assets/svg/sbi.svg';
import Pnb from '../../assets/svg/pnb.svg';
import Hdfc from '../../assets/svg/hdfc.svg';
import Kotak from '../../assets/svg/kotak.svg';
import Bob from '../../assets/svg/bob.svg';
import Angel from '../../assets/svg/angel.svg';
import Max from '../../assets/svg/max.svg';
import P from '../../assets/svg/p.svg';
import Tick from '../../assets/svg/tick.svg';
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
import {GeneralContext} from '../../contexts/GeneralContext';
const FetchAA = ({navigation}) => {
  //https://flask-production-a663.up.railway.app/api/checkConsentStatus

  const [showMore, setShowMore] = React.useState(false);
  const [showLoader, setShowLoader] = React.useState(false);
  const {mobileNumber, setMobileNumber} = React.useContext(GeneralContext);
  const {allAccounts, setAllAccounts} = React.useContext(GeneralContext);
  const {consentDetails, setConsentDetails} = React.useContext(GeneralContext);

  console.log('-=----', consentDetails);

  const callApi = async () => {
    setShowLoader(true);

    var config = {
      method: 'get',
      url: `https://flask-production-a663.up.railway.app/api/checkConsentStatus/${mobileNumber}`,
      headers: {
        'Content-Type': 'application/json',
      },
      // params: {
      //   mobileNumber: '9987600001',
      // },
    };
    // console.log(config);
    axios(config)
      .then(async function (response) {
        setShowLoader(false);
        console.log(response.data.Type);
        if (response.data.Type === 'Success') {
          navigation.navigate('Syncing');
        }
      })
      .catch(function (error) {
        setShowLoader(false);
        console.log(error);
        alert('some error occured');
      });
  };
  return (
    <View style={styles.FetchAA}>
      <ScrollView style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>consent request</Text>
          <Text style={styles.bodyText}>
            Grant consnet to retrieve account details
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
              <Text style={styles.idText}>{mobileNumber}@dashboard-aa-uat</Text>
            </View>

            <View style={styles.txtParent}>
              <Text style={styles.big}>Consent Valid For</Text>
              <Text style={styles.small}>{consentDetails.validFor}</Text>
              <Text style={[styles.small, {fontSize: 10, color: 'grey'}]}>
                You can revoke anytime
              </Text>
            </View>
            <View style={styles.txtParent}>
              <Text style={styles.big}>Details to share</Text>
              <Text style={styles.small}>
                {consentDetails.detailsToShare.trim()}
              </Text>
            </View>
            <View style={styles.txtParent}>
              <Text style={styles.big}>Accounts to connect</Text>
              {consentDetails.accountsToConnect.map((item, index) => {
                return (
                  <View key={index} style={styles.logoWithText}>
                    {item.providerName === 'Bank of Baroda' && (
                      <Bob
                        width={getScaledDimension(20, 'height')}
                        height={getScaledDimension(20, 'height')}
                      />
                    )}
                    {item.providerName === 'HDFC Bank' && (
                      <Hdfc
                        width={getScaledDimension(20, 'height')}
                        height={getScaledDimension(20, 'height')}
                      />
                    )}
                    {item.providerName === 'Angel Broking' && (
                      <Angel
                        width={getScaledDimension(20, 'height')}
                        height={getScaledDimension(20, 'height')}
                      />
                    )}
                    {item.providerName === 'Max Life Insurance' && (
                      <Max
                        width={getScaledDimension(20, 'height')}
                        height={getScaledDimension(20, 'height')}
                      />
                    )}
                    {item.providerName === 'Pirimid FinTech' && (
                      <P
                        width={getScaledDimension(20, 'height')}
                        height={getScaledDimension(20, 'height')}
                      />
                    )}
                    <Text style={styles.small}>
                      {item.providerName} {item.accountsText}
                    </Text>
                  </View>
                );
              })}
            </View>
            {showMore && (
              <>
                <View style={styles.txtParent}>
                  <Text style={styles.big}>Purpose</Text>
                  <Text style={styles.small}>
                    {consentDetails.purpose.trim()}
                  </Text>
                </View>
                <View style={styles.txtParent}>
                  <Text style={styles.big}>Consent duration</Text>
                  <Text style={styles.small}>
                    {consentDetails.transactionsFrom.trim()}
                  </Text>
                </View>
                <View style={styles.txtParent}>
                  <Text style={styles.big}>Data Life</Text>
                  <Text style={styles.small}>
                    {consentDetails.dataLife.trim()}
                  </Text>
                </View>
                <View style={styles.txtParent}>
                  <Text style={styles.big}>Details fetched</Text>
                  <Text style={styles.small}>
                    {consentDetails.detailsFetched.trim()}
                  </Text>
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
            {true && (
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
            style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '4%'}}
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
      </ScrollView>
      {true && (
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
