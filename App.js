import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Screen3 from './screens/screen3';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
      />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  </NavigationContainer>   
    
  );
}