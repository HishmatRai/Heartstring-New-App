import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "./styles";
import BgColorButton from "./../../../components/button/bgcolorbtn";
import Heartstring from "./../../../../assets/images/Heartstring.svg";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
export default function ForgotPassword(props) {
  const [email, setEmail] = React.useState("");

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
          <Text style={styles._heading}>No password?</Text>
          {Platform.OS === "ios" ? (
            <Text style={styles._sub_headingios}>Reset it here</Text>
          ) : (
            <Text style={styles._sub_heading}>Reset it here</Text>
          )}

          <View style={styles._input_main}>
            <MaterialIcons name="email" size={24} color="white" />
            <TextInput
              placeholder="email"
              value={email}
              onChangeText={(email) => setEmail(email)}
              style={styles._input}
              underlineColor="white"
              placeholderTextColor="white"
            />
          </View>
          <Text style={styles._message_des}>
            You’ll get an email in 60 seconds {"\n"}(check your spam folder too)
          </Text>
          <BgColorButton
            buttonValue="continue"
            path={() => props.navigation.navigate("Login")}
            buttonWidth={270}
            marginTop={250}
          />
        </ScrollView>
      </View>
    </View>
  );
}
