import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from "./routes"

const Stack = createNativeStackNavigator()

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="">
                {routes.map(({ name, component, options }) => (
                    <Stack.Screen key={name} name={name} component={component} options={options} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    )
}