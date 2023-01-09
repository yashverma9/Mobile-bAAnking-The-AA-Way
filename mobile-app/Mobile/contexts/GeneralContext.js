import React from 'react';

const GeneralContext = React.createContext();

const GeneralProvider = ({children}) => {
  const [test, setTest] = React.useState('test123');
  const [mobileNumber, setMobileNumber] = React.useState('9987600001');
  const [profileData, setProfileData] = React.useState();
  const [widgets, setWidgets] = React.useState([
    {
      Investments:
        'Invest in different instruments for better returns on your money',
    },
    {
      Deposits: 'Save and grow your money in fixed and recurring deposits',
    },
    {
      Payments: 'Make all kinds of bill payments and earn cashback',
    },
    {
      Insurance:
        'Get Medical and Life insured with our customer friendly plans',
    },
    {
      Cards:
        'Manage your existing cards or choose from a wide range of cards to enjoy special privileges, offers and cashback points!',
    },
    {
      Accounts: 'Manage all your accounts in one place',
    },
    {
      Loans: 'Explore all kinds of different loans as per your needs',
    },
  ]);
  const [Nudges, setNudges] = React.useState([
    {
      mainText:
        'You have been saving up a lot in your bank accounts, why not put it in a lock-in free Fixed Deposit for better returns?',
      smallText: 'One can earn upto 7% interest on FDs',
    },
    {
      mainText:
        'Start investing today to save and get returns at the same time! Checkout our Mutual Funds...',
      smallText:
        'Investing into stable instruments can help save and even grow your money gradually',
    },
    {
      mainText:
        'Shopping is the best medicine, we have a credit card just for you!',
      smallText:
        'Get higher credit limits and many offers for the shopper in you!',
    },
    {
      mainText: 'Reminder: Your wifi bill will be due in 3 days, pay early!',
      smallText:
        'You missed 2 bill payments in the last 3 months. Pay early and avoid the late fees.',
    },
    {
      mainText:
        'You have received lump sum amount in your bank account this week, would you like to invest in Mutual Funds?',
      smallText:
        'Mutual Funds can give more than 10% average annualized return subject to market risk',
    },
    {
      mainText:
        'On the basis of your demographic and income, you are under insured. Would you like to opt for a better life insurance?',
      smallText: '80% customers of your age opt for a 1Cr+ life cover!',
    },
    {
      mainText:
        'Shopping is the best medicine, we have a credit card just for you!',
      smallText:
        'Get higher credit limits and many offers for the shopper in you!',
    },
    {
      mainText: 'Want to increase your credit score? Have a look!',
      smallText:
        'People with higher credit scores get potentially lower interest rates',
    },
  ]);
  const [insurance, setInsurance] = React.useState();
  const [allAccounts, setAllAccounts] = React.useState();
  const [consentDetails, setConsentDetails] = React.useState();

  return (
    <GeneralContext.Provider
      value={{
        test,
        setTest,
        mobileNumber,
        setMobileNumber,
        profileData,
        setProfileData,
        widgets,
        setWidgets,
        Nudges,
        setNudges,
        insurance,
        setInsurance,
        allAccounts,
        setAllAccounts,
        consentDetails,
        setConsentDetails,
      }}>
      {children}
    </GeneralContext.Provider>
  );
};

export {GeneralContext, GeneralProvider};
