import React, { useState } from "react";
import { View, Text, StatusBar, Platform } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import IntorImg1 from "./../../../assets/images/Intro1.svg";
import IntorImg2 from "./../../../assets/images/Intro2.svg";
import IntorImg3 from "./../../../assets/images/Intro3.svg";
import Heartstring from "./../../../assets/images/Heartstring.svg";
import styles from "./styles";
const Intro = (props) => {
  const [showRealApp, setShowRealApp] = useState(false);
  const onDone = () => {
    // setShowRealApp(true);
    props.navigation.navigate("Select");
  };
  const onSkip = () => {
    setShowRealApp(true);
  };
  const slides = [
    {
      key: "s1",
      title: "See what people",
      text: "want to talk about",
      bgColor: "#0D0D0D",
      svgImageAndroidPath: <IntorImg1 width={260} height={350} fill={"#000"} />,
      svgImageiOSPath: <IntorImg1 width={350} height={470} fill={"#000"} />,
      titleColor: "#FFBB35",
    },
    {
      key: "s2",
      text: "anonymous chats ",
      title: "Jump in & out of",
      bgColor: "#0D0D0D",
      svgImageAndroidPath: <IntorImg2 width={270} height={350} fill={"#000"} />,
      svgImageiOSPath: <IntorImg2 width={360} height={470} fill={"#000"} />,
      titleColor: "#FF4D4D",
    },
    {
      key: "s3",
      text: "chat spaces",
      title: "Create your own",
      bgColor: "#0D0D0D",
      svgImageAndroidPath: <IntorImg3 width={250} height={350} fill={"#000"} />,
      svgImageiOSPath: <IntorImg3 width={330} height={470} fill={"#000"} />,
      titleColor: "#4167FF",
    },
  ];

  const RenderItem = ({ item }) => {
    return (
      <View style={[styles.main, { backgroundColor: item.bgColor }]}>
        <StatusBar
          barStyle="white"
          hidden={true}
          backgroundColor="#ff4b4e"
          translucent={true}
        />
        <View style={styles._logo}>
          <Heartstring width={260} height={41} fill={"#000"} />
        </View>
        {Platform.OS === "ios" ? (
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.introTitleStyleios}>{item.title}</Text>
            <Text
              style={[styles.introTextStyleios, { color: item.titleColor }]}
            >
              {item.text}
            </Text>
            {item.svgImageiOSPath}
          </View>
        ) : (
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.introTitleStyle}>{item.title}</Text>
            <Text style={[styles.introTextStyle, { color: item.titleColor }]}>
              {item.text}
            </Text>
            {item.svgImageAndroidPath}
          </View>
        )}
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        // showSkipButton={true}
        onSkip={onSkip}
        bottomButton
        dotStyle={"white"}
      />
    </>
  );
};

export default Intro;
