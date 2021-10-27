import React from "react";
import { View, StatusBar, TouchableOpacity, Text } from "react-native";
import NodataMessage from "../../components/nodata";
import BottomTab from "../../components/bottomtab";
import DiscoverIcon from "./../../../assets/images/DiscoverIcon.svg";
import MessageIcon from "./../../../assets/images/MessageIcon.svg";
import TabsActiveAppICon from "./../../../assets/images/TabsActiveAppICon.svg";
import StarIcon from "./../../../assets/images/StarIcon.svg";
import UserIcon from "./../../../assets/images/UserIcon.svg";
import Heartstring from "./../../../assets/images/Heartstring.svg";
import styles from "./styles";
export default function InviteFriends(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#000000"
        translucent={true}
      />
      <View style={{ paddingTop: 40, flex: 1 }}>
        <View style={styles._logo}>
          <Heartstring width={150} height={41} fill={"#000"} />
        </View>
        <NodataMessage
          heading="Your space was created"
          subHeading="invite your friends!"
          subHeadingColor="#FFDC5D"
          btnText="invite"
          path={props.navigation}
        />
      </View>

      <BottomTab
        path={props.navigation}
        tab1={<UserIcon width={48} height={48} fill={"#000"} />}
        tab2={<StarIcon width={48} height={48} fill={"#000"} />}
        tab3={<TabsActiveAppICon width={48} height={48} fill={"#000"} />}
        tab4={<MessageIcon width={48} height={48} fill={"#000"} />}
        tab5={<DiscoverIcon width={48} height={48} fill={"#000"} />}
      />
    </View>
  );
}
