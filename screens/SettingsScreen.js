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

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.description}>Change E-mail Address</Text>
        <Text style={styles.description}>Change Password</Text>
        <Text style={styles.description}>Security Questions</Text>
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