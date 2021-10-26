import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import BgColorButton from "./../../../components/button/bgcolorbtn";
import Heartstring from "./../../../../assets/images/Heartstring.svg";
export default function Login(props) {
  const [password, setPassword] = React.useState("");
  const [userName, setUseName] = React.useState("");

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="black"
        translucent={false}
      />
      <View style={styles._main}>
        <View style={styles._logo}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles._back}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <View>
            <Heartstring width={150} height={41} fill={"#000"} />
          </View>
          <View style={styles._back}></View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles._heading}>Got an account? </Text>
          {Platform.OS === "ios" ? (
            <Text style={styles._sub_headingios}>Log in here</Text>
          ) : (
            <Text style={styles._sub_heading}>Log in here</Text>
          )}

          <View style={styles._input_main}>
            <FontAwesome name="user-circle" size={24} color="white" />
            <TextInput
              placeholder="username"
              value={userName}
              onChangeText={(userName) => setUseName(userName)}
              style={styles._input}
              underlineColor="white"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles._input_main}>
            <AntDesign name="Safety" size={24} color="white" />
            <TextInput
              placeholder="password"
              value={password}
              onChangeText={(password) => setPassword(password)}
              style={styles._input}
              underlineColor="white"
              placeholderTextColor="white"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("ForgotPassword")}
          >
            <Text style={styles._forgot_btn_text}>forgot password?</Text>
          </TouchableOpacity>
           <BgColorButton
            buttonValue="continue"
            path={() => props.navigation.navigate("Splash")}
            buttonWidth={270}
            marginTop={150}
          />

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Register")}
          >
            <Text style={styles._login_button_txt}>sign up</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
