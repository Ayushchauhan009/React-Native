import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from "./Navbar";
import HomeScreen from "./HomeScreen";

const Homepage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeScreenContainer}>
        <HomeScreen />
      </View>
      <NavBar />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeScreenContainer: {
    flex: 1,
  },
});

