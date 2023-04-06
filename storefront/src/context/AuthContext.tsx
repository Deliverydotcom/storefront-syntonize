import React, { createContext, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthStatus, LoginData, LoginResponse, Usuario } from "../interfaces";
import { authReducer } from "./authreducer";
import storeFrontApi from "../api/storeFrontApi";
import { checkToken } from "../utils";

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: "checking" | "authenticated" | "not-authenticated";
  signUp: () => void;
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInitialState: AuthStatus = {
  status: "checking",
  token: null,
  user: null,
  errorMessage: "",
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  // READ TOKEN
  //---------------------------------------------------
  useEffect(() => {
    checkToken(dispatch);
  }, []);

  // SIGN UP ACTION
  //---------------------------------------------------
  const signUp = () => {};

  // SIGN IN ACTION
  //---------------------------------------------------

  const signIn = async ({ correo, password }: LoginData) => {
    try {
      storeFrontApi
        .post<LoginResponse>("/auth/login", { correo, password })
        .then(async (resp) => {
          dispatch({
            type: "signUp",
            payload: {
              token: resp.data.token,
              user: resp.data.usuario,
            },
          });

          await AsyncStorage.setItem("token", resp.data.token);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error: any) {
      dispatch({
        type: "addError",
        payload: error.response.data.msg || "Información incorrecta",
      });
    }
  };

  // const signIn = async ({correo, password}: LoginData) => {
  //   try {
  //     const resp = await storeFrontApi.post<LoginResponse>('/auth/login', {
  //       correo,
  //       password,
  //     });
  //     dispatch({
  //       type: 'signUp',
  //       payload: {token: resp.data.token, user: resp.data.usuario},
  //     });
  //     await AsyncStorage.setItem('token', resp.data.token);
  //   } catch (error: any) {
  //     //console.log(error.response.data.msg);
  //     console.log(error);
  //     dispatch({
  //       type: 'addError',
  //       payload: error.response.data.msg || 'Información incorrecta',
  //     });
  //   }
  // };

  // LOGOUT ACTION
  //---------------------------------------------------
  const logOut = async () => {
    await AsyncStorage.removeItem("token"); //destroy stored
    dispatch({
      type: "logout",
    });
  };

  // REMOVE ERROR ACTION
  // when login error remove errorMessage for return to init and show error again
  //---------------------------------------------------
  const removeError = () => {
    dispatch({
      type: "removeError",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
