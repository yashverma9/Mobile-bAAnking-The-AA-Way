import {StyleSheet} from 'react-native';
import {getScaledDimension} from '../../utils/DynamicScaling';
export default StyleSheet.create({
  FetchAA: {
    // backgroundColor: 'red',
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  content: {
    width: '88%',
   // backgroundColor: 'green',
    backgroundColor: '#FFFFFF',
    flex: 1,

  },
  headerText: {
    marginTop: '4%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: getScaledDimension(24, 'font'),
    color: '#00214E',
    textAlign: 'center',
  },
  bodyText: {
    marginTop: '1.5%',
    fontFamily: 'Poppins-Regular',
    fontSize: getScaledDimension(12, 'font'),
    color: '#00214E',
    textAlign: 'center',
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
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom:'4%',
    width: '80%',
    //height: getScaledDimension(80, 'height'),
    backgroundColor: '#E9F2FF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '4%',
    paddingBottom: '4%',
    
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: getScaledDimension(18, 'font'),
    color: '#00214E',
  },
  consent: {
    marginTop: '15%',
    paddingBottom: '4%',
    width: '95%',
    // height: '80%',
   // backgroundColor: 'red',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  consentAimation: {
    width: '100%',

    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  id: {
    marginTop: '4%',
    width: '92%',
    height: '6%',
    borderWidth: 1,
    borderColor: '#00214E',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  idText: {
    fontFamily: 'Poppins-Medium',
    fontSize: getScaledDimension(13, 'font'),
    color: '#00214E',
  },
  txtParent: {
    marginRight: 'auto',
    marginLeft: '4.5%',
    marginTop: '4%',
  },
  big: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getScaledDimension(13, 'font'),
    color: '#00214E',
  },
  small: {
    fontFamily: 'Poppins-Medium',
    fontSize: getScaledDimension(13, 'font'),
    color: '#00214E',
  },
  showMore: {
    marginTop: '4%',
    fontFamily: 'Poppins-Regular',
    fontSize: getScaledDimension(12, 'font'),
    color: '#5F5F5F',
  },
  buttonParent: {
    marginTop: '4%',
    width: '92%',
  },
  accept: {
    borderRadius: 16,
    backgroundColor: '#00C64F',
    paddingTop: '4%',
    paddingBottom: '4%',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    // elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptText: {
    fontFamily: 'Poppins-Medium',
    fontSize: getScaledDimension(15, 'font'),
    color: 'white',
  },

  reject: {
    marginTop: '4%',
    borderRadius: 16,
    backgroundColor: '#E44E45',
    paddingTop: '4%',
    paddingBottom: '4%',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    // elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rejectText: {
    fontFamily: 'Poppins-Medium',
    fontSize: getScaledDimension(15, 'font'),
    color: 'white',
  },
  floatingMessage: {
    marginTop: 'auto',
    marginBottom: '2%',
    fontFamily: 'Poppins-Medium',
    fontSize: getScaledDimension(15, 'font'),
    color: '#00214E',
    textAlign: 'center',
  },
  bankAccount: {
    marginTop: '4%',
    width: '92%',
    // height: '10%',
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
   // flexDirection: 'row',
    padding: '2%',
  },
  selected: {
    borderColor: '#00214E',
  },
  row:{
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    //backgroundColor:'red',
    justifyContent:'space-evenly'
  },
  rowAcc:{
    justifyContent:'space-between',
    paddingLeft:'2%',
    paddingRight:'2%'
  },
  bankName: {
    marginLeft: '5%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: getScaledDimension(20, 'font'),
    color: 'black',
  },
  bktxt: {
    marginTop:'2%',
    marginLeft: '5%',
    marginRight: 'auto',
    fontFamily: 'Poppins-SemiBold',
    fontSize: getScaledDimension(18, 'font'),
    color: '#838383',
  },
  tick: {
    marginLeft: 'auto',
    marginRight: '4%',
  },
  secure:{
    width:'100%',
    height:"4%",
    backgroundColor:'red',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  secureText:{
    marginLeft: '2%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: getScaledDimension(12, 'font'),
    color: 'white',
  },
  lock:{
    marginRight:'2%'
  },
  secureGroup:{
    flexDirection:'row'
  },
  txtParent: {
    marginRight: 'auto',
    marginLeft: '4.5%',
    marginTop: '4%',
  },
  big: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getScaledDimension(16, 'font'),
    color: '#00214E',
  },
  small: {
    fontFamily: 'Poppins-Medium',
    fontSize: getScaledDimension(14, 'font'),
    color: '#00214E',
  },
});
