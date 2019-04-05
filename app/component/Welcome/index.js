import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Header } from "../../Header";

class WelcomeScreen extends Component {
  // static navigationOptions = {
  //   title: "Inbox",
  //   headerStyle: {
  //     backgroundColor: "#03A9F4"
  //   },
  //   headerTintColor: "#fff",
  //   headerTitleStyle: {
  //     fontWeight: "bold"
  //   }
  // };

  navigateLoginScreen() {
    this.props.navigation.navigate("Login");
  }
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={{ backgroundColor: "#3F9DD9", height: "100%" }}>
        <Text
          style={{
            textAlign: "center",
            color: "#ffffff",
            marginTop: 70,
            fontSize: 30
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: 30,
            fontWeight: "bold"
          }}
        >
          Sample Demo
        </Text>
        <TouchableOpacity
          style={{
            flex: 12,
            textAlign: "center",
            color: "#ffffff",
            marginTop: 270
          }}
          onPress={_ => this.navigateLoginScreen()}
        >
          <Text style={{ fontSize: 20, color: "#ffffff", textAlign: "center" }}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WelcomeScreen;
