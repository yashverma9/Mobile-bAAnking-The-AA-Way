import {NativeModules} from 'react-native';
const {ClientManager} = NativeModules;
const {CallkeepHelperModule} = NativeModules;
import {
  getData,
  getJwtToken,
  convertToE164,
  convertFormattedToe164,
} from './utils';
import {getFormatNumber} from './GooglePhoneLib';
import * as RootNavigation from './RootNavigation';

const answerCall = () => {
  ClientManager.answerCall();
};
const hangup = () => {
  ClientManager.endCall();
};

const loginUtil = () => {
  login(ClientManager);
};

const addonStatusChange = (eventEmitter, setStatus) => {
  eventEmitter.addListener('onStatusChange', data => {
    console.log('---onStatusChangecalled---');
    console.log(data);
    const status = data.status;

    setStatus(status);

    // displayConnectionStatus(status);

    if (status === 'connected' || status === 'Connected') {
      console.log('Connected');
      setStatus('connected');
    }
  });
};

const receiveCall = () => {
  ClientManager.receiveCall();
};

const addonIncomingCall = (eventEmitter, setNumber, setDialerState) => {
  eventEmitter.addListener('onIncomingCall', data => {
    console.log('---Event Emitter added for incomming calls---');
    console.log(data);
    const number = data.number;
    RootNavigation.navigate('Dialer');
    setNumber(number);
    setDialerState('incoming');
    // setInterval(greet, 1000);
  });
};
function greet() {
  // pauseAudio();
  console.warn('Hello From Vonage Audio.js');
}
const login = async ClientManager => {
  const jwt = await getJwtToken();
  ClientManager.login(jwt);
};

const handleOutgoingCallWithParam = async (number, setNumber, setLoading) => {
  const token = await getData('@token');
  const finalNumber = convertFormattedToe164(number);
  // alert(finalNumber);
  const removePlus = getFormatNumber(number).slice(
    1,
    getFormatNumber(number).length,
  );
  // alert(removePlus);
  ClientManager.makeCall(finalNumber, token);

  setLoading(true);
  setNumber(removePlus);
  RootNavigation.navigate('Dialer');
};

const muteCallVonage = () => {
  ClientManager.muteCall();
};
const unmuteCallVonage = () => {
  ClientManager.unmuteCall();
};

const getConvId = async () => {
  try {
    const result = await ClientManager.getConversationID();
    console.log(result);
    return result;
  } catch (e) {
    alert('error while call recording');
  }
};
export {
  answerCall,
  hangup,
  loginUtil,
  addonStatusChange,
  receiveCall,
  addonIncomingCall,
  handleOutgoingCallWithParam,
  muteCallVonage,
  getConvId,
  unmuteCallVonage,
};
