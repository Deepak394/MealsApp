import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";
enableScreens();

 const fatchFonts = () => {
   return Font.loadAsync({
     'openSans-bold': require("./assets/fonts/OpenSans-Bold.ttf"),
     'openSans-regular': require("./assets/fonts/OpenSans-Regular.ttf"),
   });
 };

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fatchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
   <MealsNavigator />
  );
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
    
  // },
  // title : {
  //   fontFamily: 'openSans-bold',
  // },
});
