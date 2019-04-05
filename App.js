import React, { Component } from "react";
import Login from "./app/component/Login";
import Inbox from "./app/component/Inbox";
import WelcomeScreen from "./app/component/Welcome";
import Sidebar from "./app/component/Sidebar";
import AppDrawerNavigator from "./app/component/AppDrawerNavigator";
import {
  createStackNavigator,
  StackNavigator,
  createAppContainer,
  DrawerNavigator
} from "react-navigation";

class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

// const AppNavigator = new StackNavigator(
//   {
//     WelcomeScreen: { screen: WelcomeScreen },
//     Login: { screen: Login }
//   }

const AppNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  Login: {
    screen: Login
  },
  AppDrawerNavigator: {
    screen: AppDrawerNavigator
  }
});

// const AppStack = DrawerNavigator(
//   {
//     login: { screen: Login },
//     inbox: { screen: Inbox }
//   },
//   {
//     contentComponent: Sidebar
//   }
// );
// export default App;
//
export default createAppContainer(AppNavigator);

// export const AppStack = createStackNavigator(
//   {
//     login: {
//       screen: Login,
//       navigationOptions: {
//         header: null,
//         gesturesEnabled: false
//       }
//     },

//     Drawer: {
//       screen: Sidebar,
//       navigationOptions: {
//         header: null,
//         gesturesEnabled: false
//       }
//     }
//   },
//   { headerMode: "none" }
// );
