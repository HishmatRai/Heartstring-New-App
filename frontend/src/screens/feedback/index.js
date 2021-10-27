import React from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "./styles";
import Heartstring from "./../../../assets/images/Heartstring.svg";
import BgColorButton from "./../../components/button/bgcolorbtn";
import { Ionicons } from "@expo/vector-icons";
export default function Feedback(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#000"
        translucent={true}
      />

      <View style={styles._header_main}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles._back}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles._heading}>Feedback</Text>
        <View style={styles._sun}></View>
      </View>

      <View style={{ paddingTop: 20, flex: 1 }}>
        <ScrollView style={{ backgroundColor: "#000" }}>
          <View style={styles._input_main}>
            <Text style={styles.title}>How can we {"\n"}improve our app?</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              numberOfLines={10}
              placeholderTextColor="white"
              style={{ color: "white", padding: 10, textAlignVertical: "top" }}
            />
          </View>
          <BgColorButton buttonValue="send" buttonWidth={150} marginTop={10} />
          <View style={{ marginBottom: 100 }}></View>
        </ScrollView>
        <View style={styles._logo}>
          <Heartstring width={150} height={41} fill={"#000"} />
        </View>
      </View>
    </View>
  );
}
