import React from "react";
import { View, Text, StatusBar, Platform } from "react-native";
import styles from "./styles";
import BgColorButton from "./../../components/button/bgcolorbtn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Heartstring from "./../../../assets/images/Heartstring.svg";
export default function HeartstringResponsibly(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor="black"
        translucent={false}
      />
      <View style={styles._main}>
        <View>
          <View style={styles._logo}>
            <Heartstring width={150} height={41} fill={"#000"} />
          </View>

          <Text style={styles._heading}>Use heartstring</Text>
          {Platform.OS === "ios" ? (
            <Text style={styles._sub_headingios}>responsibly</Text>
          ) : (
            <Text style={styles._sub_heading}>responsibly</Text>
          )}
        </View>
        <View>
          <View style={styles.card_main}>
            <View style={styles._Card_icon1}>
              <MaterialCommunityIcons
                name="check-bold"
                size={44}
                color="black"
              />
            </View>
            <View>
              <Text style={styles._Card_title}>Make sure to be</Text>
              {Platform.OS === "ios" ? (
                <Text style={styles._Card_headingios1}>nice & have fun</Text>
              ) : (
                <Text style={styles._Card_heading1}>nice & have fun</Text>
              )}
            </View>
          </View>
          <View style={styles.card_main}>
            <View style={styles._Card_icon2}>
              <MaterialCommunityIcons
                name="check-bold"
                size={44}
                color="black"
              />
            </View>
            <View>
              <Text style={styles._Card_title}>Respect others</Text>
              {Platform.OS === "ios" ? (
                <Text style={styles._Card_headingios2}>& keep it clean</Text>
              ) : (
                <Text style={styles._Card_heading2}>& keep it clean</Text>
              )}
            </View>
          </View>
          <View style={styles.card_main}>
            <View style={styles._Card_icon3}>
              <MaterialCommunityIcons
                name="check-bold"
                size={44}
                color="black"
              />
            </View>
            <View>
              <Text style={styles._Card_title}>Bad behaviour</Text>
              {Platform.OS === "ios" ? (
                <Text style={styles._Card_headingios}>results in a ban</Text>
              ) : (
                <Text style={styles._Card_heading}>results in a ban</Text>
              )}
            </View>
          </View>
        </View>
        <BgColorButton
          buttonValue="yes I agree"
          path={() => props.navigation.navigate("Splash")}
          buttonWidth={270}
        />
      </View>
    </View>
  );
}
