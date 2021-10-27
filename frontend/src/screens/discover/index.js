import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";
import NodataMessage from "../../components/nodata";
import SwipeRowCard from "../../components/swiperowcard";
import BottomTab from "../../components/bottomtab";
import DiscoverActive from "./../../../assets/images/DiscoverActive.svg";
import MessageIcon from "./../../../assets/images/MessageIcon.svg";
import TabsAppICon from "./../../../assets/images/TabsAppICon.svg";
import StarIcon from "./../../../assets/images/StarIcon.svg";
import UserIcon from "./../../../assets/images/UserIcon.svg";
import Heartstring from "./../../../assets/images/Heartstring.svg";
import styles from "./styles";
export default function Discover(props) {
  const [dataShow, setDataShow] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDataShow(true);
    }, 1000);
  }, []);
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
        {dataShow ? (
          <SwipeRowCard path={props.navigation}/>
        ) : (
          <NodataMessage
            heading="it seems quiet now"
            subHeading="check again soon"
            subHeadingColor="#45DFDD"
            btnText="refresh"
          />
        )}
      </View>

      <BottomTab
        path={props.navigation}
        tab1={<UserIcon width={48} height={48} fill={"#000"} />}
        tab2={<StarIcon width={48} height={48} fill={"#000"} />}
        tab3={<TabsAppICon width={48} height={48} fill={"#000"} />}
        tab4={<MessageIcon width={48} height={48} fill={"#000"} />}
        tab5={<DiscoverActive width={48} height={48} fill={"#000"} />}
      />
    </View>
  );
}
