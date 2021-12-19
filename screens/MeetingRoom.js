import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView } from 'react-native';
import StartMeeting from '../components/StartMeeting';
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import { TouchableOpacity } from 'react-native-web';
import { FontAwesome } from "react-native-vector-icons/FontAwesome";

let socket;

function MeetingRoom() {

  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState();
  const [startCamera, setStartCamera] = useState(false);

  const __startCamera = async () => {
    // read up on async functions Javascript
    const { status } = await Camera.requestCameraPermissionsAsync();
    // requestPermissions function outdated, new func /\
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access Denied");
    }
  };

  const joinRoom = () => {
    __startCamera();
    socket.emit('join-room', { roomId: roomId, userName: name });
  };

  useEffect(() => {
    // make sure to change the url during deployment
    socket = io("http://22bc-175-177-41-148.ngrok.io");
    socket.on('connection', () => console.log("connected"));
    socket.on("all-users", users => {
      console.log("Active Users");
      console.log(users);
      setActiveUsers(users);
    });
    // console.log("hello again")
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView>
          <Camera
            type={"front"}
            style={{ width: "100%", height: 600 }}>
          </Camera>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.tile}
            >
              <FontAwesome name={"microphone"} size={24} color={"rgba(0, 178, 202, 0.5)"} />
              <Text style={styles.textTile}>Mute</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        // {/* Start meeting button  */}
        // Start meeting section before camera is activated
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )
      }
    </View>
  );
};

{/* <Text>Meeting Room</Text> */ }
export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  menu: {

  },
  textTile: {

  }
});
