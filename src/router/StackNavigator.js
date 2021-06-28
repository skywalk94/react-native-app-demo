import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import router from "./index"
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            {
                router.map((item, index) => {
                    return (
                        <Stack.Screen key={index} name={item.name} component={item.component} options={{
                            title: item.title,
                            headerStyle: {
                                backgroundColor: '#fff',
                                height: 40
                            },
                            headerTitleStyle: {
                                color: '#000',
                                fontSize: 15
                            },
                            // headerShown: false, //不显示标题
                        }} />
                    )
                })
            }
        </Stack.Navigator>
    );
}

export default StackNavigator;