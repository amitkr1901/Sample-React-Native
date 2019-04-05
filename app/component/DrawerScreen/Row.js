import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

navigateToScreen = route => () => {
  const navigateAction = NavigationActions.navigate({
    routeName: route
  });
  alert("hi i");
  this.props.navigation.dispatch(navigateAction);
  this.props.navigation.dispatch(DrawerActions.closeDrawer());
};
const Row = props => (
  <View>
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigation;
        console.log(props);
      }}
    >
      <Image style={styles.image} source={props.image} />
      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
    <View style={styles.separator} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50
  },
  separator: {
    height: 0.4,
    backgroundColor: "#ffffff"
  },
  image: {
    marginLeft: 17,
    marginTop: 10,
    height: 30,
    width: 30
  },
  textStyle: {
    height: 30,
    marginLeft: 5,
    marginTop: 10,
    color: "#ffffff",
    marginLeft: 17,
    fontSize: 18
  }
});
export default Row;
