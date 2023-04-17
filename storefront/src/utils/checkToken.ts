import AsyncStorage from "@react-native-async-storage/async-storage";
import storeFrontApi from "../api/storeFrontApi";

export const checkToken = async (dispatch: any) => {
  const token = AsyncStorage.getItem("token"); //get token from storage

  if (!token) {
    return dispatch({ type: "notAuthenticated" }); //if no token then not authenticated
  }

  await storeFrontApi
    .get("/auth")
    .then(async (resp) => {
      if (resp.status !== 200) {
        return dispatch({ type: "notAuthenticated" });
      }
      await AsyncStorage.setItem("token", resp.data.token); //store again the new
      dispatch({
        type: "signUp",
        payload: { token: resp.data.token, user: resp.data.usuario },
      });
    })
    .catch((err) => {
      console.log(err);
    }); //if token existe, then fetch API to get renew token ( don't use headers, its into interceptor)
};
