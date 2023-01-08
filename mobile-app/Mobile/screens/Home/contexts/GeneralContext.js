import React from 'react';
import {handleOutgoingCallWithParam} from '../utils/Vonage';
const GeneralContext = React.createContext();

const GeneralProvider = ({children}) => {
  const [gc, setGc] = React.useState('');
  const [status, setStatus] = React.useState('connected');
  const [dialerState, setDialerState] = React.useState('default');
  const [number, setNumber] = React.useState('');
  const [eventEmitterStatus, setEventEmitterStatus] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [audioPlaying, setAudioPlaying] = React.useState('false');
  const [callState, setCallState] = React.useState('initial');
  const [userNumber, setUserNumber] = React.useState('');
  const [loudSpeaker, setLoudSpeaker] = React.useState(false);

  const test = number => {
    // alert('test');
    handleOutgoingCallWithParam(number);
  };

  return (
    <GeneralContext.Provider
      value={{
        loading,
        setLoading,
        gc,
        setGc,
        status,
        setStatus,
        dialerState,
        setDialerState,
        number,
        setNumber,
        eventEmitterStatus,
        setEventEmitterStatus,
        handleOutgoingCallWithParam,
        test,
        audioPlaying,
        setAudioPlaying,
        callState,
        setCallState,
        userNumber,
        setUserNumber,
        loudSpeaker,
        setLoudSpeaker,
      }}>
      {children}
    </GeneralContext.Provider>
  );
};

export {GeneralContext, GeneralProvider};
