declare module "react-native-dotenv" {
  export const API_URL_ANDROID: string;
  export const API_URL_IOS: string;
  // export const ENV: 'dev' | 'prod';
}

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
