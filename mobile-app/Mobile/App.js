import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash/Splash';
import MobileNumber from './screens/MobileNumber/MobileNumber';
import Otp from './screens/Otp/Otp';
import Name from './screens/Name/Name';
import FetchAA from './screens/FetchAA/FetchAA';
import SelectBankAccount from './screens/SelectBankAccount/SelectBankAccount';
import Syncing from './screens/Syncing/Syncing';
import Home from './screens/Home/Home';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
