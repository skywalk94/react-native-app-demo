import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default () => {
    const navigation = useNavigation()
    const route = useRoute()

    useEffect(() => {
        navigation.setOptions({ title: `id为${route.params.id}的详情` })
    }, [])

    return (
        <View>
            <Text>详情</Text>
        </View>
    )
}