import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import router from "./src/router/index"

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          router.map((item, index) => {
            return (
              <Stack.Screen key={index} name={item.name} component={item.component} options={{ title: item.title }} />
            )
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
