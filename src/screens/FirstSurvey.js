import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Logo from '../components/Logo';
export default class FirstSurvey extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/secondtest.jpg')}
        style={styles.backgroungImage}>
        <Logo />
        <Text style={styles.description}>HOW DOES THIS MAKE YOU FEEL ?</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>COMFORTABLE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2}>
          <Text>UNCOMFORTABLE</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroungImage: {
    width: '100%',
    height: '100%',
  },
  description: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 40,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 50,
    marginLeft: 60,
    backgroundColor: 'green',
  },
  buttonContainer2: {
    marginTop: 40,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 50,
    marginLeft: 60,
    backgroundColor: 'red',
  },
});
