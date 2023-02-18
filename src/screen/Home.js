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
import { useTheme, Text } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [masterDataSource, setMasterDataSource] = useState(Products);

  const { updateTheme, theme } = useTheme();

  const toggleTheme = () => {
    updateTheme((theme) => ({
      mode: theme.mode === "light" ? "dark" : "light",
    }));
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setMasterDataSource(newData);
      setSearch(text);
    } else {
      setMasterDataSource(Products);
      setSearch(text);
    }
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
        h4Style={{
          color: theme.mode && theme?.colors?.warning,
        }}
        style={styles.subtitle}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const Categories = ({ Data }) => {
    return (
      <FlatList
        style={{ marginBottom: 15 }}
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
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
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
        data={masterDataSource}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.title}>{item.title}</Text>
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
    marginHorizontal: 5,
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
    borderRadius: 15,
    // borderBottomRightRadius: 30,
    // borderTopLeftRadius: 30,
  },
  textInputStyle: {
    height: 40,
    width: 240,
    borderWidth: 1,
    paddingLeft: 20,
    // margin: 5,
    borderColor: "red",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
});
