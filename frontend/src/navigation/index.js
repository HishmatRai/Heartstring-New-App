import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "./../screens/intro";
import Select from "../screens/select";
import Login from "./../screens/auth/login";
import ForgotPassword from "./../screens/auth/forgotpassword";
import Register from "./../screens/auth/register";
import HeartstringResponsibly from "./../screens/heartstringresponsibly";
import Splash from "./../screens/splash";
import Discover from "./../screens/discover";
import Spaces from "./../screens/spaces";
import SavedSpaces from "./../screens/savedspaces";
import Profile from "./../screens/profile";
import Settings from "./../screens/settings";
import ProfileOverview from "./../screens/profileoverview";
import SettingsOverview from "./../screens/settingsoverview";
import Feedback from "./../screens/feedback";
import InviteFriends from "./../screens/invitefriends";
import SpaceCreated from "./../screens/spacecreated";
import StartSpace from "./../screens/startspace";
const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartSpace"
          component={StartSpace}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SpaceCreated"
          component={SpaceCreated}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InviteFriends"
          component={InviteFriends}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingsOverview"
          component={SettingsOverview}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Select"
          component={Select}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileOverview"
          component={ProfileOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedSpaces"
          component={SavedSpaces}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Spaces"
          component={Spaces}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HeartstringResponsibly"
          component={HeartstringResponsibly}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
