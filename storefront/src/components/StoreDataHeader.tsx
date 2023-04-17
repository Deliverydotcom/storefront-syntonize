import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { appStyles, homeStyles } from "../theme";
import { useFade } from "../hooks";

export const StoreDataHeader = () => {
  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);

  return (
    <>
      <View style={[appStyles.whiteLine, { marginBottom: 8 }]} />
      <View style={appStyles.row}>
        <Text style={{ fontSize: 16, color: "white" }}>User Random Store</Text>
      </View>
      <View style={[appStyles.column, { marginTop: 6, marginBottom: 6 }]}>
        <View>
          <Text style={[styles.miniText, { marginBottom: 3, color: "white" }]}>
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
          style={[appStyles.whiteLine, { marginTop: 12, marginBottom: 8 }]}
        />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text style={styles.textforIcons}>
            <Icon name="ellipse" style={{ color: "#AFCA0B" }} size={10} /> Open
          </Text>
          <Text style={styles.textforIcons}>
            <Icon name="ellipse" style={{ color: "#AFCA0B" }} size={10} /> Sound
            On
          </Text>
          <Text style={styles.textforIcons}>
            <Icon name="ellipse" style={{ color: "#AFCA0B" }} size={10} /> 10
            Griffin RD
          </Text>
        </View>
      </View>
    </>
  );
};
