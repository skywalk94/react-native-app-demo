import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text } from 'react-native';

// slr
const Life = () => {
    // 避免用useEffect会重复执行
    useFocusEffect(
        React.useCallback(() => {
            console.log("进入页面触发")
            return () => {
                console.log("离开页面触发")
            };
        }, [])
    )
    return (
        <View>
            <Text>生命周期</Text>
        </View>
    )
}

export default Life;