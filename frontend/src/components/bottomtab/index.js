import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
export default function BottomTab(props) {
  let HeaderIcons = [
    {
      icon: props.tab1,
      path: () => props.path.navigate("Profile"),
    },
    {
      icon: props.tab2,
      path: () => props.path.navigate("Spaces"),
    },
    {
      icon: props.tab3,
      path: () => props.path.navigate("SpaceCreated"),
    },
    {
      icon: props.tab4,
      path: () => props.path.navigate("SavedSpaces"),
    },
    {
      icon: props.tab5,
      path: () => props.path.navigate("Discover"),
    },
  ];
  return (
    <View style={styles._header_main}>
      {HeaderIcons.map((v, i) => {
        return (
          <TouchableOpacity onPress={v.path} key={i}>
            {v.icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
