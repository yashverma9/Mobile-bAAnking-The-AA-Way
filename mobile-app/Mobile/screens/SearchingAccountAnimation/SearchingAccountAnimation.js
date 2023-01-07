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
const SearchingAccountAnimation = ({navigation}) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SelectBankAccount');
          }, 8000);
    }, [])
    
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
    justifyContent:"space-between"
  },
  headerText: {
    marginTop: '4%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: getScaledDimension(20, 'font'),
    color: '#00214E',
  },
});
