import React from 'react';
import { View, Text, Button } from 'react-native';
import {
    DrawerContentScrollView,
    createDrawerNavigator
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView>
            <Text>自定义抽屉的内容</Text>
            <Button title="跳转到详情" onPress={() => { props.navigation.navigate("Detail", { id: 123 }) }}></Button>
        </DrawerContentScrollView>
    );
}

// 主体页面
const Main = (props) => {
    const goDetail = () => {
        props.navigation.navigate("Detail", {
            id: 123 //传递参数
        })
    }
    return (
        <View>
            <Button title="打开抽屉" onPress={() => props.navigation.openDrawer()}></Button>
            <Button title="路由传参详情" onPress={() => goDetail()}></Button>
            <Button title="生命周期函数" onPress={() => props.navigation.navigate("Life")}></Button>
            <Button title="组件" onPress={() => { props.navigation.navigate("Module") }}></Button>
            <Button title="组件1" onPress={() => { props.navigation.navigate("Module_one") }}></Button>
            <Button title="组件2" onPress={() => { props.navigation.navigate("Module_two") }}></Button>
            <Button title="上传图片" onPress={() => { props.navigation.navigate("Photo") }}></Button>
            <Button title="联系人" onPress={() => { props.navigation.navigate("Contacts") }}></Button>
            <Button title="预览图片" onPress={() => { props.navigation.navigate("Preview") }}></Button>
        </View>
    )
}

const Index = (props) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
            <Drawer.Screen name="drawer" component={Main} />
        </Drawer.Navigator>
    );
}

export default Index;