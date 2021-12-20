import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import StartMeeting from '../components/StartMeeting';
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Chat from '../components/Chat';
// import { TouchableOpacity } from 'react-native-web';

const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "rgba(0, 178, 202, 0.5)"
  },
  {
    id: 2,
    name: "video-camera",
    title: "Video",
    // customColor: "rgba(0, 178, 202, 0.5)"
  },
  {
    id: 3,
    name: "upload",
    title: "Share",
    // customColor: "rgba(0, 178, 202, 0.5)"
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
    // customColor: "rgba(0, 178, 202, 0.5)"
  },
];

let socket;

function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const __startCamera = async () => {
    // read up on async functions Javascript
    const { status } = await Camera.requestCameraPermissionsAsync();
    // requestPermissions function outdated, new func /\
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access Denied");
    }
  }

  const joinRoom = () => {
    __startCamera();
    socket.emit('join-room', { roomId: roomId, userName: name });
  };

  useEffect(() => {
    // make sure to change the url during deployment
    socket = io("http://3003-2407-c800-1303-0-65b7-ba3-6887-b8ac.ngrok.io");
    socket.on('connection', () => console.log("connected"))
    socket.on("all-users", users => {
      console.log(users)
      setActiveUsers(users)
      // console.log("Active Users");
      // users = users.filter(user => (user.Username != name));
    });
    console.log("hello again");
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle='={"fullScreen}'
            visible={modalVisible}
            onRequestClose={() => {
              // Alert.alert("Modal has been clsoed.");
              setModalVisible(!modalVisible);
            }}>

            <Chat
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </Modal>

          {/* active users  */}
          <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type={"front"}
                style={{
                  // width: "100%", height: "50%"
                  width: "100%",
                  height: activeUsers.lenght <= 1 ? "100%" : "50%"
                }}>
                {/* resizeMode: activeUsers.lenght == 0 ? null : "contain" */}
              </Camera>
              {activeUsers.filter(user => (user.Username != name)).map((user, index) =>
                <View key={index} style={styles.activeUserContainer}>
                  <Text style={{ color: "white" }}>{user.userName}</Text>
                </View>
              )}
            </View>
          </View>
          {/* // this is the Footer  */}
          <View style={styles.menu}>
            {menuIcons.map((icon, index) =>
              <TouchableOpacity key={index} style={styles.tile}>
                <FontAwesome name={icon.name} size={24} color={"rgba(0, 178, 202, 0.5)"} />
                <Text style={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.tile}>
              <FontAwesome name={"comment"} size={24} color={"rgba(0, 178, 202, 0.5)"} />
              <Text style={styles.textTile}>Chat</Text>
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
  )
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },

  textTile: {
    color: 'white',
    marginTop: 10
  },

  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15
  },

  cameraContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    flex: 1
  },

  activeUsersContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: 'center',
    width: "100%",
    // height: "100%"
  },

  activeUserContainer: {
    // borderColor: "gray",
    // borderWidth: 1,
    // flex: 1,
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
});
