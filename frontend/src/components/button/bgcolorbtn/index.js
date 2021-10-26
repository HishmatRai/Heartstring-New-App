import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
export default function BgColorButton(props) {
  return (
    <TouchableOpacity
      style={[styles._btn_main, { width: props.buttonWidth }]}
      onPress={props.path}
    >
      <LinearGradient
        end={[1.0, 0.5]}
        start={[0.0, 0.5]}
        colors={["#FF28A9", "#FEAD05", "#32CFFF"]}
        style={[styles.button, { width: props.buttonWidth}]}
      >
        <Text style={styles.btn_text}>{props.buttonValue}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
