import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
import routes from "./routes"

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Toast">
                {routes.map(item => {
                    return (
                        <Stack.Screen key={item.name} name={item.name} component={item.component}
                            options={Object.assign({ title: item.title }, item.options)} />
                    )
                })}
            </Stack.Navigator>
        </NavigationContainer>
    )
}