import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default () => {
    const navigation = useNavigation()

    return (
        <>
            <Button title='自定义底部弹窗' onPress={() => navigation.navigate('CustomPop')} />
        </>
    )
}
