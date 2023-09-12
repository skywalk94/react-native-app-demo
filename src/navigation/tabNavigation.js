import React from 'react'
import { Image, StyleSheet } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

const tabBar = [
    {
        name: "Index",
        title: "首页",
        component: require("../screens/Index").default,
        icon: require("../assets/imgs/index.png"),
        selectIcon: require("../assets/imgs/index_1.png")
    },
    {
        name: "Center",
        title: "中心",
        component: require("../screens/Center").default,
        icon: require("../assets/imgs/center.png"),
        selectIcon: require("../assets/imgs/center_1.png")
    },
    {
        name: "User",
        title: "我的",
        component: require("../screens/User").default,
        icon: require("../assets/imgs/user.png"),
        selectIcon: require("../assets/imgs/user_1.png")
    },
]

export default () => {
    return (
        <Tab.Navigator screenOptions={() => ({ tabBarActiveTintColor: '#1296db', tabBarInactiveTintColor: '#333333' })}>
            {tabBar.map(({ name, title, component, icon, selectIcon }) => (
                <Tab.Screen key={name} name={name} component={component}
                    options={{
                        title: title,
                        tabBarLabel: title,
                        tabBarIcon: ({ focused }) => (
                            <Image source={focused ? selectIcon : icon} style={styles.image} />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20,
    },
})