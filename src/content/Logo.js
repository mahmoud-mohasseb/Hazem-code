import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../img/2.jpeg")} style={styles.img} />
      <Text style={styles.title}>Logo</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    direction: "rtl",
  },
  img: {
    width: 70,
    height: 70,
    marginEnd: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#f00",
  },
});
