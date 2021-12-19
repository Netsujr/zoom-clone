import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";


const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {/* Contact Container  */}
      <View style={styles.row}>
        {/* Image */}
        <View style={styles.starredIcon}>
          <AntDesign name="star" size={30} color="#efefef" />
        </View>
        {/* Text */}
        <Text style={styles.text}>
          Starred
        </Text>
      </View>
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  container: {

  },

  text: {

  },

  row: {
    flexDirection: "row",

  },

  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",

  }
})
