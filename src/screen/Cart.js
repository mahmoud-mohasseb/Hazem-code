import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

// android and ios Screen measuring heights
const windowHeight = Dimensions.get("window").height;

const EmptyBasket = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={{ marginTop: 55, left: 30 }} onPress={onPress}>
      <Ionicons name="chevron-back-circle" size={40} color="red" />
    </TouchableOpacity>
    <Text
      style={{
        top: 20,
        fontSize: 40,
        textAlign: "center",
      }}
    >
      Basket Empty {""}
      back to shopping
    </Text>
  </View>
);

const UnEmptyBasket = ({ title, src, price, onPress }) => {
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={onPress}
        style={{ position: "absolute", zIndex: 1, marginTop: 70, left: 20 }}
      >
        <Ionicons name="chevron-back-circle" size={40} color="red" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <Image source={src} style={styles.img} />
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>{price}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Cart = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {route.params?.title === undefined ? (
          <EmptyBasket onPress={() => navigation.navigate("Home")} />
        ) : (
          <UnEmptyBasket
            onPress={() => navigation.navigate("Home")}
            title={route.params?.title}
            src={route.params?.src}
            price={route.params?.price}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    height: windowHeight / 1.2,
    // flex: 3,
    // direction: "rtl",
  },
  img: {
    width: "50%",
    height: 200,
    borderRadius: 15,
  },
  card: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    color: "#f00",
    fontSize: 20,
    fontWeight: "700",
  },
});
