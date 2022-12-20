import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './FetchAAStyles';
const FetchAA = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  return (
    <View style={styles.FetchAA}>
      <View style={styles.content}>
        <Text style={styles.headerText}>fetching your AA{'\n'}accounts</Text>
        <Text style={styles.bodyText}>
          hang on, while we fetch your{'\n'}data
        </Text>

        {/* <TextInput
          style={styles.input}
          onChangeText={setMobileNumber}
          value={mobileNumber}
          placeholder="1234"
          placeholderTextColor="#333"
          keyboardType="numeric"
          autoFocus={true}
        /> */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Name');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FetchAA;
