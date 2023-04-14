import { useFocusEffect } from "@react-navigation/native";
import  { useRef } from "react";
import { Animated, Platform } from "react-native";

export const useFade = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: Platform.OS === "web" ? false : true,
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: Platform.OS === "web" ? false : true,
      }).start();
    };
  });

  return fadeAnim;
};
