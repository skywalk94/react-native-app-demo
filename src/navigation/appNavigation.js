import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import routes from "./routes"

const Stack = createStackNavigator()
export default () => {
    const defaultOptions = {
        headerBackTitleVisible: false
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="" screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
                {routes.map(({ name, component, options }) => (
                    <Stack.Screen key={name} name={name} component={component} options={{ ...defaultOptions, ...options }} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    )
}