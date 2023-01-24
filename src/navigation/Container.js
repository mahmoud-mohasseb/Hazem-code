import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Cover from "../content/cover";
// import Logo from "../content/Logo";
import Cart from "../screen/Cart";
import EgyScreen from "../screen/EgyScreen";
import Foods from "../screen/Foods";
import Home from "../screen/Home";
import KsaScreen from "../screen/KsaScreen";
import Personal from "../screen/Personal";
import Prudact from "../screen/Prudact";
import SyrScreen from "../screen/SyrScreen";
import Footer from "./Footer";

import { color } from "@rneui/base";

const Stack = createNativeStackNavigator();
const Container = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Cover"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Cover"
            component={Cover}
            options={{
              headerShown: false,
              // headerTitle: (props) => <Logo {...props} />,
            }}
          />

          <Stack.Screen
            name="Footer"
            component={Footer}
            // component={Footer}
            options={{ title: "Home" }}
          />

          <Stack.Screen
            name="Foods"
            component={Foods}
            options={{
              title: " مدينا اجلا الاكلات الشرقيه ",
              headerTintColor: "#f00",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />

          <Stack.Screen
            name="Egy"
            component={EgyScreen}
            options={{
              title: " احلا الاكلات المصرية ",
              headerTintColor: "#f00",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="Ksa"
            component={KsaScreen}
            options={{
              title: " احلا الاكلات الخليجية ",
              headerTintColor: "#f00",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="Sra"
            component={SyrScreen}
            options={{
              title: " اجلا الحلويات السورية ",
              headerTintColor: "#f00",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            // options={{
            //   title: " اجلا الحلويات السورية ",
            //   headerTintColor: "#f00",
            //   headerTitleStyle: {
            //     fontSize: 20,
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Container;