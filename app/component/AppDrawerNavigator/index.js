import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions
} from "react-native";
import { Header } from "../../Header";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import Inbox from "../Inbox";
import PendingScreen from "../pending";
import DrawerScreen from "../DrawerScreen";

const AppDrawerNavigator = createDrawerNavigator(
  {
    Inbox: { screen: Inbox },
    Pending: { screen: PendingScreen }
  },
  {
    intialRouteName: "Inbox",
    contentComponent: DrawerScreen,
    drawerWidth: 300,
    navigationOptions: {
      header: null
      //   headerStyle: {
      //     backgroundColor: "#f4511e"
      //   },
      //   headerTintColor: "#fff",
      //   headerTitleStyle: {
      //     color: "white"
      //   }
    }
  }
);

export default AppDrawerNavigator;
