import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import styles from "./styles";
import BgColorButton from "./../../components/button/bgcolorbtn";
import LocationIcon from "./../../../assets/images/LocationIcon.svg";
export default function SpaceCreated(props) {
  const [activeBtn, setActiveBtn] = useState(2);
  let selectTags = [
    {
      bgColor: "#FEAD05",
      title: "news",
    },
    {
      bgColor: "#AB51FF",
      title: "random",
    },
    {
      bgColor: "#FF5B58",
      title: "dating",
    },
    {
      bgColor: "#1ECCD6",
      title: "health",
    },
    {
      bgColor: "#FEAD05",
      title: "news",
    },
    {
      bgColor: "#AB51FF",
      title: "random",
    },
    {
      bgColor: "#FF5B58",
      title: "dating",
    },
    {
      bgColor: "#1ECCD6",
      title: "health",
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#9044EA"
        translucent={true}
      />

      <View style={styles._main}>
        <ScrollView>
          <View style={styles._emoji_main}>
            <Image
              source={require("./../../../assets/images/UserProfile.jpg")}
              style={styles._profile}
            />
          </View>
          <Text style={styles._tags}>#justvibing</Text>
          {Platform.OS === "ios" ? (
            <Text style={styles._welcomeios}>Drop your fav’ song.</Text>
          ) : (
            <Text style={styles._welcome}>Drop your fav’ song.</Text>
          )}
          <Text style={styles._Des}>
            I’m in need for some {"\n"}really solid beats.{" "}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles._button_txt}>
              <LocationIcon width={9} height={15} fill={"#000"} /> new york
            </Text>
          </TouchableOpacity>

          <View style={styles._slider_main}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {selectTags.map((v, i) => {
                return (
                  <View key={i} style={styles._slider}>
                    <TouchableOpacity
                      onPress={() => setActiveBtn(i)}
                      style={[
                        activeBtn === i
                          ? {
                              width: 60,
                              height: 60,
                              borderRadius: 60 / 2,
                              borderWidth: 3,
                              borderColor: "#fff",
                            }
                          : {
                              width: 60,
                              height: 60,
                              borderRadius: 60 / 2,
                              borderWidth: 3,
                              borderColor: v.bgColor,
                            },
                        { backgroundColor: v.bgColor },
                      ]}
                    ></TouchableOpacity>
                    <Text
                      style={[
                        activeBtn === i
                          ? {
                              color: "#fff",
                              fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
                              fontSize: 16,
                            }
                          : {
                              color: "#000",
                              fontFamily: "FontsFree-Net-SF-Pro-Rounded-Black",
                              fontSize: 16,
                            },
                      ]}
                    >
                      {v.title}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <BgColorButton
            buttonValue="start space"
            path={() => props.navigation.navigate("StartSpace")}
            buttonWidth={270}
            marginTop={50}
          />
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={styles._cancel_button_txt}>cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
