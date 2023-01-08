import React from 'react';

const GeneralContext = React.createContext();

const GeneralProvider = ({children}) => {
  const [test, setTest] = React.useState('test123');
  const [mobileNumber, setMobileNumber] = React.useState('');

  return (
    <GeneralContext.Provider
      value={{
        test,
        setTest,
        mobileNumber,
        setMobileNumber,
      }}>
      {children}
    </GeneralContext.Provider>
  );
};

export {GeneralContext, GeneralProvider};
