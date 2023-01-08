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
import styles from './ProfileStyles';
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
const Profile = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  const [c1, sc1] = React.useState(true);
  const [c2, sc2] = React.useState(true);
  const [c3, sc3] = React.useState(true);
  const {profileData, setProfileData} = React.useContext(GeneralContext);
  return (
    <View style={styles.FetchAA}>
      <View style={styles.content}>
        <Animated.View entering={FadeInRight.duration(650)}>
          <Text style={styles.headerText}>Profile{'\n'}</Text>
          {/* <Text style={styles.bodyText}>
              recommended insurance baased on your{'\n'}demographic and finances
              </Text> */}
          <ProfileBig
            style={{marginLeft:'auto',marginRight:'auto'}}
            width={getScaledDimension(140, 'height')}
            height={getScaledDimension(140, 'height')}
          />
        </Animated.View>

        <View style={styles.consent}>
          <Animated.View
            entering={FadeInDown.duration(650)}
            style={styles.consentAimation}>
            <Text style={styles.bktxt}>Personal Details</Text>
            <TouchableOpacity style={[styles.bankAccount, styles.selected]}>
              <View style={styles.txtParent}>
                <Text style={styles.big}>Name</Text>
                <Text style={styles.small}>
                  {profileData.name}
                </Text>
              </View>
              <View style={styles.txtParent}>
                <Text style={styles.big}>Mobile Number</Text>
                <Text style={styles.small}>{profileData.mobile}</Text>
              </View>
              <View style={styles.txtParent}>
                <Text style={styles.big}>Email</Text>
                <Text style={styles.small}>{profileData.email}</Text>
              </View>

              <View style={styles.txtParent}>
                <Text style={styles.big}>Date of Birth</Text>
                <Text style={styles.small}>{profileData.dob}</Text>
              </View>
              <View style={styles.txtParent}>
                <Text style={styles.big}>Address</Text>
                <Text style={styles.small}>{profileData.address}</Text>
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
            navigation.navigate('Home');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
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

export default Profile;
