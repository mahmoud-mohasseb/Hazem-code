import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const EgypttionFood = ({ navigation }) => {
  let { foods } = useSelector((state) => state.egy);

  const Egyption = () =>
    foods
      .filter(({ id }) => id <= 3)
      .map(({ id, src, title, price, description }) => {
        return (
          <TouchableOpacity
            key={id}
            style={styles.card}
            onPress={() =>
              navigation.navigate("Foods", {
                id,
                src,
                title,
                price,
                description,
              })
            }
          >
            <View style={styles.cardImg}>
              <Image source={src} style={styles.img} />
            </View>
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        );
      });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> اكلات مصريه </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Egyption />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EgypttionFood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 20,
  },
  header: {
    fontFamily: "Inter-Black-Bold",
    color: "#f00",
    fontWeight: "800",
    textAlign: "center",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    width: 150,
    height: 280,
    margin: 15,
    alignItems: "center",
  },
  cardImg: {
    width: "100%",
    height: "90%",
  },
  img: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    color: "#f00",
    fontSize: 30,
    fontWeight: "900",
    fontFamily: "Arsalan-font",
  },
});
