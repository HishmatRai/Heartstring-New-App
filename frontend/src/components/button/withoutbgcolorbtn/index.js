import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
export default function WithooutBgColorButton(props) {
  return (
    <TouchableOpacity style={[styles._btn_main, { width: props.buttonWidth },{marginTop:props.marginTop}]} onPress={props.path}>
      <Text style={styles.btn_text}>{props.buttonValue}</Text>
    </TouchableOpacity>
  );
}
