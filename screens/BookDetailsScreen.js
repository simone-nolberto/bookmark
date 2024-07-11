import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function BookDetails({ navigation, route }) {

    const state = ({


        saved: false,
        check: true,
        imageUrl: "https://covers.openlibrary.org/b/id/",

        saveBookAsFavorite(book) {
            saved = true;
            console.log(book, route.params.favoriteBooks);
            route.params.favoriteBooks.push(book)
            console.log(route.params.favoriteBooks);
        },

    })


    return (

        <View style={styles.container}>

            <Text>Here you can find details about "{route.params.book.title}"</Text>
            <Text>Written by {route.params.book.author_name.map((author, index) => (
                <Text> {author}, </Text>
            ))} </Text>

            <Image style={{ width: 250, height: 250 }} source={state.imageUrl + route.params.book.cover_i + "-M" + ".jpg"}>

            </Image>
            <Button onPress={() => {
                state.saveBookAsFavorite(route.params.book);
            }} title="Save" ></Button>


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

});

