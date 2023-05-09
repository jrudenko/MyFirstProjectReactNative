import { StatusBar } from "expo-status-bar";
import React from "react";
import { styles } from "./App.styles";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";

const registration = false;

export default function App() {
  const [fontsLoaded] = useFonts({
    "LibreBaskerville-Bold": require("./Screens/Images/fonts/LibreBaskerville-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          source={require("./Screens/Images/PineTree.jpeg")}
          style={styles.img}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            {registration ? (
              <View style={styles.regField}>
                <RegistrationScreen />
              </View>
            ) : (
              <View style={styles.regField}>
                <LoginScreen />
              </View>
            )}
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </ImageBackground>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

