import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Background, WhiteLogo} from '../components';
import {loginStyles} from '../theme';
import {StackScreenProps} from '@react-navigation/stack';
import {useForm} from '../hooks';

interface Props extends StackScreenProps<any, any> {}

export const ForgotCredentials = ({navigation}: Props) => {
  const {email, password, form, onChange} = useForm({email: '', password: ''});

  const onSend = () => {};
  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.globalContainer}>
          <WhiteLogo />
          <Text style={loginStyles.subtext}>Forgot password</Text>
          <Text style={loginStyles.label}></Text>
          <TextInput
            placeholder="Escriba su e-mail"
            placeholderTextColor="rgba(255,255,255,0.7) "
            keyboardType="email-address"
            underlineColorAndroid="white"
            value={email}
            onChangeText={value => onChange(value, 'email')}
            onSubmitEditing={onSend}
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS,
            ]}
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onSend}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles.forgotContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('LoginScreen')}>
              <Text style={loginStyles.forgotText}>Go to login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
