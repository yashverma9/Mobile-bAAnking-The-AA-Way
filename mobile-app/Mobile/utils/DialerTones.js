import {
  TONE_CDMA_ALERT_CALL_GUARD,
  TONE_DTMF_0,
  TONE_DTMF_1,
  TONE_DTMF_2,
  TONE_DTMF_3,
  TONE_DTMF_4,
  TONE_DTMF_5,
  TONE_DTMF_6,
  TONE_DTMF_7,
  TONE_DTMF_8,
  TONE_DTMF_9,
  TONE_DTMF_P, //#
  TONE_DTMF_S, //*
  TONE_PROP_BEEP, //+
  startTone,
  stopTone,
  getStreamMaxVolume,
  setStreamVolume,
} from '@mgcrea/react-native-tone-generator';

const playDialerTone = async key => {
  console.log(key);

  switch (key) {
    case '0':
      startStopTone(TONE_DTMF_0, key);
      break;
    case '1':
      startStopTone(TONE_DTMF_1);
      break;
    case '2':
      startStopTone(TONE_DTMF_2);
      break;
    case '3':
      startStopTone(TONE_DTMF_3);
      break;
    case '4':
      startStopTone(TONE_DTMF_4);
      break;
    case '5':
      startStopTone(TONE_DTMF_5);
      break;
    case '6':
      startStopTone(TONE_DTMF_6);
      break;
    case '7':
      startStopTone(TONE_DTMF_7);
      break;
    case '8':
      startStopTone(TONE_DTMF_8);
      break;
    case '9':
      startStopTone(TONE_DTMF_9);
      break;
    case '#':
      startStopTone(TONE_DTMF_P);
      break;
    case '*':
      startStopTone(TONE_DTMF_S);
      break;
    case '+':
      startStopTone(TONE_PROP_BEEP);
      break;
    default:
    // code block
  }
};

const playDialerToneIVR = async key => {
  console.log(key);

  switch (key) {
    case '0':
      startStopToneIVR(TONE_DTMF_0);
      break;
    case '1':
      startStopToneIVR(TONE_DTMF_1);
      break;
    case '2':
      startStopToneIVR(TONE_DTMF_2);
      break;
    case '3':
      startStopToneIVR(TONE_DTMF_3);
      break;
    case '4':
      startStopToneIVR(TONE_DTMF_4);
      break;
    case '5':
      startStopToneIVR(TONE_DTMF_5);
      break;
    case '6':
      startStopToneIVR(TONE_DTMF_6);
      break;
    case '7':
      startStopToneIVR(TONE_DTMF_7);
      break;
    case '8':
      startStopToneIVR(TONE_DTMF_8);
      break;
    case '9':
      startStopToneIVR(TONE_DTMF_9);
      break;
    case '#':
      startStopToneIVR(TONE_DTMF_P);
      break;
    case '*':
      startStopToneIVR(TONE_DTMF_S);
      break;
    case '+':
      startStopToneIVR(TONE_PROP_BEEP);
      break;
    default:
    // code block
  }
};
const startStopTone = async (tone, key) => {
  if (key === '0') {
    startTone(tone);
    setTimeout(() => {
      stopTone();
    }, 150);
    return;
  }
  startTone(tone);
  // setTimeout(() => {
  //   stopTone();
  // }, 150);
  //   stopTone();
  //   const maxVolume = await getStreamMaxVolume();
  //   setStreamVolume(maxVolume);
};

const stopToneFunc = async () => {
  stopTone();
};

const startStopToneIVR = async (tone, key) => {
  startTone(tone);
  setTimeout(() => {
    stopTone();
  }, 150);
};

export {playDialerTone, stopToneFunc, playDialerToneIVR};
