import React from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import Heartstring from "./../../../assets/images/Heartstring.svg";
import styles from "./styles";
export default function ProfileOverview(props) {
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
        <Text style={styles._heading}>Profile</Text>
        <View style={styles._sun}></View>
      </View>

      <View style={{ paddingTop: 20, flex: 1 }}>
        <ScrollView style={{ backgroundColor: "#000" }}>
          <TouchableOpacity style={styles._list3}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome name="user-circle" size={20} color="white" />
              <Text style={styles._feedback}>Avatar</Text>
            </View>
            <Image
              source={require("./../../../assets/images/UserProfile.jpg")}
              style={styles.ProfileImg}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles._list3}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="find" size={20} color="white" />
              <Text style={styles._feedback}>Location</Text>
            </View>
            <Text style={styles._feedback}>Barcelona</Text>
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
