import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Header } from "../../Header";

class PendingScreen extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <Header title="Pending" navigation={this.props.navigation} />
        <View
          style={{ flex: 12, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Pending Screen</Text>
        </View>
      </View>
    );
  }
}

export default PendingScreen;
