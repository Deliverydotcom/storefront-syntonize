import React, { useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  Animated,
  useWindowDimensions,
} from "react-native";
// import Animated from "react-native-reanimated";
import { appStyles, colors, homeStyles } from "../theme";
import { AuthContext } from "../context";
import { useDimensions, useFade } from "../hooks";
import { Tab, TabView } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";
import { StoreDataHeader } from "../components";

export const HomeScreen = () => {
  //const { user, token, logOut } = useContext(AuthContext);
  const [index, setIndex] = React.useState(0);
  const { dimen } = useDimensions();
  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);
  const layout = useWindowDimensions();

  return (
    <>
      <Animated.View style={appStyles.app}>
        <LinearGradient
          colors={["#8EA8A6", "#FFFFFF", "#FFFFFF"]}
          style={[appStyles.linearGradient, { height: layout.height }]}
          start={{ x: 0.2, y: 0.2 }}
        >
          <ScrollView>
            <StoreDataHeader />
            <View style={{ height: "100%", marginTop: 10 }}>
              <Tab
                containerStyle={{ marginRight: 4 }}
                indicatorStyle={{
                  marginRight: 4,
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                  height: 8,
                  left: index === 1 ? 4 : 0,
                  backgroundColor: colors.redrose,
                }}
                value={index}
                onChange={(e) => setIndex(e)}
              >
                <Tab.Item
                  containerStyle={[
                    appStyles.cardtop,
                    {
                      backgroundColor: index === 0 ? colors.secondary : "white",
                    },
                  ]}
                  title={<NowData />}
                  titleStyle={{ fontSize: 12 }}
                />
                <Tab.Item
                  containerStyle={[
                    appStyles.cardtop,
                    {
                      backgroundColor: index === 1 ? colors.bluelight : "white",
                    },
                  ]}
                  title={<LaterData />}
                  titleStyle={{ fontSize: 12 }}
                />
              </Tab>

              <TabView
                containerStyle={{
                  overflow: "scroll",
                  height: Platform.OS === "android" ? 360 : 170,
                }}
                disableSwipe={true}
                value={index}
                onChange={setIndex}
                animationType="spring"
              >
                <TabView.Item style={[appStyles.cardbottom, { width: "100%" }]}>
                  {/* <SafeAreaView> */}
                  <View
                    style={[
                      appStyles.row,
                      { flex: 1, flexDirection: "column" },
                    ]}
                  >
                    <Animated.View
                      style={[
                        dimen === "portraitIOS"
                          ? { left: 75 } //vertical ios
                          : dimen === "portraitAndroid"
                          ? { left: 85 } //vertical android
                          : null,
                        dimen === "landscapeIOS"
                          ? { left: 147 } //horizontal ios
                          : dimen === "landscapeAndroid"
                          ? { left: 175 } //horizontal android
                          : null,

                        appStyles.rotation,
                      ]}
                    >
                      <Icon
                        name="caret-down-sharp"
                        size={25}
                        style={{ color: colors.redrose }}
                      />
                    </Animated.View>

                    <View
                      style={{ overflow: "scroll", padding: 10, marginTop: 10 }}
                    >
                      <ScrollView>
                        <View style={{ height: 500 }}>
                          <OrdersItem title="Unconfirmed orders" />
                          <OrdersItem title="In progress orders" />
                          <OrdersItem title="Recently completed orders" />
                          <OrdersItem title="Unconfirmed orders" />
                          <OrdersItem title="In progress orders" />
                          <OrdersItem title="Recently completed orders" />
                        </View>
                      </ScrollView>
                    </View>
                  </View>
                  {/* </SafeAreaView> */}
                </TabView.Item>
                <TabView.Item style={[appStyles.cardbottom, { width: "100%" }]}>
                  <View style={[appStyles.row, { flexDirection: "column" }]}>
                    <Animated.View
                      style={[
                        dimen === "portraitIOS"
                          ? { left: 252 } //vertical ios
                          : dimen === "portraitAndroid"
                          ? { left: 282 } //vertical android
                          : null,
                        dimen === "landscapeIOS"
                          ? { left: 472 } //horizontal ios
                          : dimen === "landscapeAndroid"
                          ? { left: 175 } //horizontal android
                          : null,

                        appStyles.rotation,
                      ]}
                    >
                      <Icon
                        name="caret-down-sharp"
                        size={25}
                        style={{ color: colors.redrose }}
                      />
                    </Animated.View>

                    <View style={{ padding: 15 }}>
                      <ScrollView>
                        <OrdersItem title="Orders for later" />
                      </ScrollView>
                    </View>
                  </View>
                </TabView.Item>
              </TabView>
            </View>
          </ScrollView>
        </LinearGradient>
      </Animated.View>
    </>
  );
};

const NowData = () => {
  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);
  return (
    <>
      <Text style={styles.textNumberBlue}>Now</Text>
      <Text style={styles.bigNumberBlue}>0</Text>
    </>
  );
};

const LaterData = () => {
  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);
  return (
    <>
      <Text style={styles.textNumberBlue}>Later</Text>
      <Text style={styles.bigNumberBlue}>0</Text>
    </>
  );
};

const OrdersItem = ({ title }: any) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <View style={{}}>
          <Icon
            name="arrow-forward-circle"
            style={{ color: colors.redrose }}
            size={25}
          />
        </View>
        <View
          style={{
            flex: 1,
            padding: 5,
            paddingLeft: 10,
          }}
        >
          <Text style={{ color: colors.primary }}>{title}</Text>
        </View>
        <View style={{}}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: colors.redrose }}
          >
            12
          </Text>
        </View>
      </View>

      <View style={[appStyles.greyLine, { marginTop: 8, marginBottom: 12 }]} />
    </View>
  );
};
