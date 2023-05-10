import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>中心</Text>
            <Button title="跳转到详情" onPress={() => navigation.navigate('detail', { id: 123 })} />
        </View>
    )
}