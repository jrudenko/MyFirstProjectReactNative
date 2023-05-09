import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Image,
  Keyboard,
} from "react-native";
import { styles } from "./Screens.styles";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [state, setState] = useState(initialState);

  const loginHandler = (value) =>
    setState((prevState) => ({
      ...prevState,
      login: value,
    }));
  const nameHandler = (value) =>
    setState((prevState) => ({
      ...prevState,
      email: value,
    }));
  const passwordHandler = (value) =>
    setState((prevState) => ({
      ...prevState,
      password: value,
    }));

  const onRegistration = () => {
    console.log(state);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <View style={styles.regInputs}>
      <View style={styles.avatarPlace}>
        <Image source={require("./Images/avatar.png")} />
      </View>
      <Pressable
        title={"Login"}
        style={styles.add}
        onPress={() => alert("This is a pick photo button!")}
      >
        <View>
          <Image source={require("./Images/add.png")} />
        </View>
      </Pressable>
      <View style={styles.textPosition}>
        <Text style={{ fontFamily: "LibreBaskerville-Bold", fontSize: 30 }}>
          R E G I S T E R
        </Text>
      </View>

      <TextInput
        value={state.login}
        onChangeText={loginHandler}
        placeholder="Login"
        style={styles.input}
      />
      <TextInput
        value={state.email}
        onChangeText={nameHandler}
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        value={state.password}
        onChangeText={passwordHandler}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />
      <Pressable
        title={"Register"}
        style={styles.button}
        onPress={onRegistration}
      >
        <Text>R E G I S T E R</Text>
      </Pressable>
      <Text>Already have an account? Sign in</Text>
    </View>
  );
};

export default RegistrationScreen;
