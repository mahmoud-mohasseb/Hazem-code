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
              backgroundColor: "#DC0000",
              borderRadius: 30,
              padding: 10,
            }}
            titleStyle={{
              fontWeight: "bold",
              fontSize: 40,
              fontFamily: "Arsalan-font",
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
    position: "absolute",
    color: "black",
    fontWeight: "bold",
    fontSize: 70,
    textAlign: "center",
    marginTop: 200,
  },
  title2: {
    color: "#00092C",
    fontWeight: "bold",
    fontFamily: "Arsalan-font",
    position: "absolute",
    fontSize: 100,
    textAlign: "center",
    marginTop: 300,
  },
});
