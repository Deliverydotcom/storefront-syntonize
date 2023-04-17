import { Platform } from "react-native";
import axios from "axios";
import { API_URL_ANDROID, API_URL_IOS } from "react-native-dotenv";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Buffer } from "buffer";

// const baseURL =
//   Platform.OS === "ios" || Platform.OS === "web"
//     ? `${API_URL_IOS}/api`
//     : `${API_URL_ANDROID}/api`;
const baseURL = `https://www-storefront.staging.delivery.com`;
const storeFrontApi = axios.create({ baseURL });

// interceptor middleware, code pass always here
// and get stored token
const tokkk = Buffer.from(
  "ZTRiYzVmYWQ0MmUyOTU0OGU2YTBmMjg4NDQyZmFmMTc1"
).toString("base64");
const tokkk2 = Buffer.from("wnLNB7asDxcYBxhtonQkcd023UMzGzN1ivoifC6A").toString(
  "base64"
);

const finaltoken = `${tokkk}:${tokkk2}`;
console.log("FINAL TOKEN!", finaltoken);

const default_content_type = {
  "content-type": "application/x-www-form-urlencoded",
  Authorization: "basic " + finaltoken,
};

storeFrontApi.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers["x-token"] = token;
    config.headers.method = default_content_type;
  }

  return config;
});
export default storeFrontApi;
