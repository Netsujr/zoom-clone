import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StartMeeting from '../components/StartMeeting';

function MeeetingRoom() {

  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();


  return (
    <View style={styles.container}>
      {/* Start meeting button  */}
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
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
