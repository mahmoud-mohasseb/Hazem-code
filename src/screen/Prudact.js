import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";

const Prudact = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}> اكلات مصريه </Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Egy")}
            >
              <ImageBackground
                style={styles.img}
                source={require("../img/egy/1.jpg")}
              />
            </TouchableOpacity>
          </View>
          {/*  start ksa  */}
          <View>
            <Text style={styles.title}> اكالات خليجية </Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Ksa")}
            >
              <ImageBackground
                style={styles.img}
                source={require("../img/ksa/1.jpg")}
              />
            </TouchableOpacity>
          </View>
          {/*  start food sria */}
          <View>
            <Text style={styles.title}> حلويات شرقية </Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Sra")}
            >
              <ImageBackground
                style={styles.img}
                source={require("../img/syr/1.jpg")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Prudact;

const styles = StyleSheet.create({
  container: {
    // direction: "rtl",
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#eee",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#f00",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  btn: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
