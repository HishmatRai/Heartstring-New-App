import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import styles from "./styles";
import LocationIcon from "./../../../assets/images/LocationIcon.svg";
import { SwipeRow } from "react-native-swipe-list-view";
import { Entypo, AntDesign, Foundation, Ionicons } from "@expo/vector-icons";
export default function SwipeRowCard(props) {
  const [data, setData] = useState([
    {
      cardBg: "#FEAD05",
      iconMainBgColor: "#FFBB35",
      profileImagePath: require("./../../../assets/images/UserProfile.jpg"),
      hashTag: "#meetupAMS",
      meet: "Let’s meet today!",
      messageCounter: 59,
      key: "1",
      tag1: "social",
      tag2: "amsterdam",
      saveCounter: 11,
      tagbgColor: "#000",
      LocationIcon: <LocationIcon width={9} height={15} fill={"#000"} />,
    },
    {
      cardBg: "#05C4DE",
      iconMainBgColor: "#45DFDD",
      profileImagePath: require("./../../../assets/images/UserProfile.jpg"),
      hashTag: "#COVID19",
      meet: "Corona updates.",
      messageCounter: 120,
      key: "2",
      tag1: "society",
      tag2: "barcelona",
      saveCounter: 89,
      tagbgColor: "#000",
      LocationIcon: <LocationIcon width={9} height={15} fill={"#000"} />,
    },
    {
      cardBg: "#103EF9",
      iconMainBgColor: "#4167FF",
      profileImagePath: require("./../../../assets/images/UserProfile.jpg"),
      hashTag: "#cryptotalks",
      meet: "Buying crypto.",
      messageCounter: 90,
      key: "2",
      tag1: "tech",
      tag2: "seoul",
      saveCounter: 200,
      tagbgColor: "#000",
      LocationIcon: <LocationIcon width={9} height={15} fill={"#000"} />,
    },
    {
      cardBg: "#FF1178",
      iconMainBgColor: "#FF4D4D",
      profileImagePath: require("./../../../assets/images/UserProfile.jpg"),
      hashTag: "#datingstuff",
      meet: "Should I breakup?",
      messageCounter: 74,
      key: "2",
      tag1: "relationships",
      tag2: "austin",
      saveCounter: 62,
      tagbgColor: "#000",
      LocationIcon: <LocationIcon width={9} height={15} fill={"#000"} />,
    },
    {
      cardBg: "#8D13FF",
      iconMainBgColor: "#AB51FF",
      profileImagePath: require("./../../../assets/images/UserProfile.jpg"),
      hashTag: "#justvibing",
      meet: "Drop good songs.",
      messageCounter: 16,
      key: "2",
      tag1: "random",
      tag2: "new york",
      saveCounter: 88,
      tagbgColor: "#000",
      LocationIcon: <LocationIcon width={9} height={15} fill={"#000"} />,
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView style={{ backgroundColor: "#000000" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.standalone}>
              <SwipeRow leftOpenValue={75} rightOpenValue={-75}>
                <View style={styles.standaloneRowBack}>
                  <TouchableOpacity>
                    <AntDesign name="heart" size={24} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Entypo name="circle-with-cross" size={24} color="white" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={[styles._card_main, { backgroundColor: item.cardBg }]}
                  onPress={() => props.navigation.navigate("SpaceCreated")}
                >
                  <View style={styles._card1}>
                    <View
                      style={[
                        styles._card_icon_main,
                        { backgroundColor: item.iconMainBgColor },
                      ]}
                    >
                      <Image
                        source={item.profileImagePath}
                        style={styles._profile}
                      />
                    </View>
                  </View>
                  <View style={styles._card2}>
                    <Text style={styles._card_hash_code}>{item.hashTag}</Text>
                    {Platform.OS === "ios" ? (
                      <Text style={styles._italic_headingios}>{item.meet}</Text>
                    ) : (
                      <Text style={styles._italic_heading}>{item.meet}</Text>
                    )}
                    <View style={styles._tags_main}>
                      <Text
                        style={[
                          styles._tag1,
                          { backgroundColor: item.tagbgColor },
                          { color: item.cardBg },
                        ]}
                      >
                        {item.tag1}
                      </Text>
                      <Text style={[styles._tag2]}>
                        {item.LocationIcon}
                        {item.tag2}
                      </Text>
                    </View>
                  </View>
                  <View style={styles._card3}>
                    <View
                      style={[
                        styles._save_main,
                        { backgroundColor: item.iconMainBgColor },
                      ]}
                    >
                      <Foundation name="heart" size={20} color="#FF1178" />
                      <Text style={styles._save_counter}>
                        {item.saveCounter}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={[
                        styles._counter_btn,
                        { backgroundColor: item.iconMainBgColor },
                      ]}
                    >
                      <Ionicons
                        name="chatbubbles-sharp"
                        size={20}
                        color="#000"
                      />
                      <Text style={styles._counter_btn_text}>
                        {item.messageCounter}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </SwipeRow>
            </View>
          )}
        ></FlatList>
        <View style={{ marginBottom: 10 }}></View>
      </ScrollView>
    </View>
  );
}
