import React from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Share,
  Platform,
} from "react-native";
import styles from "./styles";
import FeedBackIcon from "./../../../assets/images/FeedBackIcon.svg";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
export default function Settings(props) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#000"
        translucent={true}
      />

      <View>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles._back}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles._sun}></View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ProfileOverview")}
        >
          <Image
            source={require("./../../../assets/images/UserProfile.jpg")}
            style={styles.ProfileImg}
          />
        </TouchableOpacity>
        <Text style={styles._user_name}>SupperFly31</Text>
        {Platform.OS === "ios" ? (
          <Text style={styles._emailios}>Barcelona, Spain</Text>
        ) : (
          <Text style={styles._email}>Barcelona, Spain</Text>
        )}
      </View>

      <View style={{ paddingTop: 20, flex: 1 }}>
        <ScrollView style={{ backgroundColor: "#000" }}>
          <TouchableOpacity style={styles._list} onPress={onShare}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="share-social-sharp" size={24} color="white" />
              <Text style={styles._feedback}>Invite friends</Text>
            </View>
            <Entypo name="chevron-small-right" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles._list3}
            onPress={() => props.navigation.navigate("SettingsOverview")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="settings-outline" size={24} color="white" />
              <Text style={styles._feedback}>Settings</Text>
            </View>
            <Entypo name="chevron-small-right" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles._list3}
            onPress={() => props.navigation.navigate("Feedback")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FeedBackIcon width={19} height={17} fill={"#000"} />
              <Text style={styles._feedback}>Feedback</Text>
            </View>
            <Entypo name="chevron-small-right" size={24} color="white" />
          </TouchableOpacity>

          <View style={{ marginBottom: 100 }}></View>
        </ScrollView>

        <View style={styles._bottom_button}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles._logout}>logout</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            {Platform.OS === "ios" ? (
              <Text style={styles._delete_accountios}>delete account</Text>
            ) : (
              <Text style={styles._delete_account}>delete account</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
