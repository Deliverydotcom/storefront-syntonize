import React, { useContext, useState } from "react";
import {
  Animated,
  Button,
  ScrollView,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
  SectionList,
} from "react-native";
import { appStyles, colors, homeStyles } from "../theme";
import { AuthContext } from "../context";
import { useFade } from "../hooks";
import { LinearGradient } from "expo-linear-gradient";
import { ListItemManage, StoreDataHeader } from "../components";
import {
  DATA,
  DATASECTION,
  DATASECTIONHOURS,
  ItemData,
  ItemDataSection,
} from "../interfaces";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

export const ManageHours = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const { user, token, logOut } = useContext(AuthContext);
  const layout = useWindowDimensions();
  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "Business & Delivery Hours" },
    { key: "second", title: "Holiday Hours" },
  ]);

  const renderItem = ({ item, index }: { item: any; index: any }) => {
    let colors = ["#F9F9F9", "#F3F3F3"];
    const backgroundColor = item.id === selectedId ? "#CA506E" : "transparent";
    const marginHeight = item.id === selectedId ? 1 : 1;
    const color = item.id === selectedId ? "white" : "black";
    return (
      <View
        style={{
          marginVertical: marginHeight,
          backgroundColor: colors[index % colors.length],
        }}
      >
        <ListItemManage
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      </View>
    );
  };

  const BusinessDelivery = () => (
    <SafeAreaView style={[stylesList.container]}>
      <SectionList
        sections={DATASECTION}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={stylesList.sectionTitle}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );

  const HolidayHours = () => (
    <SafeAreaView style={[stylesList.container]}>
      <SectionList
        sections={DATASECTIONHOURS}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={stylesList.sectionTitle}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );

  const renderScene = SceneMap({
    first: BusinessDelivery,
    second: HolidayHours,
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
            Manage Hours
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
const stylesList = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: colors.nineth,
    padding: 20,
    marginVertical: 0,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  sectionTitle: {
    backgroundColor: "white",
    fontSize: 18,
    paddingVertical: 10,
    color: "black",
  },
});
