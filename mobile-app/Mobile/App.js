import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GeneralProvider} from './contexts/GeneralContext';
import Splash from './screens/Splash/Splash';
import MobileNumber from './screens/MobileNumber/MobileNumber';
import Otp from './screens/Otp/Otp';
import OtpTwo from './screens/OtpTwo/OtpTwo';
import SEA from './screens/SearchingAccountAnimation/SearchingAccountAnimation';
import Name from './screens/Name/Name';
import FetchAA from './screens/FetchAA/FetchAA';
import SelectBankAccount from './screens/SelectBankAccount/SelectBankAccount';
import Syncing from './screens/Syncing/Syncing';
import Home from './screens/Home/Home';
import Journey from './screens/Journey/Journey';
import JourneyTwo from './screens/Journey/JourneyTwo';
import Profile from './screens/Profile/Profile';
import Consents from './screens/Consents/Consents';
import ComingSoon from './screens/ComingSoon/ComingSoon';

const Stack = createNativeStackNavigator();
const App = () => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  return (
    <GeneralProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            options={{headerShown: false, animation: 'none'}}
            component={Splash}
          />
          <Stack.Screen
            name="Name"
            options={{headerShown: false, animation: 'none'}}
            component={Name}
          />
          <Stack.Screen
            name="MobileNumber"
            options={{headerShown: false, animation: 'none'}}
            component={MobileNumber}
          />
          <Stack.Screen
            name="Otp"
            options={{headerShown: false, animation: 'none'}}
            component={Otp}
          />
          <Stack.Screen
            name="OtpTwo"
            options={{headerShown: false, animation: 'none'}}
            component={OtpTwo}
          />
          <Stack.Screen
            name="SEA"
            options={{headerShown: false, animation: 'none'}}
            component={SEA}
          />
          <Stack.Screen
            name="FetchAA"
            options={{headerShown: false, animation: 'none'}}
            component={FetchAA}
          />
          <Stack.Screen
            name="SelectBankAccount"
            options={{headerShown: false, animation: 'none'}}
            component={SelectBankAccount}
          />
          <Stack.Screen
            name="Syncing"
            options={{headerShown: false, animation: 'none'}}
            component={Syncing}
          />
          <Stack.Screen
            name="Home"
            options={{headerShown: false, animation: 'none'}}
            component={Home}
          />
          <Stack.Screen
            name="Journey"
            options={{headerShown: false, animation: 'none'}}
            component={Journey}
          />
          <Stack.Screen
            name="JourneyTwo"
            options={{headerShown: false, animation: 'none'}}
            component={JourneyTwo}
          />
          <Stack.Screen
            name="Profile"
            options={{headerShown: false, animation: 'none'}}
            component={Profile}
          />
          <Stack.Screen
            name="Consents"
            options={{headerShown: false, animation: 'none'}}
            component={Consents}
          />
          <Stack.Screen
            name="ComingSoon"
            options={{headerShown: false, animation: 'none'}}
            component={ComingSoon}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GeneralProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
