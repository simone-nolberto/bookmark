import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';



const state = ({

  books: [],
  check: true,
  apiBooksUrl: "https://openlibrary.org/search.json?q=",
  apiAuthorUrl: "https://openlibrary.org/search.json?author=",


  getBooksbyTitle(url) {
    axios.get(url)
      .then(response => {
        console.log(url);
        // console.log(response.data.docs);
        this.books = response.data.docs;
        console.log(this.books);
      })
  },

})




export default function App() {

  const [userInput, setState] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>Start typing something here</Text>
      <TextInput style={styles.input} placeholder='What book are you thinking at?' value={userInput} onChange={(event) => {
        setState(event.target.value);
      }}></TextInput>
      <Button onPress={() => {
        state.getBooksbyTitle(state.apiBooksUrl + userInput);
      }} title="Research"></Button>
      <StatusBar style="auto" />

      <View style={styles.row}>
        {state.books.map((book, index) => (

          <View style={styles.col} >
            <p key={index}>{book.title}</p>

          </View>

        ))}


      </View>

    </View >

  );

}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    gap: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    flex: 1,
    flexWrap: 'wrap'

  },

  col: {
    flex: 1,
    gap: 5,
    justifyContent: 'center',
    paddingBottom: 5,
  },

  card: {
    width: 350,
    height: 450,

  },

  input: {
    width: 500,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
