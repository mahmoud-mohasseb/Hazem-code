import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
} from "react-native";
import Products from "../data/Products.js";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, Button, Text } from "@rneui/themed";

import { Entypo } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  const [allProducts, setAllProducts] = useState(Products);

  const { updateTheme, theme } = useTheme();

  // toogle dark mode react native elements
  const toggleTheme = () => {
    updateTheme((theme) => ({
      mode: theme.mode === "light" ? "dark" : "light",
    }));
  };

  const Item = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate("Foods", {
          src: item.src,
          title: item.title,
          price: item.price,
          id: item.id,
          description: item.description,
        })
      }
    >
      <Image source={item.src} style={styles.img} />

      <Text
        h4
        h4Style={{ color: theme?.colors?.warning }}
        style={styles.subtitle}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const Categories = ({ Data }) => {
    return (
      <FlatList
        style={{ marginBottom: 30 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  };

  return (
    <SafeAreaView
      // style={styles.container}
      style={{ backgroundColor: theme.colors.background }}
      // backgroundColor={theme.mode === "light" ? "black" : "white"}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Cover")}>
          <Ionicons
            style={{ left: 30 }}
            name="chevron-back-circle"
            size={40}
            color="red"
          />
        </TouchableOpacity>
        {/*  */}
        <Entypo
          style={{ right: 50 }}
          name="light-down"
          size={40}
          // style={{ backgroundColor: theme.colors.background }}
          color={theme.mode === "light" ? "black" : "red"}
          onPress={toggleTheme}
        />
      </View>

      <FlatList
        data={allProducts}
        renderItem={({ item }) => (
          <View>
            <Text
              h1
              h1Style={{ color: theme?.colors?.warning }}
              style={styles.title}
            >
              {item.title}
            </Text>
            <Categories Data={item.data} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // top: 30,
    // backgroundColor: "transparent",
  },
  item: {
    marginHorizontal: 4,
  },
  title: {
    fontFamily: "Arsalan-font",
    fontSize: 50,
    // color: "#DC0000",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
  },
  img: {
    width: 150,
    height: 200,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  input: {
    width: 250,
    left: 50,
    height: 44,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#e8e8e8",
  },
});
