import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Icon, Text } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";

const Foods = ({ route, navigation }) => {
  let { id, price, title, src, description } = route.params;

  return (
    <SafeAreaView>
      <View
        style={{ position: "absolute", zIndex: 1, marginTop: 70, left: 20 }}
      >
        <Ionicons
          name="chevron-back-circle"
          size={40}
          color="red"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Image source={src} style={styles.img} />
          <Text h3 style={styles.title}>
            {title}
          </Text>
          <Text h4>طريقه تحظيره </Text>
          <Text h5 style={styles.discription}>
            {description}
          </Text>
          <Text h4 style={styles.price}>
            {price}: جينه{" "}
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate("Cart", {
                src: src,
                title: title,
                price: price,
              })
            }
          >
            <Icon name="shopping-cart" size={25} color="#fff" />
            <Text h5 style={styles.textBtn}>
              {" "}
              اضف الي السله{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Foods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // direction: "rtl",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 420,
    borderBottomLeftRadius: 80,
    borderTopRightRadius: 80,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: "#f00",
    marginBottom: 20,
    fontSize: 50,
    fontFamily: "Arsalan-font",
  },
  discription: {
    marginBottom: 20,
    marginTop: 20,
  },
  price: {
    color: "#f00",
    marginBottom: 25,
  },
  btn: {
    width: 150,
    backgroundColor: "#f00",
    padding: 20,
    marginBottom: 20,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 25,
  },
  textBtn: {
    color: "#fff",
  },
});
