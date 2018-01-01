import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.description}>First name:</Text>
        <Text style={styles.description}>Last name:</Text>
        <Text style={styles.description}>Country:</Text>
        <Text style={styles.description}>Date of birth:</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  description: {
    fontSize: 20
  },
});