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

const KsaScreen = ({ navigation }) => {
  let { foods } = useSelector((state) => state.syr);
  let total = foods.map(({ id, title, src, price, discription }) => {
    return (
      <TouchableOpacity
        key={id}
        style={styles.card}
        onPress={() =>
          navigation.navigate("Foods", {
            src,
            title,
            price,
            id,
            discription,
          })
        }
      >
        <Image source={src} style={styles.img} />
        <View style={styles.cardBody}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>{price}</Text>
        </View>
      </TouchableOpacity>
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{total}</ScrollView>
    </SafeAreaView>
  );
};

export default KsaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // direction: 'rtl',
    justifyContent: "space-evenly",
  },
  card: {
    height: 200,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#f00",
  },
  img: {
    width: "50%",
    height: "100%",
  },
  cardBody: {
    height: 200,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "50%",
  },
  title: {
    fontSize: 19,
    fontWeight: "500",
    color: "#f00",
  },
});
