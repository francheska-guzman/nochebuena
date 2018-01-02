import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      placeholder: "Write here...",
      value: null
    };
  }

  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.description}>First name: </Text> 
        <TextInput style={styles.input}
        onChangeText={(text) => this.setState({text})}
        placeholder={this.state.placeholder}
        value={this.state.text}
        />
        <Text style={styles.description}>Last name: </Text>
        <Text style={styles.description}>Country: </Text>
        <Text style={styles.description}>Date of birth: </Text>
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
  input: {
    fontSize: 20
  },
});