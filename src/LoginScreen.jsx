import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome back!!!!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Compare')}>
          <Text style={styles.buttonText}>Log in NOW!!!😡</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFAB8',
  },
  box: {
    width: '80%',
    height: '40%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
