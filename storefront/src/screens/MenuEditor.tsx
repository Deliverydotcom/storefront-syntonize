import React, { useContext } from "react";
import { Animated, Button, Text, useWindowDimensions } from "react-native";
import { appStyles, homeStyles } from "../theme";
import { AuthContext } from "../context";
import { useFade } from "../hooks";
import { LinearGradient } from "expo-linear-gradient";
import WebView from "react-native-webview";

export const MenuEditor = () => {
  const { user, token, logOut } = useContext(AuthContext);
  const layout = useWindowDimensions();
  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);

  return (
    <>
      <Animated.View style={appStyles.app}>
        <LinearGradient
          colors={["#8EA8A6", "#FFFFFF", "#FFFFFF"]}
          style={[appStyles.linearGradient, { height: layout.height }]}
          start={{ x: 0.2, y: 0.2 }}
        >
          {/* <StoreDataHeader /> */}
          <Text
            style={[
              appStyles.sectionTitle,
              { marginTop: 20, marginBottom: 10 },
            ]}
          >
            Menu Editor
          </Text>
          <WebView
            originWhitelist={["*"]}
            source={{
              uri: "https://admin.delivery.com/merchant/manage/wysiwyg_editor.php",
            }}
          />
        </LinearGradient>
      </Animated.View>
    </>
  );
};
