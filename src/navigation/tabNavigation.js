import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
import { Image, StyleSheet } from "react-native"

const tabBar = [
    {
        name: "首页",
        component: require("../screens/Index").default,
        icon: require("../assets/imgs/home.png"),
        selectIcon: require("../assets/imgs/home_1.png")
    },
    {
        name: "中心",
        component: require("../screens/Center").default,
        icon: require("../assets/imgs/center.png"),
        selectIcon: require("../assets/imgs/center_1.png")
    },
    {
        name: "我的",
        component: require("../screens/User").default,
        icon: require("../assets/imgs/user.png"),
        selectIcon: require("../assets/imgs/user_1.png")
    },
]

export default () => {
    return (
        <Tab.Navigator screenOptions={() => ({ tabBarActiveTintColor: '#1296db', tabBarInactiveTintColor: '#333333' })}>
            {tabBar.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.name} component={item.component}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Image source={focused ? item.selectIcon : item.icon} style={styles.image} />
                            ),
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20,
    },
})