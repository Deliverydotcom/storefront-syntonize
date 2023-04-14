import { useEffect, useState } from "react";
import {  Platform, useWindowDimensions } from "react-native";

export const useDimensions = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();

  const [dimen, setDimen] = useState("");

  useEffect(() => {
    console.log(height, width, scale, fontScale);

    console.log(
      "height:",
      height,
      "dimensions:",
      dimen,
      "platform:",
      Platform.OS
    );
    if (height < 400 && Platform.OS === "ios") {
      setDimen("landscapeIOS");
    } else if (height < 400 && Platform.OS === "android") {
      setDimen("landscapeAndroid");
    } else if (height > 400 && Platform.OS === "ios") {
      setDimen("portraitIOS");
    } else if (height >= 400 && Platform.OS === "android") {
      setDimen("portraitAndroid");
    } else {
      setDimen("portraitIOS");
    }
  }, [dimen, setDimen, height, width]);

  return { dimen };
};
