import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import ChatHeader from './ChatHeader';



function Chat({ setModalVisible }) {
  return (
    <SafeAreaView style={ {height: "100%"} }>
      <View style={styles.container}>
        <ChatHeader setModalVisible={setModalVisible} />
      </View>
    </SafeAreaView>
  );
}

export default Chat;

const styles = StyleSheet.create({

  container: {

  },

});
