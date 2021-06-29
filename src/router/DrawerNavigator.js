import React from 'react';
import { Text, Button } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
    DrawerContentScrollView,
    createDrawerNavigator
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import TabNavigator from "./TabNavigator"

const getChildTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    return routeName
}

// 自定义抽屉内容
const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView >
            <Text>自定义抽屉的内容</Text>
            <Button title="跳转到详情" onPress={() => { props.navigation.navigate("Detail", { id: 123 }) }}></Button>
            <Button title="跳转到个人中心" onPress={() => { props.navigation.navigate("Mine") }}></Button>
        </DrawerContentScrollView>
    );
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
            <Drawer.Screen name="明知山" component={TabNavigator} options={({ route }) => ({
                title: getChildTitle(route),
            })}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;