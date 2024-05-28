import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const Loading = ({ color }) => {
  const heightValues = [useRef(new Animated.Value(2)).current, useRef(new Animated.Value(2)).current, useRef(new Animated.Value(2)).current, useRef(new Animated.Value(2)).current];

  useEffect(() => {
    const animations = heightValues.map((value, index) =>
      Animated.sequence([
        Animated.delay(index * 150),
        Animated.timing(value, {
          toValue: 100,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(value, {
          toValue: 2,
          duration: 500,
          useNativeDriver: false,
        }),
      ])
    );

    Animated.loop(
      Animated.stagger(150, animations)
    ).start();
  }, [heightValues]);

  return (
    <View style={styles.container} accessibilityRole='progressbar'>
      {heightValues.map((heightValue, index) => (
        <Animated.View
          key={index}
          style={[
            styles.background,
            { borderColor: color, height: heightValue },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  background: {
    backgroundColor: "#ffffff",
    width: 40,
    marginHorizontal: 3,
    borderWidth: 4,
  },
});

export default Loading;
