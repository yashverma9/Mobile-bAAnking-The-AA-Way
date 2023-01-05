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
import Bob from '../../assets/svg/bob.svg';
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
const SelectBankAccount = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  const [c1, sc1] = React.useState(true);
  const [c2, sc2] = React.useState(true);
  const [c3, sc3] = React.useState(true);
  return (
    <View style={styles.FetchAA}>
      <View style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>securely view accounts</Text>
          <Text style={styles.bodyText}>
            We discovered the following banks and providers linked to your
            mobile number{'\n'}
          </Text>
        </Animated.View>

        <View style={styles.consent}>
          <Animated.View
            entering={FadeInDown.duration(650)}
            style={styles.consentAimation}>
            {/* <Logo
              style={styles.headerImg}
              width={getScaledDimension(100, 'height')}
              height={getScaledDimension(100, 'height')}
            /> */}
            <Text style={styles.bktxt}>Choose which ones to connect</Text>
            <TouchableOpacity style={[styles.bankAccount, styles.selected]}>
              <View style={styles.row}>
                <Bob
                  style={styles.headerImg}
                  width={getScaledDimension(40, 'height')}
                  height={getScaledDimension(40, 'height')}
                />
                <Text style={styles.bankName}>Bank of Baroda</Text>
                {/* <Tick
                  style={styles.tick}
                  width={getScaledDimension(25, 'height')}
                  height={getScaledDimension(25, 'height')}
                /> */}
              </View>
              <View style={[styles.row,styles.rowAcc]}>
                <Text>Savings ..3188</Text>
                <CheckBox
                  disabled={false}
                  value={c3}
                  onValueChange={newValue => sc3(newValue)}
                  tintColors={ {true:"#00214E",false:"#00214E"} }
                />
              </View>
              <View style={[styles.row,styles.rowAcc]}>
                <Text>Fixed Deposit ..2242</Text>
                <CheckBox
                  disabled={false}
                  value={c1}
                  onValueChange={newValue => sc1(newValue)}
                  tintColors={ {true:"#00214E",false:"#00214E"} }
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.bankAccount, styles.selected]}>
              <View style={styles.row}>
                <Hdfc
                  style={styles.headerImg}
                  width={getScaledDimension(30, 'height')}
                  height={getScaledDimension(30, 'height')}
                />
                <Text style={styles.bankName}>HDFC Bank</Text>
                {/* <Tick
                  style={styles.tick}
                  width={getScaledDimension(25, 'height')}
                  height={getScaledDimension(25, 'height')}
                /> */}
              </View>
              <View style={[styles.row,styles.rowAcc]}>
                <Text>Savings ..3221</Text>
                <CheckBox
                  disabled={false}
                  value={c2}
                  onValueChange={newValue => sc2(newValue)}
                  tintColors={ {true:"#00214E",false:"#00214E"} }
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.bankAccount, styles.selected]}>
              <View style={styles.row}>
                <Angel
                  style={styles.headerImg}
                  width={getScaledDimension(30, 'height')}
                  height={getScaledDimension(30, 'height')}
                />
                <Text style={styles.bankName}>Angel Broking</Text>
                <Tick
                  style={styles.tick}
                  width={getScaledDimension(25, 'height')}
                  height={getScaledDimension(25, 'height')}
                />
              </View>
              {/* <View style={[styles.row,styles.rowAcc]}>
                <Text>Savings ..3221</Text>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                  tintColors={ {true:"#00214E",false:"#00214E"} }
                />
              </View> */}
            </TouchableOpacity>

            <TouchableOpacity style={[styles.bankAccount, styles.selected]}>
              <View style={styles.row}>
                <Max
                  style={styles.headerImg}
                  width={getScaledDimension(30, 'height')}
                  height={getScaledDimension(30, 'height')}
                />
                <Text style={styles.bankName}>Max Life Insurance</Text>
                <Tick
                  style={styles.tick}
                  width={getScaledDimension(25, 'height')}
                  height={getScaledDimension(25, 'height')}
                />
              </View>
              {/* <View style={[styles.row,styles.rowAcc]}>
                <Text>Savings ..3221</Text>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                  tintColors={ {true:"#00214E",false:"#00214E"} }
                />
              </View> */}
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

        {/* <Animated.View
          entering={FadeInRight.duration(650)}
          style={styles.floatingMessage}>
          <Text style={styles.floatingMessage}>Revoke consent anytime</Text>
        </Animated.View> */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('OtpTwo');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Verify Bank Accounts</Text>
        </TouchableOpacity>
      </View>
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
    </View>
  );
};

export default SelectBankAccount;
