import {StyleSheet} from 'react-native';
import {getScaledDimension} from '../../utils/DynamicScaling';
export default StyleSheet.create({
  MobileNumber: {
    // backgroundColor: 'red',
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  content: {
    width: '88%',
    backgroundColor: 'green',
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  headerText: {
    marginTop: '4%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: getScaledDimension(20, 'font'),
    color: '#00214E',
  },
  bodyText: {
    marginTop: '1.5%',
    fontFamily: 'Poppins-Regular',
    fontSize: getScaledDimension(12, 'font'),
    color: '#00214E',
  },
  input: {
    width: '100%',
    minHeight: 50,
    marginTop: '6%',
    //backgroundColor: 'red',

    fontFamily: 'Poppins-Regular',
    fontSize: getScaledDimension(24, 'font'),

    color: 'black',

    textAlign: 'left',
    padding: 0,
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    //height: getScaledDimension(80, 'height'),
    backgroundColor: '#E9F2FF',
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
    color: '#00214E',
  },
});
