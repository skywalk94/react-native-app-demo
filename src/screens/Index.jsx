import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>首页</Text>
            <Button title="跳转到详情" onPress={() => navigation.navigate('detail', { id: 123 })} />
        </View>
    )
}