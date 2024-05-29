import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (

      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false, // Hide tab labels
          headerShown: false, // Hide the top bar
          tabBarStyle: styles.tabBar, // Custom styles for the tab bar
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={Screen1}

          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={require('../assets/searchNav.png')} // Adjust the path to your custom icon
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'blue' : 'white', // Change tintColor based on focused state
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Screen2"
          component={Screen2}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={require('../assets/icon2.png')} // Adjust the path to your custom icon
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'blue' : 'white', // Change tintColor based on focused state
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Screen3"
          component={Screen3}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={require('../assets/icon3.png')} // Adjust the path to your custom icon
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'blue' : 'white', // Change tintColor based on focused state
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Screen4"
          component={Screen4}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={require('../assets/icon4.png')} // Adjust the path to your custom icon
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'blue' : 'white', // Change tintColor based on focused state
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>

  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#111111',
    height: 70,
    borderTopWidth: 2, // Adjust the border width as needed
    borderTopColor: '#fff', // Adjust the border color as needed
  },
});

export default NavBar;
