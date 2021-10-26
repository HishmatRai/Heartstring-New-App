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
import Profile from './../screens/profile'
const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Select"
          component={Select}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        /> */}
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
