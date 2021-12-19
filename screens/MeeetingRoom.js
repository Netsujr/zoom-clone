import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function MeeetingRoom() {

  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();


  return (
    <View style={styles.container}>
      {/* Start meeting button  */}
      <View style={styles.startMettingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder='Enter Name'
            placeholderTextColor='rgba(110, 190, 201, 0.3)'
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={roomId}
            placeholder='Enter Room ID'
            placeholderTextColor='rgba(110, 190, 201, 0.3)'
            onChangeText={text => setRoomId(text)}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.startMeetingButton}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Start Meeting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

{/* <Text>Meeting Room</Text> */ }
export default MeeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,

  },

  startMettingContainer: {

  },

  startMeetingButton: {
    width: 300,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7e3f8f",
    borderRadius: 15,
  },

  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
    marginTop: 15,
  },

  textInput: {
    color: "white",
    fontSize: 18,
  }
})
