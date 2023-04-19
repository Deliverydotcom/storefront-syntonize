import React, { useCallback, useContext, useEffect, useRef } from 'react';
import {
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  SafeAreaView,
  Button,
} from 'react-native';
import { Background, WhiteLogo } from '../components';
import { loginStyles } from '../theme/loginTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useForm } from '../hooks';
import { StackScreenProps } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

// import {auth} from '../utils/firebase';
// import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { AuthContext } from '../context';
import Recaptcha from 'react-native-recaptcha-that-works';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {
  const { username, password, g_recaptcha_response, form, onChange } = useForm({
    username: '',
    password: '',
    g_recaptcha_response: '',
  });
  const { signIn, errorMessage, removeError } = useContext(AuthContext);
  const $recaptcha = useRef();

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
    signIn({ username, password, g_recaptcha_response });
  };

  useEffect(() => {
    if (errorMessage.length === 0) return;
    Alert.alert('Login incorrecto', errorMessage, [
      { text: 'Ok', onPress: removeError },
    ]);
  }, [errorMessage]);

  const onVerify = (value: any) => {
    onChange(value, 'g_recaptcha_response');
  };

  const handleOpenPress = useCallback(() => {
    $recaptcha.current?.open();
  }, []);

  const handleClosePress = useCallback(() => {
    if ($recaptcha?.current !== undefined) {
      $recaptcha.current.close();
    }
  }, []);
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <LinearGradient
          colors={['#8EA8A6', '#9EB1A8', '#FFFFFF']}
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
              value={username}
              onChangeText={value => onChange(value, 'username')}
              onSubmitEditing={onLogin}
              style={[
                loginStyles.inputField,
                Platform.OS === 'ios' && loginStyles.inputFieldIOS,
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
              onChangeText={value => onChange(value, 'password')}
              onSubmitEditing={onLogin}
              style={[
                loginStyles.inputField,
                Platform.OS === 'ios' && loginStyles.inputFieldIOS,
              ]}
              selectionColor="white"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <SafeAreaView>
              <View>
                <Button onPress={handleOpenPress} title={'Open'} />
                <Recaptcha
                  ref={$recaptcha}
                  lang="en"
                  headerComponent={
                    <Button title="Close" onPress={handleClosePress} />
                  }
                  siteKey="6LcPaBsUAAAAAONgz3hc9HZG7GrXseZEl8ZyHud7"
                  baseUrl="https://storefront-beta.delivery.com"
                  size="compact"
                  theme="light"
                  // onLoad={() => alert('onLoad event')}
                  // onClose={() => alert('onClose event')}
                  onError={err => {
                    console.warn('error', err);
                    alert('onError event');
                  }}
                  onExpire={() => alert('onExpire event')}
                  onVerify={onVerify}
                />
              </View>
            </SafeAreaView>
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
                onPress={() => navigation.replace('forgotcredentials')}
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
