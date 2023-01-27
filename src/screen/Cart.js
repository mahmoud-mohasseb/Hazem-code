import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

// redux
import { useSelector } from "react-redux";

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
      Basket Empty
      {""} back to shopping {""}
    </Text>
  </View>
);

const Cart = ({ route, navigation }) => {
  const cart = useSelector((state) => state.cart);

  // function handleRemoveFromCart(item) {
  //   dispatch(removeFromCart(item));
  // }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {cart.length === 0 ? (
          <EmptyBasket onPress={() => navigation.navigate("Home")} />
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                position: "absolute",
                zIndex: 1,
                marginTop: 70,
                left: 20,
              }}
            >
              <Ionicons name="chevron-back-circle" size={40} color="red" />
            </TouchableOpacity>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <Image source={item.src} style={styles.img} />
                  <View style={styles.card}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.title}>{item.price}</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
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
