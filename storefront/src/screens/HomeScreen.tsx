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
import { useFade } from "../hooks";
import { Tab, TabView } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

export const HomeScreen = () => {
  const { user, token, logOut } = useContext(AuthContext);
  const [index, setIndex] = React.useState(0);
  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);

  return (
    <>
      <Animated.View style={appStyles.app}>
        <ScrollView>
          <View style={appStyles.row}>
            <Text style={{ fontSize: 22 }}>User Random Store</Text>
          </View>
          <View style={appStyles.row}>
            <View
              style={[
                appStyles[`2col`],

                styles.backgroundDataSettings,
                {
                  marginTop: 10,
                  padding: 10,
                  alignItems: "flex-start",
                },
              ]}
            >
              <Text style={[styles.miniText, { marginBottom: 10 }]}>
                Default Order Estimates
              </Text>

              <Text style={styles.testDataSettings}>
                Delivery: <Text style={{ fontWeight: "bold" }}>60 mins</Text>
              </Text>

              <Text style={styles.testDataSettings}>
                Pickup: <Text style={{ fontWeight: "bold" }}>15 mins</Text>
              </Text>
            </View>
            <View
              style={[
                appStyles[`2col`],
                styles.backgroundSound,
                {
                  marginTop: 10,
                  marginLeft: 10,
                  padding: 10,
                  paddingLeft: 25,
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
          <View style={{ height: 400, marginTop: 10 }}>
            <Tab
              value={index}
              onChange={(e) => setIndex(e)}
              disableIndicator
              variant="primary"
            >
              <Tab.Item
                containerStyle={{ backgroundColor: colors.sixeth }}
                title={<NowData />}
                titleStyle={{ fontSize: 12 }}
              />
              <Tab.Item
                containerStyle={{ backgroundColor: colors.seventh }}
                title={<LaterData />}
                titleStyle={{ fontSize: 12 }}
              />
            </Tab>

            <TabView
              containerStyle={{ overflow: "scroll" }}
              value={index}
              onChange={setIndex}
              animationType="spring"
            >
              <TabView.Item style={{ width: "100%" }}>
                {/* <SafeAreaView> */}
                <View
                  style={[appStyles.row, { flex: 1, flexDirection: "column" }]}
                >
                  <View style={{ backgroundColor: colors.sixeth }}>
                    <Text></Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text>Unconfirmed Orders</Text>
                  </View>
                  <View>
                    <Text>In Progress Orders</Text>
                  </View>
                  <View>
                    <Text>Recently completed orders</Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text>Unconfirmed Orders</Text>
                  </View>
                  <View>
                    <Text>In Progress Orders</Text>
                  </View>
                  <View>
                    <Text>Recently completed orders</Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text>Unconfirmed Orders</Text>
                  </View>
                  <View>
                    <Text>In Progress Orders</Text>
                  </View>
                  <View>
                    <Text>Recently completed orders</Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text>Unconfirmed Orders</Text>
                  </View>
                  <View>
                    <Text>In Progress Orders</Text>
                  </View>
                  <View>
                    <Text>Recently completed orders</Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text>Unconfirmed Orders</Text>
                  </View>
                  <View>
                    <Text>In Progress Orders</Text>
                  </View>
                  <View>
                    <Text>Recently completed orders</Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text>Unconfirmed Orders</Text>
                  </View>
                  <View>
                    <Text>In Progress Orders</Text>
                  </View>
                  <View>
                    <Text>Recently completed orders</Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text>Unconfirmed Orders</Text>
                  </View>
                  <View>
                    <Text>In Progress Orders</Text>
                  </View>
                  <View>
                    <Text>Recently completed orders</Text>
                  </View>
                </View>
                {/* </SafeAreaView> */}
              </TabView.Item>
              <TabView.Item style={{ width: "100%" }}>
                <View style={[appStyles.row, { flexDirection: "column" }]}>
                  <View style={{ backgroundColor: colors.seventh }}>
                    <Text></Text>
                  </View>
                  <View>
                    <Text>Orders for later</Text>
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
      <Text style={styles.textNumber}>Now</Text>
      <Text style={styles.bigNumber}>0</Text>
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
