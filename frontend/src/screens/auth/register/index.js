import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "./styles";
import BgColorButton from "./../../../components/button/bgcolorbtn";
import DatePicker from "./../../../components/datepicker";
import Heartstring from "./../../../../assets/images/Heartstring.svg";
import {
  MaterialIcons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import ToggleSwitch from "toggle-switch-react-native";
export default function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userName, setUseName] = React.useState("");
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  let GpsContinue = () => {
    this[RBSheet + 0].close();
    this[RBSheet + 1].open();
  };
  let EnableContacts = () => {
    this[RBSheet + 1].close();
    props.navigation.navigate("HeartstringResponsibly");
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="black"
        translucent={false}
      />
      <View style={styles._main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._logo}>
            <Heartstring width={150} height={41} fill={"#000"} />
          </View>
          {Platform.OS === "ios" ? (
            <View>
              <Text style={styles._heading}>Create your account</Text>
              <Text style={styles._sub_headingiOS}> within 30 seconds</Text>
            </View>
          ) : (
            <View>
              <Text style={styles._heading}>Create your account</Text>
              <Text style={styles._sub_heading}> within 30 seconds</Text>
            </View>
          )}
          <View style={styles._input_main}>
            <MaterialIcons name="email" size={24} color="white" />
            <TextInput
              placeholder="email"
              value={email}
              onChangeText={(email) => setEmail(email)}
              style={styles._input}
              underlineColor="white"
              placeholderTextColor="white"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="email"
            />
          </View>

          <View style={styles._input_main}>
            <AntDesign name="Safety" size={24} color="white" />
            <TextInput
              placeholder="password"
              value={password}
              onChangeText={(password) => setPassword(password)}
              style={styles._input}
              underlineColor="white"
              placeholderTextColor="white"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>

          <View style={styles._input_main}>
            <FontAwesome name="user-circle" size={24} color="white" />
            <TextInput
              placeholder="username"
              value={userName}
              onChangeText={(userName) => setUseName(userName)}
              style={styles._input}
              underlineColor="white"
              placeholderTextColor="white"
              autoCapitalize="none"
            />
          </View>

          <View>
            <DatePicker />
          </View>
          <BgColorButton
            buttonValue="create account"
            path={() => this[RBSheet + 0].open()}
            buttonWidth={270}
            marginTop={50}
          />
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles._login_button_txt}>log in</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <RBSheet
        ref={(ref) => {
          this[RBSheet + 0] = ref;
        }}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={370}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,.8)",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            backgroundColor: "#000",
            borderTopColor: "#282828",
            borderTopWidth: 1,
          },
        }}
      >
        <View style={styles._bottom_sheet_main}>
          {Platform.OS === "ios" ? (
            <View>
              <Text style={styles._bottom_heading}>To use the app</Text>
              <Text style={styles._bottom_sub_headingiOS}>enable your GPS</Text>
            </View>
          ) : (
            <View>
              <Text style={styles._bottom_heading}>To use the app</Text>
              <Text style={styles._bottom_sub_heading}>enable your GPS</Text>
            </View>
          )}
          <View style={styles._gps_main}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="find" size={24} color="white" />
              <Text style={styles._gps_heading}>enable GPS</Text>
            </View>
            <ToggleSwitch
              isOn={toggle}
              onColor="#fff"
              offColor="#fff"
              labelStyle={{
                color: "black",
                fontWeight: "900",
                backgroundColor: "#4788ED",
              }}
              style={
                {
                  // borderWidth: 2,
                  // borderColor: "black",
                  // borderRadius: 30,
                }
              }
              thumbOffStyle={{
                backgroundColor: "#000",
              }}
              thumbOnStyle={{
                backgroundColor: "green",
              }}
              size="medium"
              onToggle={(isOn) => setToggle(!toggle)}
            />
          </View>
          <Text style={styles._bottom_sheet_des}>
            This is just to help you {"\n"}discover topics nearby.
          </Text>
          <BgColorButton
            buttonValue="continue"
            path={GpsContinue}
            buttonWidth={270}
            marginTop={30}
          />
        </View>
      </RBSheet>
      <RBSheet
        ref={(ref) => {
          this[RBSheet + 1] = ref;
        }}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={370}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,.8)",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            backgroundColor: "#000",
            borderTopColor: "#282828",
            borderTopWidth: 1,
          },
        }}
      >
        <View style={styles._bottom_sheet_main}>
          {Platform.OS === "ios" ? (
            <View>
              <Text style={styles._bottom_heading}>To use the app</Text>
              <Text style={styles._bottom_sub_headingiOS2}>
                enable contacts
              </Text>
            </View>
          ) : (
            <View>
              <Text style={styles._bottom_heading}>To use the app</Text>
              <Text style={styles._bottom_sub_heading2}>enable contacts</Text>
            </View>
          )}
          <View style={styles._gps_main}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5 name="users" size={24} color="white" />
              <Text style={styles._gps_heading}>enable contacts</Text>
            </View>
            <ToggleSwitch
              isOn={toggle2}
              onColor="#fff"
              offColor="#fff"
              labelStyle={{
                color: "black",
                fontWeight: "900",
                backgroundColor: "#4788ED",
              }}
              style={
                {
                  // borderWidth: 2,
                  // borderColor: "black",
                  // borderRadius: 30,
                }
              }
              thumbOffStyle={{
                backgroundColor: "#000",
              }}
              thumbOnStyle={{
                backgroundColor: "green",
              }}
              size="medium"
              onToggle={(isOn) => setToggle2(!toggle2)}
            />
          </View>
          <Text style={styles._bottom_sheet_des}>
            This is just to help you easily{"\n"}
            invite friends to join.
          </Text>
          <BgColorButton
            buttonValue="continue"
            path={EnableContacts}
            buttonWidth={270}
            marginTop={30}
          />
        </View>
      </RBSheet>
    </View>
  );
}
