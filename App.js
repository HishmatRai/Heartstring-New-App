import React from "react";
import Navigation from "./frontend/src/navigation";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
export default function App() {
  let [fontsLoaded] = useFonts({
    "FontsFree-Net-SF-Pro-Rounded-Black": require("./frontend/assets/fonts/FontsFree-Net-SF-Pro-Rounded-Black.ttf"),
    "FontsFree-Net-SF-Pro-Rounded-Light": require("./frontend/assets/fonts/FontsFree-Net-SF-Pro-Rounded-Light.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigation />;
  }
}
