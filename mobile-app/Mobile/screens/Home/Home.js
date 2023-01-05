import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './HomeStyles';
import {getScaledDimension} from '../../utils/DynamicScaling';
import Profile from '../../assets/svg/profile.svg';
import Search from '../../assets/svg/search.svg';
import RightArrow from '../../assets/svg/rightArrow.svg';
import A1 from '../../assets/svg/a1.svg';
import A2 from '../../assets/svg/a2.svg';
import Hdfc from '../../assets/svg/hdfc.svg';
import Kotak from '../../assets/svg/kotak.svg';
import Bob from '../../assets/svg/bob.svg';
import HomeSVG from '../../assets/svg/home.svg';
import CreditCard from '../../assets/svg/creditCard.svg';
import CC2 from '../../assets/svg/cc2.svg';
import UPI from '../../assets/svg/upi.svg';
import VA from '../../assets/svg/virtualAssistant.svg';
const Home = () => {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Profile
          style={styles.headerImg}
          width={getScaledDimension(60, 'height')}
          height={getScaledDimension(60, 'height')}
        />
        <View style={styles.headerTextParent}>
          <Text style={styles.headerSmall}>
            Welcome{'\n'}
            <Text style={styles.headerBig}>Yash</Text>
          </Text>
          {/* <Text style={styles.headerBig}>¸</Text> */}
        </View>
        <Search
          style={styles.headerSearchImg}
          width={getScaledDimension(20, 'height')}
          height={getScaledDimension(20, 'height')}
        />
      </View>

      <View style={styles.hero}>
        <Text style={styles.heroText}>
          Link more accounts to unlock full features
        </Text>
        {/* <View style={styles.money}>
          <Text style={styles.moneyText}>₹79,800</Text>
        </View> */}
      </View>

      <View style={styles.balance}>
        <View style={styles.bobBalance}>
          <Bob
            style={styles.headerImg}
            width={getScaledDimension(40, 'height')}
            height={getScaledDimension(40, 'height')}
          />
          <Text>Bank of Baroda</Text>
          <View style={styles.moneyTwo}>
            <Text style={styles.moneyText}>₹55,800</Text>
          </View>
        </View>
        <View style={[styles.bobBalance,{paddingLeft:'1%'}]}>
          <Hdfc
            style={{paddingLeft:'1%'}}
            width={getScaledDimension(25, 'height')}
            height={getScaledDimension(25, 'height')}
          />
          <Text style={{marginLeft:'4%'}}>HDFC</Text>
          <View style={styles.moneyTwo}>
            <Text style={styles.moneyText}>85,650</Text>
          </View>
        </View>
      </View>

      <Text style={styles.bigText}>specially for you</Text>

      <TouchableOpacity style={styles.nudge}>
        <Text style={styles.nudgeH1}>
          Investments for a secured future Consider our smart investment plans
          personalized for your profile
        </Text>
        <View style={styles.nudgeDescription}>
          <Text style={styles.nudgeText}>
            One can earn upto 7% interest on FDs
          </Text>
        </View>
        {/* <TouchableOpacity
          onPress={() => {
            alert('Nudges');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity> */}
      </TouchableOpacity>
      <Text style={styles.mediumText}>Financial Services</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.widget}>
          <Text style={styles.widgetText}>Investments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.widget}>
          <Text style={styles.widgetText}>Deposits</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.widget}>
          <Text style={styles.widgetText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.widget}>
          <Text style={styles.widgetText}>Insurance</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.aaButtonPress}>
        <Text style={styles.viewMore}>View More</Text>

        <RightArrow
          style={styles.rightArrow}
          width={getScaledDimension(25, 'height')}
          height={getScaledDimension(25, 'height')}
        />
      </TouchableOpacity>

      {/* <Text style={[styles.mediumText,{marginTop:'1%'}]}>Account Aggregator</Text>

      <View style={styles.aaMenu}>
        <TouchableOpacity
          onPress={() => {
            alert('m1');
          }}
          style={styles.aaMenuBox}>
          <A1
            style={styles.rightArrow}
            width={getScaledDimension(25, 'height')}
            height={getScaledDimension(25, 'height')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert('m2');
          }}
          style={styles.aaMenuBox}>
          <A2
            style={styles.rightArrow}
            width={getScaledDimension(25, 'height')}
            height={getScaledDimension(25, 'height')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.aaButtonPress}>
          <Text style={styles.viewMore}>View More</Text>

          <RightArrow
            style={styles.rightArrow}
            width={getScaledDimension(25, 'height')}
            height={getScaledDimension(25, 'height')}
          />
        </TouchableOpacity>
      </View> */}

      <View style={styles.bottomTab}>
        <View style={styles.pill}></View>
        <Text style={styles.bottomTabText}>Our Services</Text>
        <View style={styles.hr}></View>
        <View style={styles.menuParent}>
          <TouchableOpacity style={styles.menuItems}>
            <HomeSVG
              style={styles.rightArrow}
              width={getScaledDimension(25, 'height')}
              height={getScaledDimension(25, 'height')}
            />
            <Text style={styles.menuItemsText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItems}>
            <CreditCard
              style={styles.rightArrow}
              width={getScaledDimension(25, 'height')}
              height={getScaledDimension(25, 'height')}
            />
            <Text style={styles.menuItemsText}>Accounts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItems}>
            <CC2
              style={styles.rightArrow}
              width={getScaledDimension(25, 'height')}
              height={getScaledDimension(25, 'height')}
            />
            <Text style={styles.menuItemsText}>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItems}>
            <UPI
              style={styles.rightArrow}
              width={getScaledDimension(25, 'height')}
              height={getScaledDimension(25, 'height')}
            />
            <Text style={styles.menuItemsText}>Consents</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItems}>
            <VA
              style={styles.rightArrow}
              width={getScaledDimension(25, 'height')}
              height={getScaledDimension(25, 'height')}
            />
            <Text style={styles.menuItemsText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
