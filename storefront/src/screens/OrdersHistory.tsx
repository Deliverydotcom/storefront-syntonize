// import React, { useContext } from "react";
// import { Animated, Button, ScrollView, Text, View } from "react-native";
// import { appStyles, homeStyles } from "../theme";
// import { AuthContext } from "../context";

// import { useFade } from "../hooks";
// import { LinearGradient } from "expo-linear-gradient";
// import { StoreDataHeader } from "../components";

// export const OrdersHistory = () => {
//   const { user, token, logOut } = useContext(AuthContext);

//   const fadeAnim = useFade();
//   const styles = homeStyles(fadeAnim);

//   return (
//     <>
//       <Animated.View style={appStyles.app}>
//         <LinearGradient
//           colors={["#8EA8A6", "#FFFFFF", "#FFFFFF"]}
//           style={appStyles.linearGradient}
//           start={{ x: 0.2, y: 0.2 }}
//         >
//           <ScrollView>
//             <StoreDataHeader />
//             <Text style={[appStyles.sectionTitle, { marginTop: 20 }]}>
//               Orders History
//             </Text>
//             <View
//               style={[appStyles.whiteLine, { marginBottom: 8, marginTop: 12 }]}
//             />
//           </ScrollView>
//         </LinearGradient>
//       </Animated.View>
//     </>
//   );
// };

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
} from "react-native";
import { appStyles, homeStyles } from "../theme";
import { AuthContext } from "../context";
import { useFade } from "../hooks";
import { LinearGradient } from "expo-linear-gradient";
import { ListItem, StoreDataHeader } from "../components";
import { DATA, ItemData } from "../interfaces";

export const OrdersHistory = () => {
  const { user, token, logOut } = useContext(AuthContext);
  const layout = useWindowDimensions();
  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);

  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item, index }: { item: ItemData; index: any }) => {
    let colors = ["#F9F9F9", "#F3F3F3"];
    const backgroundColor = item.id === selectedId ? "#CA506E" : "transparent";
    const marginHeight = item.id === selectedId ? 3 : 3;
    const color = item.id === selectedId ? "white" : "black";

    return (
      <View
        style={{
          marginVertical: marginHeight,
          backgroundColor: colors[index % colors.length],
        }}
      >
        <ListItem
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      </View>
    );
  };

  return (
    <>
      <Animated.View style={appStyles.app}>
        <LinearGradient
          colors={["#8EA8A6", "#FFFFFF", "#FFFFFF"]}
          style={[appStyles.linearGradient, { height: layout.height }]}
          start={{ x: 0.2, y: 0.2 }}
        >
          <StoreDataHeader />
          <Text style={[appStyles.sectionTitle, { marginTop: 20 }]}>
            Orders History
          </Text>
          <View
            style={[appStyles.whiteLine, { marginBottom: 8, marginTop: 12 }]}
          />

          <SafeAreaView style={[stylesList.container]}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </SafeAreaView>
        </LinearGradient>
      </Animated.View>
    </>
  );
};

const stylesList = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
});
