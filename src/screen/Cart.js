import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
// themeing
import { Text, useTheme, Card, Image } from "@rneui/themed";
// redux
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";

// android and ios Screen measuring heights
const windowHeight = Dimensions.get("window").height;

const EmptyBasket = ({ onPress }) => (
  <View>
    <TouchableOpacity style={{ marginTop: 55, left: 30 }} onPress={onPress}>
      <Ionicons name="chevron-back-circle" size={40} color="red" />
    </TouchableOpacity>

    <Text
      style={{
        // top: 20,
        fontSize: 40,
        // color: "red",
        textAlign: "center",
      }}
    >
      Basket Empty
      {""} back to shopping {""}
    </Text>
  </View>
);

const Cart = ({ route, navigation }) => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleRemoveFromCart(item) {
    dispatch(cartActions.removeFromCart(item));
  }

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.background, height: windowHeight }}
    >
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
              data={cart}
              renderItem={({ item }) => (
                <Card containerStyle={{ borderRadius: 40 }}>
                  <Image source={item.src} style={styles.img} />
                  <Card.Divider />
                  <View style={styles.card}>
                    <Card.Title style={{ fontSize: 20 }}>
                      {item.title}
                    </Card.Title>
                    <Text h5 style={styles.title}>
                      {item.price}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        handleRemoveFromCart({
                          id: item.id,
                        })
                      }
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        right: 20,
                      }}
                    >
                      <AntDesign
                        name="delete"
                        size={20}
                        color={theme.mode === "light" ? "black" : "red"}
                      />
                    </TouchableOpacity>
                  </View>
                </Card>
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
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  card: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    color: "#f00",
    fontSize: 20,
    fontWeight: "700",
  },
});
