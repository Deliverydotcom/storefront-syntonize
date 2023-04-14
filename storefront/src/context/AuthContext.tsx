// import React, { createContext, useEffect, useReducer } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AuthStatus, LoginData, LoginResponse, Usuario } from "../interfaces";
// import { authReducer } from "./authreducer";
// import storeFrontApi from "../api/storeFrontApi";
// import { checkToken } from "../utils";

// type AuthContextProps = {
//   errorMessage: string;
//   token: string | null;
//   user: Usuario | null;
//   status: "checking" | "authenticated" | "not-authenticated";
//   signUp: () => void;
//   signIn: (loginData: LoginData) => void;
//   logOut: () => void;
//   removeError: () => void;
// };

// const authInitialState: AuthStatus = {
//   status: "not-authenticated",
//   token: null,
//   user: null,
//   errorMessage: "",
// };

// export const AuthContext = createContext({} as AuthContextProps);

// export const AuthProvider = ({ children }: any) => {
//   const [state, dispatch] = useReducer(authReducer, authInitialState);

//   // READ TOKEN
//   //---------------------------------------------------
//   useEffect(() => {
//     checkToken(dispatch);
//   }, []);

//   // SIGN UP ACTION (not implemented(?))
//   //---------------------------------------------------
//   const signUp = () => {
//     console.log("first");
//   };

//   // SIGN IN ACTION
//   //---------------------------------------------------

//   const signIn = async ({ correo, password }: LoginData) => {
//     try {
//       storeFrontApi
//         .post<LoginResponse>("/auth/login", { correo, password })
//         .then(async (resp) => {
//           dispatch({
//             type: "signIn",
//             payload: {
//               token: resp.data.token,
//               user: resp.data.usuario,
//             },
//           });

//           await AsyncStorage.setItem("token", resp.data.token);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } catch (error: any) {
//       dispatch({
//         type: "addError",
//         payload: error.response.data.msg || "Información incorrecta",
//       });
//     }
//   };

//   // const signIn = async ({correo, password}: LoginData) => {
//   //   try {
//   //     const resp = await storeFrontApi.post<LoginResponse>('/auth/login', {
//   //       correo,
//   //       password,
//   //     });
//   //     dispatch({
//   //       type: 'signUp',
//   //       payload: {token: resp.data.token, user: resp.data.usuario},
//   //     });
//   //     await AsyncStorage.setItem('token', resp.data.token);
//   //   } catch (error: any) {
//   //     //console.log(error.response.data.msg);
//   //     console.log(error);
//   //     dispatch({
//   //       type: 'addError',
//   //       payload: error.response.data.msg || 'Información incorrecta',
//   //     });
//   //   }
//   // };

//   // LOGOUT ACTION
//   //---------------------------------------------------
//   const logOut = async () => {
//     await AsyncStorage.removeItem("token"); //destroy stored
//     dispatch({
//       type: "logout",
//     });
//   };

//   // REMOVE ERROR ACTION
//   // when login error remove errorMessage for return to init and show error again
//   //---------------------------------------------------
//   const removeError = () => {
//     dispatch({
//       type: "removeError",
//     });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         ...state,
//         signUp,
//         signIn,
//         logOut,
//         removeError,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storeFrontApi from "../api/storeFrontApi";
// import {decode, encode} from 'base-64'
import { LoginData, LoginResponse, Usuario, RegisterData } from "../interfaces";

import { authReducer, AuthState } from "./authreducer";
import axios from "axios";

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: "checking" | "authenticated" | "not-authenticated";
  signUp: (registerData: RegisterData) => void;
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInicialState: AuthState = {
  status: "checking",
  token: null,
  user: null,
  errorMessage: "",
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInicialState);

  useEffect(() => {
    setTimeout(() => {
      checkToken();
    }, 2000);
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");

    // No token, no autenticado
    if (!token) return dispatch({ type: "notAuthenticated" });

    // Hay token
    const resp = await storeFrontApi.get("/auth");
    if (resp.status !== 200) {
      return dispatch({ type: "notAuthenticated" });
    }

    await AsyncStorage.setItem("token", resp.data.token);
    dispatch({
      type: "signUp",
      payload: {
        token: resp.data.token,
        user: resp.data.usuario,
      },
    });
  };

  /**
   * LOGIN REQUEST
   * get paid attention to google captcha
   * @param param0
   */

  const signIn = async ({ correo, password }: LoginData) => {
    let data = JSON.stringify({
      username: "dgil@syntonize.com",
      password: "Syntonize123!",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://www-storefront.staging.delivery.com/api/customer/auth?client_id=ZTRiYzVmYWQ0MmUyOTU0OGU2YTBmMjg4NDQyZmFmMTc1",
      headers: {
        "Content-Type": "application/json",
        Cookie:
          "AWSALB=7i14Mo8HVvSFvECDmbQIICq1myXRzbPx7YEQNt3RrKDRbX+dtEMEWCbeF36HVF4tVhVuSdNTH29maEzeoW1bd3ylkjLRMwb9EPfNKWdrNFAaLxYE7lG32pnfcquA; AWSALBCORS=7i14Mo8HVvSFvECDmbQIICq1myXRzbPx7YEQNt3RrKDRbX+dtEMEWCbeF36HVF4tVhVuSdNTH29maEzeoW1bd3ylkjLRMwb9EPfNKWdrNFAaLxYE7lG32pnfcquA; laravel_session=eyJpdiI6IjRGd3BFS3ZLU0xLeGhYOE1rSjdrdXc9PSIsInZhbHVlIjoiV1wvb1IwNFJraGRDV0FSdHVRNmVIK1RGZURLcGRPcEFSekVjYlE1OXNYdDV2Z3YzQUc1Z0VIMVl0OEdiU3NrdStwNXpoYzFPdHlTY3lGZGxwNUk5elVRPT0iLCJtYWMiOiIxMjlkOTc5YzQ0YzViNTI5ODliYzJhYzQ1ZDI3YTQ2ZjM1YWZlYTNkZDM1MDM0NDhkZGNhZGE4ZjNhMDEyY2FkIn0%3D",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   *
   * @param param0
   * REGISTER
   *
   */
  const signUp = async ({ nombre, correo, password }: RegisterData) => {
    try {
      const { data } = await storeFrontApi.post<LoginResponse>("/usuarios", {
        correo,
        password,
        nombre,
      });
      dispatch({
        type: "signUp",
        payload: {
          token: data.token,
          user: data.usuario,
        },
      });

      await AsyncStorage.setItem("token", data.token);
    } catch (error: any) {
      dispatch({
        type: "addError",
        payload: error.response.data.errors[0].msg || "Revise la información",
      });
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "logout" });
  };

  const removeError = () => {
    dispatch({ type: "removeError" });
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
