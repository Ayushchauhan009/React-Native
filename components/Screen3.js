import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';


const Screen3 = () => {
  return (
    <View style={styles.container}>

         <Text>
         This is Screen 3.
         </Text>
        </View>
  );
};

styles = StyleSheet.create({

container: {
justifyContent: "center",
alignItems: "center",
width: "100%",
height: "100%",
padding: 40,
}

})

export default Screen3;
