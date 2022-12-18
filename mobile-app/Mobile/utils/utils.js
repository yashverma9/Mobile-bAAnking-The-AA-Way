import AsyncStorage from '@react-native-async-storage/async-storage';
import {REACT_APP_SERVER_URL, REACT_APP_SOCKETS_URL} from '@env';
const storeData = async value => {
  try {
    await AsyncStorage.setItem('@token', value);
  } catch (e) {
    // saving error
    alert('error while setting local storage data');
  }
};

const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored

      return value;
    }
  } catch (e) {
    // error reading value
    alert('error while accessing local storage data');
  }
};

const removeData = async () => {
  try {
    await AsyncStorage.removeItem('@token');
  } catch (e) {
    // remove error
  }

  console.log('Done.');
};

const ConvertFromSeconds = seconds => {
  let m = Math.floor(seconds / 60);
  let h = Math.floor(m / 60);
  m = m - h * 60;
  let s = seconds - m * 60 - h * 60 * 60;

  if (seconds !== 0) {
    if (3600 < seconds) {
      if (h === 1) return `${h} hr ${m} mins ${s} secs`;
      else return `${h} hrs ${m} mins ${s} secs`;
    } else if (3600 > seconds && 61 < seconds) {
      if (m === 1) return `${m} min ${s} secs`;
      else return `${m} mins ${s} secs`;
    } else {
      if (s === 1) return `${s} sec`;
      else return `${s} secs`;
    }
  } else return `0 secs`;
};

function dConvert(date) {
  let w = new Date();
  let f = new Date(date);
  let e = f.toLocaleDateString();
  let d = w.toLocaleDateString();
  if (d === e) {
    return 'Today';
  } else if (d - 1 === e) {
    return 'Yesterday';
  } else {
    return e;
  }
  // return dateString;
}

function tConvert(time) {
  const date = new Date(time);

  let ftime = date.toLocaleTimeString();
  const strTime = `${
    ftime.length === 10 ? ftime.slice(0, 4) : ftime.slice(0, 5)
  } ${ftime.length === 10 ? ftime.slice(8, 10) : ftime.slice(9, 11)}   `;

  return strTime;
}

// function mtConvert(time) {
//   const date = new Date(time);
//   let ftime = date.toLocaleTimeString();
//   const strTime = `${
//     ftime.length === 10 ? ftime.slice(0, 4) : ftime.slice(0, 5)
//   } ${ftime.length === 10 ? ftime.slice(8, 10) : ftime.slice(9, 11)}   `;

//   return strTime;
// }

function mtConvert(time) {
  const date = new Date(time);

  let ftime = date.toLocaleTimeString();
  const strTime = `${
    ftime.length === 10 ? ftime.slice(0, 4) : ftime.slice(0, 5)
  } ${ftime.length === 10 ? ftime.slice(8, 10) : ftime.slice(9, 11)}   `;

  return strTime;
}

const displayDate = date => {
  // alert(date);
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

function mdConvert(date) {
  let d = new Date();
  let e = new Date(date);
  if (d.getDate() === e.getDate()) {
    return 'Today';
  } else if (d.getDate() - 1 === e.getDate()) {
    return 'Yesterday';
  } else {
    // return e.getDate() + '/' + e.getMonth() + '/' + e.getFullYear();
    return e.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
}

const getJwtToken = async () => {
  console.log('-------getJwtToken called------');
  const token = await getData('@token');
  try {
    const response = await fetch(`${REACT_APP_SERVER_URL}/vonage/jwt`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const {jwt} = await response.json();
    console.log(jwt);
    return jwt;
  } catch (err) {
    console.log('------Error in jwt-------');
    console.log(err);
  }
};

function groupBy(array, groupingKeyFn) {
  return array?.reduce((result, item) => {
    const groupingKey = groupingKeyFn(item);
    if (!result[groupingKey]) {
      result[groupingKey] = [];
    }
    result[groupingKey].push(item);
    return result;
  }, {});
}

const convertToE164 = num => {
  //TODO: Properly convert to E164
  if (num?.includes('+') || num?.includes('')) {
    return num?.replaceAll('+', '');
  } else {
    return num;
  }
};

const convertFormattedToe164 = number => {
  let e164 = convertToE164(number);

  e164 = e164.replace(/ +/g, '');
  return e164;
};

export {
  storeData,
  getData,
  ConvertFromSeconds,
  dConvert,
  tConvert,
  displayDate,
  getJwtToken,
  removeData,
  mdConvert,
  mtConvert,
  groupBy,
  convertToE164,
  convertFormattedToe164,
};
