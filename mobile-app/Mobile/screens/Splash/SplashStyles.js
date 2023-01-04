import {StyleSheet} from 'react-native';
import {getScaledDimension} from '../../utils/DynamicScaling';
export default StyleSheet.create({
  splash: {
    // backgroundColor: 'red',
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  button: {
    width: '88%',
    //height: getScaledDimension(80, 'height'),
    backgroundColor: '#FF5851',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '4%',
    paddingBottom: '4%',
    marginTop: 'auto',
    marginBottom: '8%',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: getScaledDimension(18, 'font'),
    color: 'white',
  },
  heroText: {
    marginTop: '40%',
    fontFamily: 'Poppins-Bold',
    fontSize: getScaledDimension(23, 'font'),
    color: '#00214E',
  },
  logo: {
    marginTop: '8%',
  },
  headerImg: {
    marginTop: '20%',
    // width: getScaledDimension(300, 'height'),
    // height: getScaledDimension(300, 'height'),
    // position: 'absolute',
    // top: '50%',
    // left: 0,
    // right: 0,
    // bottom: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
