import React, { useContext, useState } from "react";
import {
  Animated,
  Button,
  Dimensions,
  Text,
  useWindowDimensions,
} from "react-native";
import { appStyles, colors, homeStyles } from "../theme";
import { AuthContext } from "../context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useFade } from "../hooks";
import { LinearGradient } from "expo-linear-gradient";
import { FaqScreen, RequestSupport } from "../components";

export const HelpScreen = () => {
  const { user, token, logOut } = useContext(AuthContext);

  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Request Support" },
    { key: "second", title: "FAQS" },
  ]);

  const renderScene = SceneMap({
    first: RequestSupport,
    second: FaqScreen,
  });

  const initialLayout = {
    height: 0,
    width: Dimensions.get("window").width,
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      tabStyle={{
        width: "auto",
        paddingHorizontal: 24,
        margin: 0,
        justifyContent: "center",
      }}
      indicatorStyle={{ backgroundColor: "white" }}
      style={{ padding: 0, margin: 0, backgroundColor: colors.redrose }}
      getLabelText={({ route }) => route.title}
      renderLabel={({ route, focused, color }) => (
        <Text
          style={{
            padding: 0,
            margin: 0,
            alignContent: "center",
            color,
          }}
        >
          {route.title}
        </Text>
      )}
    />
  );

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
            Help
          </Text>
          <TabView
            accessibilityElementsHidden={false}
            renderTabBar={renderTabBar}
            animationEnabled
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
        </LinearGradient>
      </Animated.View>
    </>
  );
};
