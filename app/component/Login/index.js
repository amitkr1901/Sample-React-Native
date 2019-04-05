import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import styles from "./styles";

class Login extends Component {
  state = { username: "", password: "" };
  static navigationOptions = { header: null };
  checkLogin() {
    const { username, password } = this.state;
    // if (username == "admin" && password == "admin") {
    this.props.navigation.navigate("AppDrawerNavigator");
    // } else {
    //   Alert.alert("Error", "Incorrect Username/Password", [
    //     {
    //       text: "Okay"
    //     }
    //   ]);
    // }
  }
  render() {
    const {
      MainContainer,
      ForogtLogo,
      TextInputStyleClass,
      button,
      text1,
      text2
    } = styles;

    return (
      <View style={{ backgroundColor: "#3F9DD9", height: "100%" }}>
        <Image
          source={require("../../assets/logo_mv_login_and.png")}
          resizeMode="contain"
          style={MainContainer}
        />

        <TextInput
          placeholder="Username"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ username: text })}
          style={TextInputStyleClass}
        />

        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ password: text })}
          style={TextInputStyleClass}
        />

        <TouchableOpacity onPress={_ => this.checkLogin()}>
          <Text style={button}>Login</Text>
        </TouchableOpacity>

        <Text style={text1}>Forgot Username{"\n"}or Password?</Text>

        <Image
          source={require("../../assets/forgot.png")}
          style={ForogtLogo}
          resizeMode="contain"
        />

        <Text style={text2}>Need to Create an Account?</Text>
      </View>
    );
  }
}

export default Login;
