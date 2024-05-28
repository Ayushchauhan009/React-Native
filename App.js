import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Loading, NavBar, DetailScreen } from './components'; // Ensure these are correctly imported
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={NavBar} />
            <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Details' }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoadingScreen = () => (
  <View style={styles.container}>
    <Loading color="#fff" />
  </View>
);

const LoginScreen = ({ navigation }) => (
  <View style={styles.loginContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.skipButton}>Skip</Text>
    </TouchableOpacity>
    <View style={styles.imageCon}>
      <Image source={require('./assets/signIn.png')} style={styles.image} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={loginWithMobile}>
          <Text style={styles.buttonText}>Sign in with Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={signInWithApple}>
          <Image source={require('./assets/appleIcon.png')} style={styles.imageIcon} />
          <Text style={styles.buttonText2}>Sign in with Apple ID</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Don’t have an account?
          <Text style={styles.signInText}> Sign in</Text>
        </Text>
        <Text style={styles.termsText}>
          By creating an account, or signing in, you are agreeing to our{' '}
          <Text style={styles.privacyText}>Terms of Service</Text> and{' '}
          <Text style={styles.privacyText}>Privacy Policy.</Text>
        </Text>
      </View>
    </View>
  </View>
);



const loginWithMobile = () => {
  // Implement your login with mobile number functionality
};

const signInWithApple = () => {
  // Implement your sign in with Apple ID functionality
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  loginContainer: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  skipButton: {
    marginTop: 50,
    color: '#007BFF',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  imageCon: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    marginTop: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 150,
  },
  button1: {
    backgroundColor: '#00172A',
    padding: 16,
    borderRadius: 0,
    marginBottom: 10,
  },
  button2: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#00172A',
    borderRadius: 0,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#00172A',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
  signInText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingLeft: 20,
  },
  termsText: {
    marginTop: 40,
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
  },
  privacyText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default App;
