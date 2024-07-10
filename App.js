import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
// import React, { useState } from 'react';
// import { Text, TextInput, View } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export const state = ({

  userInput: '',
  books: [],
  check: true,
  apiBooksUrl: "https://openlibrary.org/search.json?q=",

  getBooks(url) {
    axios.get(url)
      .then(response => {
        // console.log(response.data.docs);
        this.books = response.data.docs;
        console.log(this.books);
      })
  },

})


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Here we are going to view all of the books</Text>
      <button onClick={state.getBooks(state.apiBooksUrl + "Fahrenheit+451")}>ricerca</button>
      <StatusBar style="auto" />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
