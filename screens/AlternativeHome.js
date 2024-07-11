import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import axios from 'axios';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const state = ({

    favoriteBooks: [],
    check: true,
    apiBooksUrl: "https://openlibrary.org/search.json?q=",
    imageUrl: "https://covers.openlibrary.org/b/id/",

})



export default function AlternativeHome({ navigation, route }) {

    const searchBook = (query) => {
        let results = [];
        let url = state.apiBooksUrl + query;

        axios.get(url)
            .then(response => {

                console.log(url);
                results = response.data.docs;

                results.forEach(book => {

                    if (book.title.includes(query)) {
                        results = [];
                        console.log(book.title);
                        results.push(book);
                    } else {
                        results = [];
                    }
                });

                console.log(results);
            })


        return results;
    };


    const [userInput, setUserInput] = useState("");
    const [books, setBooks] = useState([]);
    const handleOnChangeText = (text) => {
        setUserInput(text);
        const results = searchBook(text);
        setBooks(results);
    };

    return (

        <View style={styles.container}>
            <Text>Start typing something here</Text>
            <TextInput
                placeholder="Enter a book name"
                onChangeText={handleOnChangeText}
                value={userInput}
                style={{
                    width: 400,
                    height: 40,
                    borderColor: "black",
                    borderWidth: 1
                }}
            />

            <StatusBar style="auto" />

            <Button title="Go to Favorites" onPress={() =>
                navigation.navigate('FavoriteBooks', { favoriteBooks: state.favoriteBooks })
            }></Button>
            <StatusBar style="auto" />

            {books.length > 0 && (
                <ScrollView style={styles.results}>

                    {books.map((book, index) => (
                        <View style={styles.card}>
                            <Text> Title: {book.title}</Text>
                            <Text> Written by: {book.author_name}</Text>
                            <Image style={{ width: 250, height: 250 }} source={state.imageUrl + book.cover_i + "-M" + ".jpg"}>

                            </Image>

                            <Button title="Go to Details" onPress={() =>
                                navigation.navigate('BookDetails', { book: book, favoriteBooks: state.favoriteBooks })
                            }>
                            </Button>

                        </View>
                    ))}

                </ScrollView>
            )}


        </View >


    );
};


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

    }
})


