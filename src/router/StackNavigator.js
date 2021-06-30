import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const Stack = createStackNavigator();
import router from "./index"
const StackNavigator = () => {
    //从子导航器获取路由名称
    const getChildTitle = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        return routeName
    }
    return (
        <Stack.Navigator>
            {
                router.map((item, index) => {
                    return (
                        <Stack.Screen key={index} name={item.name} component={item.component} options={({ route }) => ({
                            title: getChildTitle(route) || item.title,
                            headerStyle: {
                                backgroundColor: '#fff',
                                height: 40
                            },
                            headerTitleStyle: {
                                color: '#000',
                                fontSize: 15
                            },
                            headerShown: item.headerShown
                        })} />
                    )
                })
            }
        </Stack.Navigator>
    );
}

export default StackNavigator;