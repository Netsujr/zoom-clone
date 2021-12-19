import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#00b2ca"
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join"
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule"
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen"
  },
]

function MenuButtons({ navigation }) {

  const openMeeting = () => {
    navigation.navigate("Room")
  }

  return (
    <View style={styles.container}>
      {items.map((item, index) => <View
        key={index}
        style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => openMeeting()}
          style={{
            // ... unpacks the style of the button
            ...styles.button,
            // checks if items has a custom color, otherwise uses set color
            backgroundColor: item.customColor ? item.customColor : "#7e3f8f"
          }}>
          <FontAwesome name={item.name} size={23} color={"#efefef"} />
        </TouchableOpacity>
        <Text style={styles.menuText}>{item.title}</Text>
      </View>
      )}
    </View>
  );
}

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  buttonContainer: {
    alignItems: "center",
    // flex 1 spaces them out evenly, stretches entire screen
    flex: 1
  },

  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600"
  },

  button: {
    width: 50,
    height: 50,
    // backgroundColor: "blue",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  }
})
