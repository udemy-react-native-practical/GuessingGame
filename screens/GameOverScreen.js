import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton";

const GameScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text>Game is Over!</Text>
        <View style={styles.imageContainer}>
          <Image
            fadeDuration={500}
            style={styles.image}
            source={require("../assets/original.png")}
            /*source={{
              uri:
                "https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg"
            }}*/
            resizeMode="cover"
          />
        </View>
        <Text>
          Number of rounds:{" "}
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.highlight}>
            {props.roundsNumber}
          </Text>
        </Text>
        <Text>
          Number was <Text style={styles.highlight}>{props.userNumber}</Text>{" "}
        </Text>
        <MainButton onPress={props.onRestart}>Restart</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: Dimensions.get("window").width * 0.7 / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20
  },
  highlight: {
    color: Colors.primary
  }
});

export default GameScreen;
