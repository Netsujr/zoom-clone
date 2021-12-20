import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


const ChatHeader = ({ setModalVisible }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setModalVisible(false)}>
        <Text style={styles.buttonText}>Close</Text>
      </Pressable>
      <Text style={styles.heading}>Chat</Text>
      <Entypo name="bell" size={25} color="white" />
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,

  },

  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: "700"
  },

  buttonText: {
    color: "white",
    fontSize: 20,

  }

});
