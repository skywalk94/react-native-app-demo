import React from 'react';
import { View, Text } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
    return (
        <View>
            <Text>文字占位</Text>
            <Text>文字占位</Text>
        </View>
    )
}

const Mine = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            //选中文字颜色
            activeTintColor: '#2C3167',
            //设置选中底部条颜色
            indicatorStyle: {
                backgroundColor: "#2C3167"
            }
        }}>
            <Tab.Screen name="导航1" component={HomeScreen} />
            <Tab.Screen name="导航2" component={HomeScreen} />
            <Tab.Screen name="导航3" component={HomeScreen} />
            <Tab.Screen name="导航4" component={HomeScreen} />
            <Tab.Screen name="导航5" component={HomeScreen} />
        </Tab.Navigator>
    );
}

export default Mine;