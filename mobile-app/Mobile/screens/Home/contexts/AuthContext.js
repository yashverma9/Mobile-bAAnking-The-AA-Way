import React from 'react';
const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [authEmail, setAuthEmail] = React.useState('');
  const [authPassword, setAuthPassword] = React.useState('');
  const [googleSignIn, setGS] = React.useState('');

  return (
    <AuthContext.Provider
      value={{
        authEmail,
        setAuthEmail,
        authPassword,
        setAuthPassword,
        googleSignIn,
        setGS,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
