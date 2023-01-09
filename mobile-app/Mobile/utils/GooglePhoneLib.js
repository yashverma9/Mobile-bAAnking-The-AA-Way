import parsePhoneNumber from 'libphonenumber-js';
import {AsYouType} from 'libphonenumber-js';

const getFormatNumber = number => {
  if (number === '' || number === undefined || number === null) {
    return '';
  } else {
    const plus = '+';
    const finalNumber = plus + number;
    const formattedNo = new AsYouType().input(finalNumber);
    return formattedNo;
  }
};

export {getFormatNumber};
