import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

const windowHeight = Dimensions.get("window").height;

const Cover = ({ navigation }) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
      source={require("../img/1.jpg")}
      blurRadius={8}
    >
      <View style={styles.contaier}>
        <Text style={styles.title}> استمتع معنا </Text>
        <Text style={styles.title2}> باحلا الاكلات </Text>
        <View style={styles.container2}>
          <Button
            title="اذهب للمطعم"
            onPress={() => navigation.navigate("Footer")}
            size="lg"
            buttonStyle={{
              fontFamily: "Arsalan-font",
              backgroundColor: "#DC0000",
              borderRadius: 30,
              padding: 10,
            }}
            titleStyle={{
              fontFamily: "Arsalan-font",
              // fontWeight: "bold",
              fontSize: 40,
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Cover;

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    alignItems: "center",
  },
  container2: {
    marginTop: windowHeight === 926 ? windowHeight / 1.3 : windowHeight / 1.2,
  },
  title: {
    fontFamily: "Arsalan-font",
    fontFamily: "Arsalan-font",
    position: "absolute",
    color: "black",
    fontSize: 70,
    textAlign: "center",
    marginTop: 200,
  },
  title2: {
    fontFamily: "Arsalan-font",
    color: "#00092C",
    position: "absolute",
    fontSize: 100,
    textAlign: "center",
    marginTop: 300,
  },
});
