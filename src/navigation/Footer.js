import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Prudact from "../screen/Prudact";
import Cart from "../screen/Cart";
import Personal from "../screen/Personal";
import { Icon } from "@rneui/themed";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const Footer = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let myIcon;
          if (route.name === "Home") {
            myIcon = "home";
            color = focused ? "#f00" : "#999";
            size = focused ? 40 : 30;
          }
          if (route.name === "Prudact") {
            myIcon = "grid-on";
            color = focused ? "#f00" : "#999";
            size = focused ? 40 : 30;
          }
          if (route.name === "Cart") {
            myIcon = "shopping-cart";
            color = focused ? "#f00" : "#999";
            size = focused ? 40 : 30;
          }
          if (route.name === "Personal") {
            myIcon = "person";
            color = focused ? "#f00" : "#999";
            size = focused ? 40 : 30;
          }
          return (
            <Icon
              name={myIcon}
              color={color}
              size={size}
              style={{ margin: 2 }}
            />
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#D5CEA3",
          paddingBottom: 4,
          left: 60,
          right: 60,
          bottom: 40,
          borderRadius: 30,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: "" }} />
      <Tab.Screen name="Prudact" component={Prudact} options={{ title: "" }} />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "",
          tabBarBadge: cart.length !== 0 ? cart.length : 0,
        }}
      />
      <Tab.Screen
        name="Personal"
        component={Personal}
        options={{
          title: "Hazem",
          headerTintColor: "#f00",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 30,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Footer;
