import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

function MeeetingRoom() {

  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();


  return (
    <View style={styles.container}>
      <View style={styles.startMettingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder='Enter Name'
            placeholderTextColor='#767476'
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={roomId}
            placeholder='Enter Room ID'
            placeholderTextColor='#767476'
            onChangeText={text => setRoomId(text)}
          />
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

  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },

  textInput: {
    color: "white",
    fontSize: 18,
  }
})
