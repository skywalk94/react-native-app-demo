import  { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
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
            <Button title="跳转到首页" onPress={() => navigation.navigate('首页')} />
        </View>
    )
}