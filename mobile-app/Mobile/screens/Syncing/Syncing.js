import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './SyncingStyles';
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
  FadeOutRight,
  AnimatedComponent,
} from 'react-native-reanimated';
import Lottie from 'lottie-react-native';
import axios from 'axios';
import {GeneralContext} from '../../contexts/GeneralContext';
const Syncing = ({navigation}) => {
  //https://flask-production-a663.up.railway.app/api/getFIData
  //https://flask-production-a663.up.railway.app/api/getBankAnalysisData
  //https://flask-production-a663.up.railway.app/api/getProfile
  //https://flask-production-a663.up.railway.app/api/getWidgetDetails
  //https://flask-production-a663.up.railway.app/api/getNudges
  const {mobileNumber, setMobileNumber} = React.useContext(GeneralContext);
  const {insurance, setInsurance} = React.useContext(GeneralContext);
  const {profileData, setProfileData} = React.useContext(GeneralContext);
  const {Nudges, setNudges} = React.useContext(GeneralContext);
  const {widgets, setWidgets} = React.useContext(GeneralContext);
  const [hide, setHide] = React.useState(true);
  const [msg, setMsg] = React.useState('syncing your accounts');
  const [flag, setFlag] = React.useState(true);
  const [animation, setAnimation] = React.useState(true);
  let data = [
    'analyzing your finances',
    'getting your personalized view ready',
    '',
  ];
  let i = 0;

  React.useEffect(() => {
    getProfile();
    getInsurance();
    getNudge();
    getWidget();
    const timeoutId = setTimeout(function () {
      changeMessage();
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (msg === 'getting your personalized view ready') setAnimation(false);
    if (msg === '' && flag) {
      setFlag(false);
      console.log(flag);
      navigation.navigate('Home');
    }
  }, [msg]);

  const changeMessage = () => {
    // alert('Message Change Successfull');
    console.log('Hello World');
    setHide(prev => !prev);
    console.log(data[i]);
    setMsg(data[i]);
    {
      i < data.length - 1 ? i++ : (i = 0);
    }
    setHide(prev => !prev);
    setTimeout(function () {
      changeMessage();
    }, 5000);
  };

  const getProfile = async () => {
    var config = {
      method: 'get',
      url: `https://flask-production-a663.up.railway.app/api/getProfile/${mobileNumber}`,
      headers: {
        'Content-Type': 'application/json',
      },
      // params: {
      //   mobileNumber: '9987600001',
      // },
    };
    console.log(config);
    axios(config)
      .then(async function (response) {
        console.log(response.data.profileData);
        // setInsurance(response.data.insuranceDetails)
         setProfileData(response.data.profileData)
      })
      .catch(function (error) {
        console.log(error);
        alert('some error occured');
      });
  };
  const getInsurance = async () => {
    var config = {
      method: 'get',
      url: `https://flask-production-a663.up.railway.app/api/getInsuranceDetails/${mobileNumber}`,
      headers: {
        'Content-Type': 'application/json',
      },
      // params: {
      //   mobileNumber: '9987600001',
      // },
    };
    console.log(config);
    axios(config)
      .then(async function (response) {
        console.log(response.data.insuranceDetails);
        setInsurance(response.data.insuranceDetails)
      })
      .catch(function (error) {
        console.log(error);
        alert('some error occured');
      });
  };

  const getNudge = async () => {
    var config = {
      method: 'get',
      url: `https://flask-production-a663.up.railway.app/api/getNudges/${mobileNumber}`,
      headers: {
        'Content-Type': 'application/json',
      },
      // params: {
      //   mobileNumber: '9987600001',
      // },
    };
    console.log(config);
    axios(config)
      .then(async function (response) {
        console.log("------NUDGE-------")
        console.log(response.data.nudges.data);
        setNudges(response.data.nudges.data)
  
      })
      .catch(function (error) {
        console.log(error);
        alert('some error occured');
      });
  };

  const getWidget = async () => {
    var config = {
      method: 'get',
      url: `https://flask-production-a663.up.railway.app/api/getWidgetDetails/${mobileNumber}`,
      headers: {
        'Content-Type': 'application/json',
      },
      // params: {
      //   mobileNumber: '9987600001',
      // },
    };
    console.log(config);
    axios(config)
      .then(async function (response) {
        console.log("------WIDGET-------")
        console.log(response.data);
        setWidgets(response.data.widgetData.widgetsOrder)
  
      })
      .catch(function (error) {
        console.log(error);
        alert('some error occured');
      });
  };
  return (
    <View style={styles.FetchAA}>
      <View style={styles.content}>
        <Animated.View
          entering={FadeInDown.duration(1000)}
          exiting={FadeOutRight.duration(1000)}>
          <Text style={styles.headerText}>
            welcome to {'\n'}Mobi bAAnk
          </Text>
          <Text style={styles.bodyText}>Hang Tight</Text>
        </Animated.View>

        <View style={styles.consent}>
          {hide && (
            <Animated.View
              entering={FadeInDown.duration(1000)}
              style={[styles.consentAimation]}>
              <Text style={styles.ctxt}>{msg}</Text>
            </Animated.View>
          )}
        </View>
        {/* <Lottie
          source={require('../../assets/svg/4UBrDxZTaD.json')}
          autoPlay
          loop
        /> */}
        {!animation ? (
          <Lottie source={require('../../assets/svg/l2.json')} autoPlay loop />
        ) : (
          <Lottie
            source={require('../../assets/svg/mainLoader.json')}
            autoPlay
            loop
          />
        )}
      </View>
      <TouchableOpacity
        onPress={() => {
          setHide(prev => !prev);
        }}>
        <Text>Click Me</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Syncing;
