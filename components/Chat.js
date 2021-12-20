import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ChatHeader from './ChatHeader';



function Chat({ setModalVisible }) {
  return (
    <View style={styles.container}>
      <ChatHeader setModalVisible={setModalVisible}/>
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({

  container: {

  },

});
