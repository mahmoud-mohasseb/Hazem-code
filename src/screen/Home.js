import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import EgypttionFood from "../content/EgypttionFood";
import KsaFood from "../content/KsaFood";
import SyrFood from "../content/SyrFood";
// import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={css.container}>
      <View style={{ marginTop: 55, left: 30 }}>
        <Ionicons
          name="chevron-back-circle"
          size={40}
          color="red"
          onPress={() => navigation.navigate("Cover")}
        />
      </View>
      <EgypttionFood navigation={navigation} />
      <KsaFood navigation={navigation} />
      <SyrFood navigation={navigation} />
    </ScrollView>
  );
};

export default Home;

const css = StyleSheet.create({
  container: {
    // flex: 1,
    // direction: "rtl",
  },
});
