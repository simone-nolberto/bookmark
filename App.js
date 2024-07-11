import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetails from "./screens/BookDetails";
import HomeScreen from "./screens/HomeScreen";
import FavoriteBooks from "./screens/FavoriteBooks";



const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Bookmark'>

        <Stack.Screen name='Bookmark' component={HomeScreen}></Stack.Screen>

        <Stack.Screen name='BookDetails' component={BookDetails}></Stack.Screen>

        <Stack.Screen name='FavoriteBooks' component={FavoriteBooks}></Stack.Screen>


      </Stack.Navigator>

    </NavigationContainer>

  );

}

