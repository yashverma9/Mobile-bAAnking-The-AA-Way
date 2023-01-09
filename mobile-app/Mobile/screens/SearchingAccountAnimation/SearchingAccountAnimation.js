import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getScaledDimension} from '../../utils/DynamicScaling';
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
import axios from 'axios';
import {GeneralContext} from '../../contexts/GeneralContext';
const SearchingAccountAnimation = ({navigation}) => {
  const {mobileNumber, setMobileNumber} = React.useContext(GeneralContext);
  const {allAccounts, setAllAccounts} = React.useContext(GeneralContext);
  const {consentDetails, setConsentDetails} = React.useContext(GeneralContext);
  React.useEffect(() => {
    getAllAccounts();
    getConsentDetails();
    initiateConsentJourney();
    setTimeout(() => {
      navigation.navigate('SelectBankAccount');
    }, 8000);
  }, []);

  const getAllAccounts = async () => {
    var config = {
      method: 'get',
      url: `https://flask-production-a663.up.railway.app/api/getAllAccounts/${mobileNumber}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(config);
    axios(config)
      .then(async function (response) {
        //console.log(response.data.allAccountDetails.accountDetails);
        setAllAccounts(response.data.allAccountDetails.accountDetails);
      })
      .catch(function (error) {
        console.log(error);
        alert('some error occured');
      });
  };

  const getConsentDetails = async () => {
    var config = {
      method: 'get',
      url: `https://flask-production-a663.up.railway.app/api/getConsentDetails/${mobileNumber}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(config);
    axios(config)
      .then(async function (response) {
        console.log(response.data.consentDetails);
        setConsentDetails(response.data.consentDetails);
      })
      .catch(function (error) {
        console.log(error);
        alert('some error occured');
      });
  };
  const initiateConsentJourney = () => {
    var config = {
      method: 'post',
      url: `https://flask-production-a663.up.railway.app/api/initiateConsentJourney`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        mobileNumber: mobileNumber,
      },
    };
    console.log(config);
    axios(config)
      .then(async function (response) {
        console.log(response.data);
       
      })
      .catch(function (error) {
        console.log(error);
        alert('some error occured');
      });
  };

  return (
    <View style={styles.content}>
      <Animated.View entering={FadeInRight.duration(650)}>
        <Text style={styles.headerText}>fetching your accounts</Text>
      </Animated.View>
      <Lottie
        source={require('../../assets/svg/fetchingAccounts.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default SearchingAccountAnimation;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    marginTop: '4%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: getScaledDimension(20, 'font'),
    color: '#00214E',
  },
});
