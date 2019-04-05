import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import PropTypes from "prop-types";
import Row from "./Row";
import {
  ScrollView,
  Text,
  View,
  ListView,
  Image,
  ImageBackground,
  StyleSheet
} from "react-native";
import { DrawerActions } from "react-navigation";

const inboxIcon = require("../../assets/icn_inbox.png");
const pendingIcon = require("../../assets/icn_pending.png");

var data = [
  { title: "Inbox", image: inboxIcon },
  { title: "Pending", image: pendingIcon }
];

class DrawerScreen extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  navigateToOtherScreen() {
    // const navigateAction = NavigationActions.navigate({
    //   routeName: route
    // });
    // this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.dispatch(DrawerActions.closeDrawer());
    console.log("hi i am daf");
    alert("hi");
  }

  constructor(props) {
    super(props);
    this.navigateToOtherScreen = this.navigateToOtherScreen.bind(this);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(data)
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#2b3944",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={require("../../assets/mvelopes_logo.png")}
              style={{
                width: 220,
                height: 40
              }}
            />
          </View>
          <ImageBackground
            source={require("../../assets/left_nav_bg.png")}
            style={{ flex: 12, width: 300 }}
          >
            <ListView
              style={{ flex: 1 }} //Don't forget this too
              dataSource={this.state.dataSource}
              renderRow={data => (
                <Row navigation={this.navigateToOtherScreen} {...data} />
              )}
            />
            {/* <View style={styles.screenContainer}>
              <View style={styles.screenStyle}>
                <Text
                  style={styles.screenStyle}
                  onPress={this.navigateToScreen("Inbox")}
                >
                  Inbox
                </Text>
              </View>
              <View style={styles.screenStyle}>
                <Text
                  style={styles.screenStyle}
                  onPress={this.navigateToScreen("Pending")}
                >
                  Pending
                </Text>
              </View> */}
            {/* </View> */}
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  headerContainer: {},
  headerText: {
    color: "#fff8f8"
  },
  screenContainer: {
    paddingTop: 20
  },
  screenStyle: {
    height: 30,
    marginTop: 2,
    marginLeft: 10,
    color: "#ffffff",
    marginLeft: 17,
    fontSize: 18
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20
  }
});

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
