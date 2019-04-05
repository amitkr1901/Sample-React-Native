import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Header = props => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#3f9dd9"
    }}
  >
    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
      <Image
        source={require("../assets/menu_icn.png")}
        resizeMode="contain"
        style={styles.logoLeft}
      />
    </TouchableOpacity>
    <Text style={styles.text1}>{props.title}</Text>

    <Image
      source={require("../assets/options_icn.png")}
      resizeMode="contain"
      style={styles.logoRight}
    />
  </View>
);

export default Header;
