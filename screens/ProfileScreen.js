import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>First Name:</Text>
        <Text>Last Name:</Text>
        <Text>Date of Birth:</Text>
        <Text>Country:</Text>
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
});