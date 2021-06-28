import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ScrollView, Text, Button } from 'react-native';


const Detail = (props) => {
    const [id, setId] = useState(0)
    useEffect(() => {
        setId(props.route.params.id)
    })

    //路由与组件之间通讯,可以覆盖配置
    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: "不用router模块的title"
        });
    }, [props.navigation]);

    return (
        <ScrollView>
            <Text>获取上个页传递的参数{id}</Text>
            <Button title="再跳转到详情" onPress={() => props.navigation.push("Detail", { id: id })}></Button>
            <Button title="返回上一层" onPress={() => props.navigation.goBack()}></Button>
            <Button title="直接返回到首页" onPress={() => props.navigation.navigate("Index")}></Button>
            <Button title="直接回到第一个页面" onPress={() => props.navigation.popToTop()}></Button>
        </ScrollView>
    )
}

export default Detail;