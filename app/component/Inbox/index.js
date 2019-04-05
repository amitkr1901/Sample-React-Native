import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Header } from "../../Header";

class Inbox extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.Container}>
        <Header title="Inbox" navigation={this.props.navigation} />
        <View
          style={{ flex: 12, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Transaction Screen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  header: {
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: "#3f99d9"
  }
});

export default Inbox;
