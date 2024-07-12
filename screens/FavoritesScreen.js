import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function FavoriteBooks({ navigation, route }) {

    const state = ({

        check: true,
        imageUrl: "https://covers.openlibrary.org/b/id/",

        removeBookFromFavorites(index) {
            console.log(index, route.params.favoriteBooks);
            route.params.favoriteBooks.splice(index, 1);
            console.log(route.params.favoriteBooks);
        },

    })

    return (

        <View style={styles.container}>

            {

                route.params.favoriteBook.length > 0 ?
                    <ScrollView>

                        {route.params.favoriteBooks.map((favoriteBook, index) => (
                            <View style={styles.card}>
                                <Text> Title: {favoriteBook.title}</Text>
                                <Text> Written by: {favoriteBook.author_name}</Text>
                                <Image style={{ width: 250, height: 250 }} source={state.imageUrl + favoriteBook.cover_i + "-M" + ".jpg"}>

                                </Image>


                                <Button onPress={() => {
                                    state.removeBookFromFavorites(index);
                                }} title="Remove" ></Button>

                            </View>
                        ))}


                    </ScrollView> :

                    <Text>Here you can find all of the books you saved</Text>

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

});