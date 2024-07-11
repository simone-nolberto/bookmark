import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const state = ({

    books: [],
    favoriteBooks: [],
    loading: true,
    apiBooksUrl: "https://openlibrary.org/search.json?q=",
    imageUrl: "https://covers.openlibrary.org/b/id/",

    getBooksbyTitle(url) {
        axios.get(url)
            .then(response => {

                console.log(url);

                this.books = response.data.docs;
                console.log(this.books);
            })
    },

})


export default function HomeScreen() {

    const navigation = useNavigation();

    const [userInput, setState] = React.useState('');


    return (

        <View style={styles.container}>
            <Text>Start typing something here</Text>
            <TextInput style={styles.input} placeholder="Enter a key word" value={userInput} onChange={(event) => {
                setState(event.target.value);
            }}></TextInput>

            <View style={styles.actions}>
                <Button onPress={() => {
                    state.getBooksbyTitle(state.apiBooksUrl + userInput);
                }} title="Research"></Button>
                <StatusBar style="auto" />

                <Button title="Go to Favorites" onPress={() =>
                    navigation.navigate('FavoriteBooks', { favoriteBooks: state.favoriteBooks })
                }></Button>

            </View>

            <StatusBar style="auto" />

            {state.loading ?
                <ScrollView style={styles.results}>

                    {state.books.map((book, index) => (
                        <View style={styles.card}>
                            <Text> Title: {book.title}</Text>
                            {/* <Text> Written by: {book.author_name}</Text> */}
                            <Text>Written by {book.author_name.map((author, index) => (
                                <Text> {author}, </Text>
                            ))} </Text>
                            <Image style={{ width: 250, height: 250 }} source={state.imageUrl + book.cover_i + "-M" + ".jpg"}>

                            </Image>

                            <Button title="Go to Details" onPress={() =>
                                navigation.navigate('BookDetails', { book: book, favoriteBooks: state.favoriteBooks })
                            }>
                            </Button>

                        </View>
                    ))}

                </ScrollView> :


                <Text>Loading results...</Text>



            }



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
        padding: 15,
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
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    results: {
        marginTop: 50,

    },

    actions: {
        flex: 1,
        gap: 10,
        alignItems: 'flex-start',
        flexDirection: 'row',

    }


})
