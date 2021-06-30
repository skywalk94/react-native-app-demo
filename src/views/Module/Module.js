import React, { useState } from 'react';
import { ActivityIndicator, Button, FlatList, View, Text, Image, ImageBackground } from 'react-native';
import style from "./style"

const Module = () => {
    const [active, setActive] = useState(0);
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [fresh, setFresh] = useState(false)
    const endReach = () => {
        console.log("触发加载")
        setList(list.concat(+list.length + 1))
    }
    const Refresh = () => {
        console.log("触发刷新")
        setFresh(true)
        setTimeout(() => {
            setFresh(false)
        }, 50)
    }
    return (
        <FlatList
            ListHeaderComponent={
                <>
                    <Text>1.loading组件</Text>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text>2.按钮组件</Text>
                    <Button title="按钮" color="#f194ff" />
                    <Text>3.图片组件</Text>
                    <Image source={require('../../assets/img/react.png')} />
                    <ImageBackground style={{ width: 100, height: 100 }} source={require('../../assets/img/react.png')} >
                        <Text>3.背景图片组件</Text>
                    </ImageBackground>
                    <Text>.高性能列表组件,可做上拉加载，下拉刷新</Text>
                </>
            }
            ListFooterComponent={
                <Text>渲染到底部</Text>
            }
            ListEmptyComponent={
                <Text>数组为空时渲染</Text>
            }
            onEndReachedThreshold={0.1}
            onEndReached={() => endReach()}
            refreshing={fresh}
            onRefresh={() => Refresh()}
            data={list}
            keyExtractor={(item, index) => index} //指定key值
            extraData={active}  //确保正确触发列表更新
            renderItem={({ item, index }) => {
                return (
                    <View style={[style.content, { backgroundColor: active == index ? 'blue' : 'green' }]}>
                        <Text onPress={() => setActive(item)}>{item}</Text>
                    </View >
                )
            }}>
        </FlatList >
    );
}

export default Module;