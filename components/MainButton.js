import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, Button, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/Colors";

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;

  if (Platform === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={StyleSheet.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans"
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden"
  }
});

export default MainButton;
