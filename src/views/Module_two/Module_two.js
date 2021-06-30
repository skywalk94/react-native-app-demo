import React, { useState, useCallback } from 'react';
import { View, Text, Pressable, RefreshControl, ScrollView, StatusBar, Switch, TouchableOpacity } from "react-native"
const Module_two = () => {
    const [refresh, setRefresh] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const onRefresh = useCallback(() => {
        setRefresh(true)
        setTimeout(() => {
            setRefresh(false)
        }, 300)
    }, [])
    return (
        <ScrollView
            bounces bouncesZoom
            refreshControl={
                <RefreshControl refreshing={refresh} colors={["red"]} tintColor="red" progressBackgroundColor="blue" onRefresh={() => onRefresh()} />
            }
        >
            <Pressable>
                {({ pressed }) => (
                    <Text>{pressed ? '按压' : '松开'}</Text>
                )}
            </Pressable>
            <Text>控制应用状态栏的组件。</Text>
            <StatusBar backgroundColor="red" hidden />
            <Switch value={isEnabled} trackColor={{ false: "#fff", true: "red" }} thumbColor="red" onValueChange={(e) => setIsEnabled(e)} />
            <TouchableOpacity >
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <Text>点击态效果</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default Module_two;