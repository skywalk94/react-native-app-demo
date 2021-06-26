import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Button } from 'react-native';

const Detail = (props) => {
    const [id, setId] = useState(0)
    useEffect(() => {
        setId(props.route.params.id)
    })

    return (
        <ScrollView>
            <Text>获取上个页传递的参数{id}</Text>
            <Button title="再跳转到详情" onPress={() => props.navigation.push("Detail", { id: id })}></Button>
            <Button title="返回上一层" onPress={() => props.navigation.goBack()}></Button>
            <Button title="直接返回到首页" onPress={() => props.navigation.navigate("Index")}></Button>
            <Button title="返堆栈中的第一个页面" onPress={() => props.navigation.popToTop()}></Button>
        </ScrollView>
    )
}

export default Detail;