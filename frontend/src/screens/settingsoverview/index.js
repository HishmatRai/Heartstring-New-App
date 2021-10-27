import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Heartstring from "./../../../assets/images/Heartstring.svg";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
export default function SettingsOverview(props) {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
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
        <Text style={styles._heading}>Settings</Text>
        <View style={styles._sun}></View>
      </View>

      <View style={{ paddingTop: 20, flex: 1 }}>
        <ScrollView style={{ backgroundColor: "#000" }}>
          <TouchableOpacity style={styles._list3}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="notifications-active"
                size={20}
                color="white"
              />
              <Text style={styles._feedback}>Notifications</Text>
            </View>
            <ToggleSwitch
              isOn={toggle}
              onColor="#fff"
              offColor="#fff"
              labelStyle={{
                color: "black",
                fontWeight: "900",
                backgroundColor: "#4788ED",
              }}
              style={
                {
                  // borderWidth: 2,
                  // borderColor: "black",
                  // borderRadius: 30,
                }
              }
              thumbOffStyle={{
                backgroundColor: "#000",
              }}
              thumbOnStyle={{
                backgroundColor: "green",
              }}
              size="medium"
              onToggle={(isOn) => setToggle(!toggle)}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles._list3}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="find" size={20} color="white" />
              <Text style={styles._feedback}>Enable GPS</Text>
            </View>
            <ToggleSwitch
              isOn={toggle2}
              onColor="#fff"
              offColor="#fff"
              labelStyle={{
                color: "black",
                fontWeight: "900",
                backgroundColor: "#4788ED",
              }}
              style={
                {
                  // borderWidth: 2,
                  // borderColor: "black",
                  // borderRadius: 30,
                }
              }
              thumbOffStyle={{
                backgroundColor: "#000",
              }}
              thumbOnStyle={{
                backgroundColor: "green",
              }}
              size="medium"
              onToggle={(isOn) => setToggle2(!toggle2)}
            />
          </TouchableOpacity>

          <View style={{ marginBottom: 100 }}></View>
        </ScrollView>
        <View style={styles._logo}>
          <Heartstring width={150} height={41} fill={"#000"} />
        </View>
      </View>
    </View>
  );
}
