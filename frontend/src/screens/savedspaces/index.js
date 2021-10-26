import React from "react";
import { View, StatusBar } from "react-native";
import NodataMessage from "../../components/nodata";
import BottomTab from "../../components/bottomtab";
import DiscoverIcon from "./../../../assets/images/DiscoverIcon.svg";
import MessageActiveIcon from "./../../../assets/images/MessageActiveIcon.svg";
import TabsAppICon from "./../../../assets/images/TabsAppICon.svg";
import StarIcon from "./../../../assets/images/StarIcon.svg";
import UserIcon from "./../../../assets/images/UserIcon.svg";
import Heartstring from "./../../../assets/images/Heartstring.svg";
import styles from "./styles";
export default function SavedSpaces(props) {
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
          heading="it seems you haven’t"
          subHeading="saved spaces you like"
          subHeadingColor="#FF1178"
          btnText="discover"
          path={props.navigation}
        />
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
