import React from 'react';
import { ScrollView, Button } from 'react-native';

const Detail = (props) => {
    return (
        <ScrollView>
            <Button title="再跳转到详情" onPress={() => props.navigation.push("Detail")}></Button>
            <Button title="返回上一层" onPress={() => props.navigation.goBack()}></Button>
            <Button title="直接返回到首页" onPress={() => props.navigation.navigate("Index")}></Button>
        </ScrollView>
    )
}

export default Detail;