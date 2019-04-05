import React, { Component } from "react";
import { View, Text } from "react-native";

class Sidebar extends Component {
  render() {
    return (
      <View>
        <Text>Inbox</Text>
        <Text>Pending</Text>
      </View>
    );
  }
}

export default Sidebar;
