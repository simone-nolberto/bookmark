import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetails from "./screens/BookDetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import FavoriteBooks from "./screens/FavoritesScreen";
// import AlternativeHome from "./screens/AlternativeHome";




const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Bookmark'>

        {/* <Stack.Screen name='AlternativeHome' component={AlternativeHome}></Stack.Screen> */}

        <Stack.Screen name='Bookmark' component={HomeScreen}></Stack.Screen>

        <Stack.Screen name='BookDetails' component={BookDetails}></Stack.Screen>

        <Stack.Screen name='FavoriteBooks' component={FavoriteBooks}></Stack.Screen>


      </Stack.Navigator>

    </NavigationContainer>

  );

}

