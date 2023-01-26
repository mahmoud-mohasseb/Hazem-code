import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Products from "../data/Products.js";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const windowHeight = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  const [allProducts, setAllProducts] = useState(Products);

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
      <Text style={styles.subtitle}>{item.title}</Text>
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
    <SafeAreaView style={styles.container}>
      <View>
        <Ionicons
          style={{ left: 30 }}
          name="chevron-back-circle"
          size={40}
          color="red"
          onPress={() => navigation.navigate("Cover")}
        />

        <FlatList
          data={allProducts}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Categories Data={item.data} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // direction: "rtl",
  },
  item: {
    marginHorizontal: 4,
  },
  title: {
    fontFamily: "Arsalan-font",
    fontSize: 50,
    color: "#DC0000",
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
});
