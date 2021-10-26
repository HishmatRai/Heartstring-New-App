import React from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import BottomTab from "../../components/bottomtab";
import DiscoverIcon from "./../../../assets/images/DiscoverIcon.svg";
import MessageActiveIcon from "./../../../assets/images/MessageActiveIcon.svg";
import TabsAppICon from "./../../../assets/images/TabsAppICon.svg";
import StarIcon from "./../../../assets/images/StarIcon.svg";
import UserIcon from "./../../../assets/images/UserIcon.svg";
import styles from "./styles";
export default function Profile(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#233BED"
        translucent={false}
      />
      <View style={styles._header_bg}></View>
      <View style={styles._data_main}>
        <Image
          source={require("./../../../assets/images/UserProfile.jpg")}
          style={styles._profile}
        />
        <Text style={styles._user_name}>SupperFly31</Text>
        {Platform.OS === "ios" ? (
          <Text style={styles._Desios}>Barcelona, Spain</Text>
        ) : (
          <Text style={styles._Des}>Barcelona, Spain</Text>
        )}

        <View style={styles._counter_show_main}>
          <View style={styles._counter_main}>
            <Text style={styles._counter}>24</Text>
            <Text style={styles._counter_heading}>age</Text>
          </View>
          <View style={styles._counter_main}>
            <Text style={styles._counter}>610</Text>
            <Text style={styles._counter_heading}>karma</Text>
          </View>
          <View style={styles._counter_main}>
            <Text style={styles._counter}>19</Text>
            <Text style={styles._counter_heading}>spaces</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles._setting_btn}
          onPress={() => props.navigation.navigate("Settings")}
        >
          <Text style={styles._button_txt}>settings</Text>
        </TouchableOpacity>
      </View>
      <BottomTab
        path={props.navigation}
        tab1={<UserIcon width={48} height={48} fill={"#000"} />}
        tab2={<StarIcon width={48} height={48} fill={"#000"} />}
        tab3={<TabsAppICon width={48} height={48} fill={"#000"} />}
        tab4={<MessageActiveIcon width={48} height={48} fill={"#000"} />}
        tab5={<DiscoverIcon width={48} height={48} fill={"#000"} />}
      />
    </View>
  );
}
