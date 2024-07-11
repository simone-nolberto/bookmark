import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function BookDetails({ navigation, route }) {

    return (

        <View style={styles.container}>

            <Text>Here you can find details about "{route.params.book.title}"</Text>
            <Text>Written by {route.params.book.author_name.map((author, index) => (
                <Text> {author} </Text>
            ))} </Text>



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

