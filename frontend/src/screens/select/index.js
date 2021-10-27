import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BgColorButton from "./../../components/button/bgcolorbtn";
import WithoutBgColorButton from "./../../components/button/withoutbgcolorbtn";
import styles from "./styles";
import LogoIcon from "./../../../assets/images/LogoIcon.svg";
import { Zocial, Ionicons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import Heartstring from "./../../../assets/images/Heartstring.svg";
import GoogleIcon from "./../../../assets/images/GoogleIcon.svg";
import TryOut from "./../../../assets/images/TryOut.svg";
export default function Select(props) {
  let login = () => {
    this[RBSheet + 1].close();
    props.navigation.navigate("Login");
  };

  let singUp = () => {
    this[RBSheet + 0].close();
    props.navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#0D0D0D"
        translucent={true}
      />
      <View style={styles._main}>
        <View></View>
        <View style={styles.logo}>
          <LogoIcon width={90} height={78} fill={"#000"} />
          <Heartstring width={260} height={41} fill={"#000"} />
          <Text style={styles._tags_show}>Connect. Share. Chat. {"\n"}Stay anonymous.</Text>
        </View>
        <View>
          <View style={{alignItems:"center",alignSelf:"center"}}>
          <BgColorButton
            buttonValue="sign up"
            path={() => this[RBSheet + 0].open()}
            buttonWidth={270}
          />

          <WithoutBgColorButton
            buttonValue="log in"
            path={() => this[RBSheet + 1].open()}
            buttonWidth={270}
            marginTop={20}
          />
          </View>
          <TouchableOpacity style={styles.login_button}>
            <Text style={styles._button_txt2}> log in </Text>
          </TouchableOpacity>
          <View style={styles._des_main}>
            <Text style={styles._des}>You agree with our </Text>
            <TouchableOpacity>
              <Text style={styles._terms_btn_text}>Terms & Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles._des}>by signing up.</Text>
          <View style={{marginBottom:15}}></View>
        </View>
      </View>
      <RBSheet
        ref={(ref) => {
          this[RBSheet + 1] = ref;
        }}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={420}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,.8)",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            backgroundColor: "#000",
            borderTopColor: "#fff",
            borderTopWidth: 1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}
      >
        <View style={styles._bottom_sheet_main}>
          <ScrollView>
            <Text style={styles._bottom_sheet_heading}>Log in with</Text>
            <TouchableOpacity style={styles.email_button} onPress={login}>
              <Zocial name="email" size={24} color="black" />
              <Text style={styles.email_button_txt}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.twitter_button}>
              <Ionicons name="ios-logo-twitter" size={24} color="#fff" />
              <Text style={styles.twitter_button_txt}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.google_button}>
              <GoogleIcon width={22} height={22} fill={"#000"} />
              <Text style={styles.email_button_txt}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.apple_button}>
              <TryOut width={22} height={22} fill={"#000"} />
              <Text style={styles.apple_button_txt}>Try it out</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.close_button}
              onPress={() => this[RBSheet + 1].close()}
            >
              <Text style={styles.close_button_txt}>cancel</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </RBSheet>
      <RBSheet
        ref={(ref) => {
          this[RBSheet + 0] = ref;
        }}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={420}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,.8)",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            backgroundColor: "#000",
            borderTopColor: "#fff",
            borderTopWidth: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <View style={styles._bottom_sheet_main}>
          <ScrollView>
            <Text style={styles._bottom_sheet_heading}>Sign up with</Text>
            <TouchableOpacity style={styles.email_button} onPress={singUp}>
              <Zocial name="email" size={24} color="black" />
              <Text style={styles.email_button_txt}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.twitter_button}>
              <Ionicons name="ios-logo-twitter" size={24} color="#fff" />
              <Text style={styles.twitter_button_txt}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.google_button}>
              <GoogleIcon width={22} height={22} fill={"#000"} />
              <Text style={styles.email_button_txt}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.apple_button}>
              <TryOut width={22} height={22} fill={"#000"} />
              <Text style={styles.apple_button_txt}>Try it out</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.close_button}
              onPress={() => this[RBSheet + 0].close()}
            >
              <Text style={styles.close_button_txt}>cancel</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </RBSheet>
    </View>
  );
}
