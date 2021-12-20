import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import ChatHeader from './ChatHeader';

function Chat({ setModalVisible }) {

  const [messageText, setMessageText] = useState();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <ChatHeader setModalVisible={setModalVisible} />
        {/* message  */}
        <View style={styles.chatMessages}>

        </View>

        {/* typing the message  */}
        <View style={styles.chatFormContainer}>
          <Text style={{ color: "white" }}>Send to: Everyone</Text>
          <View style={styles.chatForm}>
            <TextInput
              style={styles.textInput}
              placeholder='Tap to Chat'
              value={messageText}
              setMessageText={setMessageText}
            />

          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",

  },

  chatMessages: {

  },

  chatFormContainer: {


  },

  chatForm: {


  },

  textInput: {

  }


});
