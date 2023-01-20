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
import P from '../../assets/svg/p.svg';
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
import {GeneralContext} from '../../contexts/GeneralContext';
const SelectBankAccount = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  const [c1, sc1] = React.useState(true);
  const [c2, sc2] = React.useState(true);
  const [c3, sc3] = React.useState(true);
  const [c4, sc4] = React.useState(true);
  const [c5, sc5] = React.useState(true);
  const [checkedState, setCheckedState] = React.useState(
    new Array(20).fill(true),
  );
  console.log(checkedState);
  const {allAccounts, setAllAccounts} = React.useContext(GeneralContext);
  const {consentDetails, setConsentDetails} = React.useContext(GeneralContext);
  console.log('-----', allAccounts);

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);
  };
  return (
    <View style={styles.FetchAA}>
      <ScrollView style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>securely view accounts</Text>
          <Text style={styles.bodyText}>
            We discovered the following banks and providers linked{'\n'}to your
            mobile number
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
            {allAccounts?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.bankAccount, styles.selected]}>
                  <View style={styles.row}>
                    {item.providerName === 'Bank of Baroda' && (
                      <Bob
                        style={styles.headerImg}
                        width={getScaledDimension(38, 'height')}
                        height={getScaledDimension(38, 'height')}
                      />
                    )}
                    {item.providerName === 'HDFC Bank' && (
                      <Hdfc
                        style={styles.headerImg}
                        width={getScaledDimension(38, 'height')}
                        height={getScaledDimension(38, 'height')}
                      />
                    )}
                    {item.providerName === 'Angel Broking' && (
                      <Angel
                        style={styles.headerImg}
                        width={getScaledDimension(38, 'height')}
                        height={getScaledDimension(38, 'height')}
                      />
                    )}
                    {item.providerName === 'Max Life Insurance' && (
                      <Max
                        style={styles.headerImg}
                        width={getScaledDimension(38, 'height')}
                        height={getScaledDimension(38, 'height')}
                      />
                    )}

                    {item.providerName === 'Pirimid FinTech' && (
                      <P
                        style={styles.headerImg}
                        width={getScaledDimension(38, 'height')}
                        height={getScaledDimension(38, 'height')}
                      />
                    )}

                    <Text style={styles.bankName}>
                      &nbsp;{item.providerName}
                    </Text>
                  </View>
                  {item.accounts.map((itm, idx) => {
                    return (
                      <View key={idx} style={[styles.row, styles.rowAcc]}>
                        <Text
                          style={{
                            color: 'black',
                          }}>{`${itm.type} ${itm.accNumber}`}</Text>
                        {console.log(index, checkedState[index])}
                        <CheckBox
                          disabled={false}
                          // value={c3}
                          // onValueChange={newValue => sc3(newValue)}
                          value={checkedState[index]}
                          onChange={() => handleOnChange(index)}
                          tintColors={{true: '#00214E', false: '#00214E'}}
                        />
                      </View>
                    );
                  })}
                </TouchableOpacity>
              );
            })}
            {/* <TouchableOpacity style={[styles.bankAccount, styles.selected]}>
              <View style={styles.row}>
                <Bob
                  style={styles.headerImg}
                  width={getScaledDimension(38, 'height')}
                  height={getScaledDimension(38, 'height')}
                />
                <Text style={styles.bankName}>&nbsp;Bank of Baroda</Text>
              </View>
              <View style={[styles.row, styles.rowAcc]}>
                <Text style={{color: 'black'}}>Savings XXX3188</Text>
                <CheckBox
                  disabled={false}
                  value={c3}
                  onValueChange={newValue => sc3(newValue)}
                  tintColors={{true: '#00214E', false: '#00214E'}}
                />
              </View>
              <View style={[styles.row, styles.rowAcc]}>
                <Text style={{color: 'black'}}>Fixed Deposit XXX2242</Text>
                <CheckBox
                  disabled={false}
                  value={c1}
                  onValueChange={newValue => sc1(newValue)}
                  tintColors={{true: '#00214E', false: '#00214E'}}
                />
              </View>
            </TouchableOpacity> */}
            {/* 
            <TouchableOpacity style={[styles.bankAccount, styles.selected]}>
              <View style={styles.row}>
                <Hdfc
                  style={styles.headerImg}
                  width={getScaledDimension(30, 'height')}
                  height={getScaledDimension(30, 'height')}
                />
                <Text style={styles.bankName}>&nbsp;&nbsp;HDFC Bank</Text>
              </View>
              <View style={[styles.row, styles.rowAcc]}>
                <Text style={{color: 'black'}}>Savings XXX3221</Text>
                <CheckBox
                  disabled={false}
                  value={c2}
                  onValueChange={newValue => sc2(newValue)}
                  tintColors={{true: '#00214E', false: '#00214E'}}
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
                <Text style={styles.bankName}>&nbsp;&nbsp;Angel Broking</Text>
              </View>
              <View style={[styles.row, styles.rowAcc]}>
                <Text style={{color: 'black'}}>Mutual Funds</Text>
                <CheckBox
                  disabled={false}
                  value={c4}
                  onValueChange={newValue => sc4(newValue)}
                  tintColors={{true: '#00214E', false: '#00214E'}}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.bankAccount, styles.selected]}>
              <View style={styles.row}>
                <Max
                  style={styles.headerImg}
                  width={getScaledDimension(30, 'height')}
                  height={getScaledDimension(30, 'height')}
                />
                <Text style={styles.bankName}>
                  &nbsp;&nbsp;Max Life Insurance
                </Text>
              </View>
              <View style={[styles.row, styles.rowAcc]}>
                <Text style={{color: 'black'}}>Life Insurance</Text>
                <CheckBox
                  disabled={false}
                  value={c5}
                  onValueChange={newValue => sc5(newValue)}
                  tintColors={{true: '#00214E', false: '#00214E'}}
                />
              </View>
            </TouchableOpacity> */}

            <Text style={[styles.bktxt, {marginTop: '4%'}]}>
              Search All Banks and Providers
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
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('OtpTwo');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Verify Accounts</Text>
      </TouchableOpacity>
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
