import React from "react";
import { View, StatusBar } from "react-native";
import NodataMessage from "../../components/nodata";
import BottomTab from "../../components/bottomtab";
import DiscoverIcon from "./../../../assets/images/DiscoverIcon.svg";
import MessageIcon from "./../../../assets/images/MessageIcon.svg";
import TabsAppICon from "./../../../assets/images/TabsAppICon.svg";
import StarActiveIcon from "./../../../assets/images/StarActiveIcon.svg";
import UserIcon from "./../../../assets/images/UserIcon.svg";
import Heartstring from "./../../../assets/images/Heartstring.svg";
import styles from "./styles";
export default function Spaces(props) {
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
          subHeading="started any  spaces yet"
          subHeadingColor="#FFBB35"
          btnText="start now"
          path={props.navigation}
        />
      </View>

      <BottomTab
        path={props.navigation}
        tab1={<UserIcon width={48} height={48} fill={"#000"} />}
        tab2={<StarActiveIcon width={48} height={48} fill={"#000"} />}
        tab3={<TabsAppICon width={48} height={48} fill={"#000"} />}
        tab4={<MessageIcon width={48} height={48} fill={"#000"} />}
        tab5={<DiscoverIcon width={48} height={48} fill={"#000"} />}
      />
    </View>
  );
}
