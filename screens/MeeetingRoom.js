import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import StartMeeting from '../components/StartMeeting';
import { io } from "socket.io-client";

let socket;

function MeeetingRoom() {

  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();

  const joinRoom = () => {
    socket.emit('join-room', { roomId: roomId, userName: name });
  };

  useEffect(() => {
    // make sure to change the url during deployment
    socket = io("http://22bc-175-177-41-148.ngrok.io");
    socket.on('connection', () => console.log("connected"))
    // console.log("hello again")
  }, []);

  return (
    <View style={styles.container}>
      {/* Start meeting button  */}
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
        joinRoom={joinRoom}
      />
    </View>
  );
}

{/* <Text>Meeting Room</Text> */ }
export default MeeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  }
})
