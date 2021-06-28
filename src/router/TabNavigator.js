import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { Image, StyleSheet } from "react-native"

const tabbar = [
    {
        name: "首页",
        component: require("../views/Index/Index").default,
        icon: require("../assets/img/1.png"),
        selectIcon: require("../assets/img/s1.png")
    },
    {
        name: "我的",
        component: require("../views/Mine/Mine").default,
        icon: require("../assets/img/2.png"),
        selectIcon: require("../assets/img/s2.png")
    },
]

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#317AFF',
            }}>
            {
                tabbar.map((item, index) => {
                    return (
                        <Tab.Screen name={item.name} component={item.component}
                            options={{
                                tabBarIcon: ({ focused }) => (
                                    <Image source={focused ? item.selectIcon : item.icon} style={[styles.image]} />
                                ),
                            }}
                        />
                    )
                })
            }
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 19,
        height: 18,
    },
});

export default TabNavigator;