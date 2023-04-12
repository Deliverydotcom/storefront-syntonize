import React, { useContext, useEffect } from "react";
import {
  Animated,
  Button,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { appStyles, colors, homeStyles } from "../theme";
import { AuthContext } from "../context";
import { BottomNavigation, Header } from "../components";
import { SideDrawermenu } from "../navigator/SideDrawerMenu";
import { useDimensions, useFade } from "../hooks";
import { Tab, TabView } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { Platform } from "react-native";

export const HomeScreen = () => {
  const { user, token, logOut } = useContext(AuthContext);
  const [index, setIndex] = React.useState(0);
  const { dimen } = useDimensions();
  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);

  return (
    <>
      <Animated.View style={appStyles.app}>
        <LinearGradient
          colors={["#8EA8A6", "#FFFFFF", "#FFFFFF"]}
          style={appStyles.linearGradient}
          start={{ x: 0.2, y: 0.2 }}
        >
          <ScrollView>
            <View style={[appStyles.whiteLine, { marginBottom: 8 }]} />
            <View style={appStyles.row}>
              <Text style={{ fontSize: 16, color: "white" }}>
                User Random Store
              </Text>
            </View>
            <View style={[appStyles.column, { marginTop: 6, marginBottom: 6 }]}>
              <View>
                <Text
                  style={[styles.miniText, { marginBottom: 3, color: "white" }]}
                >
                  Default Order Estimates
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Text style={[styles.testDataSettings, { color: "white" }]}>
                  Delivery: <Text style={{ fontWeight: "bold" }}>60 mins</Text>
                </Text>

                <Text style={[styles.testDataSettings, { color: "white" }]}>
                  Pickup: <Text style={{ fontWeight: "bold" }}>15 mins</Text>
                </Text>
              </View>
              <View
                style={[
                  appStyles.whiteLine,
                  { marginTop: 12, marginBottom: 8 },
                ]}
              />
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <Text style={styles.textforIcons}>
                  <Icon name="ellipse" style={{ color: "#AFCA0B" }} size={10} />{" "}
                  Open
                </Text>
                <Text style={styles.textforIcons}>
                  <Icon name="ellipse" style={{ color: "#AFCA0B" }} size={10} />{" "}
                  Sound On
                </Text>
                <Text style={styles.textforIcons}>
                  <Icon name="ellipse" style={{ color: "#AFCA0B" }} size={10} />{" "}
                  10 Griffin RD
                </Text>
              </View>
            </View>

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
                    <View
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
                        {
                          height: 20,
                          width: 20,
                          top: -6,
                          transform: [{ rotate: "180deg" }],
                        },
                      ]}
                    >
                      <Icon
                        name="triangle"
                        size={15}
                        style={{ color: colors.redrose }}
                      />
                    </View>

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
                    <View
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
                        {
                          height: 20,
                          width: 20,
                          top: -6,
                          transform: [{ rotate: "180deg" }],
                        },
                      ]}
                    >
                      <Icon
                        name="triangle"
                        size={15}
                        style={{ color: colors.redrose }}
                      />
                    </View>

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
