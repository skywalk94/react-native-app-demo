import React from 'react';
import { View, Button } from 'react-native';

const Index = (props) => {
    console.log(props)
    const goDetail = () => {
        props.navigation.navigate("Detail", {
            id: 123 //传递参数
        })
    }
    return (
        <View>
            <Button title="打开抽屉" onPress={() => props.navigation.openDrawer()}></Button>
            <Button title="跳转到详情" onPress={() => goDetail()}></Button>
            <Button title="跳转到生命周期函数" onPress={() => props.navigation.navigate("Life")}></Button>
        </View>
    );
}

export default Index;