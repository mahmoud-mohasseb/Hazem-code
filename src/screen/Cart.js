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
import { Ionicons, AntDesign } from "@expo/vector-icons";

// redux
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";

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
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleRemoveFromCart(item) {
    dispatch(cartActions.removeFromCart(item));
  }

  return (
    <SafeAreaView>
      <View>
        {cart.length === 0 ? (
          <EmptyBasket onPress={() => navigation.navigate("Home")} />
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                position: "absolute",
                zIndex: 1,
                marginTop: 20,
                left: 20,
              }}
            >
              <Ionicons name="chevron-back-circle" size={40} color="red" />
            </TouchableOpacity>
            <FlatList
              style={{ height: windowHeight / 1.2, marginTop: 70 }}
              data={cart}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: "black",
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      handleRemoveFromCart({
                        id: item.id,
                      })
                    }
                    style={{
                      position: "absolute",
                      zIndex: 1,
                      marginTop: 10,
                      right: 20,
                    }}
                  >
                    <AntDesign name="closecircleo" size={24} color="white" />
                  </TouchableOpacity>
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
