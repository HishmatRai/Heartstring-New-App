import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Share,
  ScrollView,
  Dimensions,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./styles";
import BgColorButton from "./../../components/button/bgcolorbtn";
import LocationIcon from "./../../../assets/images/LocationIcon.svg";
import DiscoverActive from "./../../../assets/images/DiscoverActive.svg";
import MessageIcon from "./../../../assets/images/MessageIcon.svg";
import TabsAppICon from "./../../../assets/images/TabsAppICon.svg";
import StarIcon from "./../../../assets/images/StarIcon.svg";
import UserIcon from "./../../../assets/images/UserIcon.svg";
import MessageCounterIcon from "./../../../assets/images/MessageCounterIcon.svg";
import SaveCounterIcon from "./../../../assets/images/SaveCounterIcon.svg";
import ShareCounterIcon from "./../../../assets/images/ShareCounterIcon.svg";
import CommentSendIcon from "./../../../assets/images/CommentSendIcon.svg";
import BottomTab from "../../components/bottomtab";
import { AntDesign, Ionicons, Foundation } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
export default function StartSpace(props) {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");
  const screen = Dimensions.get("screen");
  const refRBSheet = useRef();
  const [comment, setComment] = React.useState("");
  let CardData = [
    {
      emojiBg: "#4167FF",
      emoji: "💎",
      tag: "#crypotalks",
      data: `What do you think of ETH ${"\n"}right now? Should I buy ${"\n"}some or wait?`,
      buttonBg: "#000",
      btn1Text: "tech",
      btn2Text: "seoul",
    },
    {
      emojiBg: "#FFBB35",
      emoji: "😀",
      tag: "#meetupAMS",
      data: `What do you think of ETH ${"\n"}right now? Should I buy ${"\n"}some or wait?`,
      buttonBg: "#000",
      btn1Text: "social",
      btn2Text: "amsterdam",
    },
    {
      emojiBg: "#45DFDD",
      emoji: "😷",
      tag: "#COVID19",
      data: `What do you think of ETH ${"\n"}right now? Should I buy ${"\n"}some or wait?`,
      buttonBg: "#000",
      btn1Text: "society",
      btn2Text: "barcelona",
    },
    {
      emojiBg: "#FF4D4D",
      emoji: "💌",
      tag: "#datingstuff",
      data: `What do you think of ETH ${"\n"}right now? Should I buy ${"\n"}some or wait?`,
      buttonBg: "#000",
      btn1Text: "relationships",
      btn2Text: "austin",
    },
    {
      emojiBg: "#AB51FF",
      emoji: "🖖🏽",
      tag: "#justvibing",
      data: `What do you think of ETH ${"\n"}right now? Should I buy ${"\n"}some or wait?`,
      buttonBg: "#000",
      btn1Text: "random",
      btn2Text: "new york",
    },
  ];
  let CommentCardData = [
    {
      name: "Smo0othie",
      message: "I would definitely it buy now! HODL!!",
      time: "22h",
      save: 112,
      nameColor: "#32CFFF",
      icon: <Foundation name="heart" size={24} color="#FF1178" />,
    },
    {
      name: "Tracy Gray",
      message: "Not familiar with it, should I check it?",
      time: "2h",
      save: 89,
      nameColor: "#028684",
      icon: <Foundation name="heart" size={24} color="#FF1178" />,
    },
    {
      name: "Rodriquezz",
      message: "I hold both BTC and ETH. It’s the future for sure.",
      time: "6m",
      save: 12,
      nameColor: "#103EF9",
      icon: <Ionicons name="heart-outline" size={24} color="#FF1178" />,
    },
    {
      name: "MrFrogs",
      message: "Go for it man. If you need help let me know.",
      time: "1m",
      save: 9,
      nameColor: "#FF1178",
      icon: <Ionicons name="heart-outline" size={24} color="#FF1178" />,
    },
    {
      name: "MrFrogs",
      message: "Go for it man. If you need help let me know.",
      time: "1m",
      save: 9,
      nameColor: "#FF1178",
      icon: <Ionicons name="heart-outline" size={24} color="#FF1178" />,
    },
    {
      name: "MrFrogs",
      message: "Go for it man. If you need help let me know.",
      time: "1m",
      save: 9,
      nameColor: "#FF1178",
      icon: <Ionicons name="heart-outline" size={24} color="#FF1178" />,
    },
  ];
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

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { y } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(y / width);
    console.log("===========>>>>>",indexOfNextScreen)
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  const { currentPage: pageIndex } = sliderState;
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor="#103EF9"
        translucent={true}
      />

      <View
        style={[
          pageIndex === 0 ? styles._main : null,
          pageIndex === 1 ? styles._main2 : null,
          pageIndex === 2 ? styles._main3 : null,
          pageIndex === 3 ? styles._main4 : null,
          pageIndex === 4 ? styles._main5 : null,
          pageIndex === 5 ? styles._main6 : null,
        ]}
      >
        <ScrollView
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsVerticalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
          style={{
            height:screen.height,
          }}
        >
          {CardData.map((v, i) => {
            return (
              <View key={i} style={[styles.card_maiin]}>
                <Image
                  source={require("./../../../assets/images/UserProfile.jpg")}
                  style={styles.slider_profile}
                />
                <Text style={styles.user_name}>SuperFly31</Text>
                <Text style={styles._address}>Barcelona, Spain</Text>
                <Text style={styles._tags}>{v.tag}</Text>
                {Platform.OS === "ios" ? (
                  <View>
                    <Text style={styles._welcomeios}>Trading crypto.</Text>
                  </View>
                ) : (
                  <View>
                    <Text style={styles._welcome}>Trading crypto.</Text>
                  </View>
                )}

                <View style={styles._btn_main}>
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: v.buttonBg }]}
                  >
                    <Text style={[styles._button_txt, { color: v.emojiBg }]}>
                      {v.btn1Text}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button]}>
                    <Text style={styles._button_txt}>
                      <LocationIcon width={9} height={15} fill={"#000"} />{" "}
                      {v.btn2Text}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles._data_counter_main}>
        <View style={styles._data_counter_rouder}></View>
        <View style={styles._header_main}>
          <View style={styles._header_icons_main}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("LeaveComment")}
            >
              <MessageCounterIcon width={48} height={48} fill={"#000"} />
            </TouchableOpacity>
            <Text style={styles._header_text}>
              {pageIndex === 0 ? "90" : null}
              {pageIndex === 1 ? "80" : null}
              {pageIndex === 2 ? "70" : null}
              {pageIndex === 3 ? "60" : null}
              {pageIndex === 4 ? "50" : null}
              {pageIndex === 5 ? "50" : null}
            </Text>
          </View>
          <View>
            <SaveCounterIcon width={48} height={48} fill={"#000"} />
            <Text style={styles._header_text}>
              {pageIndex === 0 ? "200" : null}
              {pageIndex === 1 ? "180" : null}
              {pageIndex === 2 ? "170" : null}
              {pageIndex === 3 ? "160" : null}
              {pageIndex === 4 ? "150" : null}
              {pageIndex === 5 ? "150" : null}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={onShare}>
              <ShareCounterIcon width={48} height={48} fill={"#000"} />
            </TouchableOpacity>
            <Text style={styles._header_text}>
              {pageIndex === 0 ? "400" : null}
              {pageIndex === 1 ? "480" : null}
              {pageIndex === 2 ? "470" : null}
              {pageIndex === 3 ? "460" : null}
              {pageIndex === 4 ? "450" : null}
              {pageIndex === 5 ? "450" : null}
            </Text>
          </View>
        </View>
        <Text style={styles._after_counter_messsage}>
          What do you think of {"\n"}ETH right now? Should I {"\n"}buy some or
          wait?
        </Text>
        <BgColorButton
          buttonValue="comment"
          path={() => refRBSheet.current.open()}
          buttonWidth={200}
          marginTop={20}
        />
        <BottomTab
          path={props.navigation}
          tab1={<UserIcon width={48} height={48} fill={"#000"} />}
          tab2={<StarIcon width={48} height={48} fill={"#000"} />}
          tab3={<TabsAppICon width={48} height={48} fill={"#000"} />}
          tab4={<MessageIcon width={48} height={48} fill={"#000"} />}
          tab5={<DiscoverActive width={48} height={48} fill={"#000"} />}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={screen.height - 50}
        initialSnapIndex={0}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#3A3A3A",
          },
          container: {
            backgroundColor: "#000",
            borderTopColor: "#282828",
            borderTopWidth: 1,
          },
        }}
      >
        <View style={[styles.bottom_main]}>
          <View style={styles.b_header_main}>
            <TouchableOpacity style={styles._header_btn}>
              <AntDesign name="exclamationcircle" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles._header_btn}
              // onPress={() => props.navigation.goBack()}
              onPress={() => refRBSheet.current.close()}
            >
              <Ionicons name="close-sharp" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles._body}>
            <ScrollView>
              <View>
                <Image
                  source={require("./../../../assets/images/UserProfile.jpg")}
                  style={styles._profile2}
                />
                <Text style={styles.name}>SuperFly31</Text>
                <Text style={styles._location}>Barcelona, Spain</Text>
                <ScrollView>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      alignSelf: "center",
                      // marginBottom: 10,
                    }}
                  >
                    <Text style={styles.comment_counter}>90</Text>
                    <Text style={styles._comment}>comments </Text>
                  </View>
                  {CommentCardData.map((v, i) => {
                    return (
                      <View style={styles._card_main} key={i}>
                        <View style={styles._card_part1}>
                          <Image
                            source={require("./../../../assets/images/UserProfile.jpg")}
                            style={styles._profile}
                          />
                        </View>
                        <View style={styles._card_part2}>
                          {Platform.OS === "ios" ? (
                            <Text
                              style={[
                                styles._card_nameios,
                                { color: v.nameColor },
                              ]}
                            >
                              {v.name}
                            </Text>
                          ) : (
                            <Text
                              style={[
                                styles._card_name,
                                { color: v.nameColor },
                              ]}
                            >
                              {v.name}
                            </Text>
                          )}
                          <Text style={styles._card_message}>
                            {v.message}
                            <Text style={styles._card_time}> {v.time}</Text>
                          </Text>
                        </View>
                        <View style={styles._card_part3}>
                          {v.icon}
                          <Text style={styles.saved_Counter}>{v.save}</Text>
                        </View>
                      </View>
                    );
                  })}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      alignSelf: "center",
                      marginBottom: 10,
                    }}
                  >
                    <Text style={styles.comment_counter}>86+</Text>
                    <Text style={styles._comment}>comments </Text>
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
          <View style={styles.bottom}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ marginBottom: 0 }}
            >
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles._leave_comment_btn_main}>
                  {Platform.OS === "ios" ? (
                    <TextInput
                      placeholder="Leave a comment..."
                      value={comment}
                      onChangeText={(comment) => setComment(comment)}
                      style={styles._inputios}
                      underlineColor="white"
                      placeholderTextColor="white"
                      multiline={true}
                    />
                  ) : (
                    <TextInput
                      placeholder="Leave a comment..."
                      value={comment}
                      onChangeText={(comment) => setComment(comment)}
                      style={styles._input2}
                      underlineColor="white"
                      placeholderTextColor="white"
                      multiline={true}
                    />
                  )}
                  <TouchableOpacity>
                    <CommentSendIcon width={46} height={46} fill={"#000"} />
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </View>
        </View>
      </RBSheet>
    </View>
  );
}
