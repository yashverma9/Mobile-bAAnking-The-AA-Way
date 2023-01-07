import {Dimensions, Platform, PixelRatio} from 'react-native';
import {useWindowDimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
// console.log(width, height);

const baseWtdth = 390;
const baseHeight = 763;

const getScaledDimension = (dimension, type) => {
  let ratio = 1;
  switch (type) {
    case 'height':
      ratio = height / baseHeight;
      break;
    case 'width':
      ratio = width / baseWtdth;
      break;
    case 'font':
      ratio = width / baseWtdth;
      break;
  }
  // console.log({ratio});
  // console.log(dimension,ratio * dimension);
  return ratio * dimension;
};

export {getScaledDimension};
