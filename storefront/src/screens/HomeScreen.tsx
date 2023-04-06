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
import { BottomNavigation } from "../components";
import { SideDrawermenu } from "../navigator/SideDrawerMenu";
import { useDimensions, useFade } from "../hooks";
import { Tab, TabView } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

export const HomeScreen = () => {
  const { user, token, logOut } = useContext(AuthContext);
  const [index, setIndex] = React.useState(0);
  const { dimen } = useDimensions();
  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);

  return (
    <>
      <Animated.View style={appStyles.app}>
        <ScrollView>
          <View style={appStyles.row}>
            <Text style={{ fontSize: 22 }}>User Random Store</Text>
          </View>
          <View style={[appStyles.row, { marginBottom: 10 }]}>
            <View
              style={[
                appStyles[`3col`],

                appStyles.card,
                {
                  backgroundColor: colors.nineth,
                  marginTop: 10,
                  padding: 10,
                  paddingRight: 20,
                  alignItems: "flex-start",
                },
              ]}
            >
              <Text
                style={[styles.miniText, { marginBottom: 10, color: "white" }]}
              >
                Default Order Estimates
              </Text>

              <Text style={[styles.testDataSettings, { color: "white" }]}>
                Delivery: <Text style={{ fontWeight: "bold" }}>60 mins</Text>
              </Text>

              <Text style={[styles.testDataSettings, { color: "white" }]}>
                Pickup: <Text style={{ fontWeight: "bold" }}>15 mins</Text>
              </Text>
            </View>
            <View
              style={[
                appStyles[`1mcol`],
                appStyles.card,
                {
                  backgroundColor: colors.greylight,
                  marginTop: 10,
                  marginLeft: 5,
                  padding: 10,
                  paddingLeft: 15,
                  justifyContent: "center",
                  alignItems: "flex-start",
                },
              ]}
            >
              <Text style={styles.textforIcons}>
                <Icon name="ellipse" style={{ color: "green" }} size={10} />{" "}
                Open
              </Text>
              <Text style={styles.textforIcons}>
                <Icon name="ellipse" style={{ color: "green" }} size={10} />{" "}
                Sound On
              </Text>
              <Text style={styles.textforIcons}>
                <Icon name="ellipse" style={{ color: "green" }} size={10} /> 10
                Griffin RD
              </Text>
            </View>
          </View>
          <View style={{ height: "100%", marginTop: 10 }}>
            <Tab value={index} onChange={(e) => setIndex(e)} disableIndicator>
              <Tab.Item
                containerStyle={[
                  appStyles.cardtop,
                  {
                    marginRight: 4,
                    backgroundColor: colors.secondary,
                  },
                ]}
                title={<NowData />}
                titleStyle={{ fontSize: 12 }}
              />
              <Tab.Item
                containerStyle={[
                  appStyles.cardtop,
                  { backgroundColor: colors.bluelight },
                ]}
                title={<LaterData />}
                titleStyle={{ fontSize: 12 }}
              />
            </Tab>

            <TabView
              containerStyle={{ overflow: "scroll", minHeight: 170 }}
              value={index}
              onChange={setIndex}
              animationType="spring"
            >
              <TabView.Item style={[appStyles.cardbottom, { width: "100%" }]}>
                {/* <SafeAreaView> */}
                <View
                  style={[appStyles.row, { flex: 1, flexDirection: "column" }]}
                >
                  <View
                    style={[
                      dimen === "portrait" ? { left: 147 } : { left: 75 },
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
                      style={{ color: colors.secondary }}
                    />
                  </View>

                  <View style={{ padding: 10, marginTop: 10 }}>
                    <ScrollView>
                      <OrdersItem title="Unconfirmed orders" />
                      <OrdersItem title="In progress orders" />
                      <OrdersItem title="Recently completed orders" />
                      <OrdersItem title="Unconfirmed orders" />
                      <OrdersItem title="In progress orders" />
                      <OrdersItem title="Recently completed orders" />
                    </ScrollView>
                  </View>
                </View>
                {/* </SafeAreaView> */}
              </TabView.Item>
              <TabView.Item style={[appStyles.cardbottom, { width: "100%" }]}>
                <View style={[appStyles.row, { flexDirection: "column" }]}>
                  <View
                    style={[
                      dimen === "portrait" ? { right: -472 } : { right: -255 },
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
                      style={{ color: colors.bluelight }}
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
          {/* <View style={styles.row}>
          <View style={styles.col2}>
            <Button title="logout" color="#5856D6" onPress={logOut} />
            <Text>{JSON.stringify(user, null, 5)}</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="logout" color="#5856D6" onPress={logOut} />
            <Text>{JSON.stringify(user, null, 5)}</Text>
          </View>
        </View> */}
        </ScrollView>
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
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <View
        style={{
          backgroundColor: colors.primary,
          padding: 5,
          borderBottomLeftRadius: 3,
          borderTopLeftRadius: 3,
        }}
      >
        <Text style={{ color: colors.bluelight }}>12</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.nineth,
          borderBottomRightRadius: 3,
          borderTopRightRadius: 3,
          padding: 5,
          paddingLeft: 10,
        }}
      >
        <Text style={{ color: colors.greylight }}>{title}</Text>
      </View>
    </View>
  );
};
