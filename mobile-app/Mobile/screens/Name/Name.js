import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './NameStyles';
const Name = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  return (
    <View style={styles.Otp}>
      <View style={styles.content}>
        <Text style={styles.headerText}>tell us your first {'\n'}name</Text>
        <Text style={styles.bodyText}>
          to apply , we need your mobile number{'\n'}linked to your credit cards
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setMobileNumber}
          value={mobileNumber}
          placeholder="name"
          placeholderTextColor="#333"
          //keyboardType="numeric"
          autoFocus={true}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FetchAA');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Name;
