import React from "react";
import { ItemData } from "../interfaces";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appStyles } from "../theme";
import Icon from "react-native-vector-icons/Ionicons";

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

export const ListItemManage = ({
  item,
  onPress,
  backgroundColor,
  textColor,
}: ItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[stylesListItem.item, { backgroundColor }]}
    >
      <View style={[appStyles.row, { justifyContent: "space-between" }]}>
        <View
          style={[
            appStyles.column,
            { marginHorizontal: 10, alignItems: "center" },
          ]}
        >
          <Text>
            <Icon name="alert-circle" size={25} />
          </Text>
          <Text style={[stylesListItem.subtTwo]}>P</Text>
        </View>
        <View style={[appStyles.column]}>
          <Text style={[stylesListItem.title, { color: textColor }]}>
            {item.title}
          </Text>
          <Text style={[stylesListItem.subtOne, { color: textColor }]}>
            Received at 9:01PM
          </Text>
          <Text style={[stylesListItem.cancelledText, { color: textColor }]}>
            cancelled at 9:01
          </Text>
        </View>

        <View style={[appStyles.column, { marginHorizontal: 5 }]}>
          <Text style={[stylesListItem.phone, { color: textColor }]}>
            (917) 460-6184
          </Text>
          <Text style={[stylesListItem.subtOne, { color: textColor }]}>
            Katie Filibert
          </Text>
          <Text style={[stylesListItem.subtTwo, { color: textColor }]}>
            0,0 miles away
          </Text>
        </View>
        <View style={[appStyles.column, { marginHorizontal: 12 }]}>
          <Text style={[stylesListItem.title, { color: textColor }]}>
            $12.17
          </Text>
          <Text style={[stylesListItem.subtTwo, { color: textColor }]}>
            #65874584
          </Text>
          <View style={stylesListItem.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={stylesListItem.button}
              onPress={() => {}}
            >
              <Text style={stylesListItem.buttonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesListItem = StyleSheet.create({
  item: {
    paddingVertical: 15,
  },
  title: {
    fontSize: 14,
  },
  phone: {
    fontSize: 12,
  },
  subtOne: { fontSize: 11, marginVertical: 3 },
  subtTwo: { fontSize: 10 },
  cancelledText: { fontSize: 12, color: "red" },
  buttonContainer: {
    alignItems: "center",
    marginTop: 8,
  },
  button: {
    borderWidth: 0,
    borderColor: "transparent",
    backgroundColor: "#f29933",
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  buttonText: {
    fontSize: 12,
    color: "white",
  },
});
