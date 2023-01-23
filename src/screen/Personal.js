import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const Personal = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={require("../img/3.jpg")} style={styles.img} />
          <View style={styles.info}>
            <Text
              onPress={() =>
                Linking.openURL(
                  "https://api.whatsapp.com/send?phone=201097890457"
                )
              }
            >
              <Image
                style={styles.icon}
                source={require("../img/icons/whatsapp.png")}
              />
            </Text>

            <Text onPress={() => Linking.openURL("https://t.me/hazemMoo")}>
              <Image
                style={styles.icon}
                source={require("../img/icons/telegram.png")}
              />
            </Text>
            <Text
              onPress={() => Linking.openURL("mailto:hazemmo.7077@gmail.com")}
            >
              <Icon
                name="mail"
                color={"#555"}
                size={40}
                style={{ marginTop: 20 }}
              />
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Personal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // direction: "rtl",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  info: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    paddingBottom: 45,
  },
  icon: {
    width: 50,
    height: 50,
  },
});
