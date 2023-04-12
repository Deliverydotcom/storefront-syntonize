import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from "react-native";
import { Background, WhiteLogo } from "../components";
import { loginStyles } from "../theme/loginTheme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useForm } from "../hooks";
import { StackScreenProps } from "@react-navigation/stack";
import LinearGradient from "react-native-linear-gradient";

// import {auth} from '../utils/firebase';
// import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { AuthContext } from "../context";

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {
  const { email, password, form, onChange } = useForm({
    email: "",
    password: "",
  });
  const { signIn, errorMessage, removeError } = useContext(AuthContext);

  //USING FIREBASE AUTH
  // commented for check if we use
  // const onLogin = () => {
  //   // e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(userCredential => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       // ...
  //     })
  //     .catch(error => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  //   Keyboard.dismiss();
  // };

  const onLogin = () => {
    Keyboard.dismiss();
    signIn({ correo: email, password });
  };

  useEffect(() => {
    if (errorMessage.length === 0) return;
    Alert.alert("Login incorrecto", errorMessage, [
      { text: "Ok", onPress: removeError },
    ]);
  }, [errorMessage]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <LinearGradient
          colors={["#8EA8A6", "#9EB1A8", "#FFFFFF"]}
          style={loginStyles.linearGradient}
        >
          <View style={loginStyles.globalContainer}>
            <WhiteLogo />
            <Text style={loginStyles.subtext}>
              Simple tools for managing you online store.
            </Text>
            <TextInput
              placeholder="Escriba su e-mail"
              placeholderTextColor="#cccccc"
              keyboardType="email-address"
              underlineColorAndroid="white"
              value={email}
              onChangeText={(value) => onChange(value, "email")}
              onSubmitEditing={onLogin}
              style={[
                loginStyles.inputField,
                Platform.OS === "ios" && loginStyles.inputFieldIOS,
              ]}
              selectionColor="white"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Escriba su contraseña"
              placeholderTextColor="#cccccc"
              underlineColorAndroid="white"
              value={password}
              onChangeText={(value) => onChange(value, "password")}
              onSubmitEditing={onLogin}
              style={[
                loginStyles.inputField,
                Platform.OS === "ios" && loginStyles.inputFieldIOS,
              ]}
              selectionColor="white"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={loginStyles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={onLogin}
              >
                <Text style={loginStyles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={loginStyles.forgotContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.replace("forgotcredentials")}
              >
                <Text style={loginStyles.forgotText}>
                  Forgot your password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </>
  );
};
