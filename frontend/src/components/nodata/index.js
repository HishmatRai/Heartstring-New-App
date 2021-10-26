import React from "react";
import { Text, View, Image, Platform } from "react-native";
import styles from "./styles";
import BgColorButton from "./../button/bgcolorbtn";
export default function NodataMessage(props) {
  return (
    <View style={styles.container}>
      <View style={styles._data_main}>
        <View style={styles._no_data_main}>
          <Image
            source={require("./../../../assets/images/UserProfile.jpg")}
            style={styles._profile}
          />
          <Text style={styles._no_data_heading}>{props.heading}</Text>
          {Platform.OS === "ios" ? (
            <Text
              style={[
                styles._no_data_heading2ios,
                { color: props.subHeadingColor },
              ]}
            >
              {props.subHeading}
            </Text>
          ) : (
            <Text
              style={[
                styles._no_data_heading2,
                { color: props.subHeadingColor },
              ]}
            >
              {props.subHeading}
            </Text>
          )}
          <BgColorButton
            buttonValue={props.btnText}
            buttonWidth={150}
            marginTop={20}
            path={() => props.path.navigate("Discover")}
          />
        </View>
      </View>
    </View>
  );
}
