import React from "react";
import {
  View,
  Text,
  StatusBar,
} from "react-native";
import styles from "./styles";
import LogoIcon from "./../../../assets/images/LogoIcon.svg";
import Heartstring from "./../../../assets/images/Heartstring.svg";
export default function Splash(props) {
  setTimeout(() => {
    props.navigation.navigate("Discover");
  }, 4000);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#0D0D0D"
        translucent={true}
      />
        <View style={styles._main}>
          <View></View>
          <View style={styles.logo_main}>
          <LogoIcon width={150} height={176} fill={"#000"} />
          </View>
          <View>
            <Text style={styles._des}>welcome to </Text>
            <Heartstring width={150} height={41} fill={"#000"} />
          </View>
        </View>
    </View>
  );
}
