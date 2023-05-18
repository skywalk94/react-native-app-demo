import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default () => {
    const navigation = useNavigation()

    return (
        <>
            <Button title='自定义底部弹窗' onPress={() => navigation.navigate('CustomPop')} />
            <Button title='Drawer' onPress={() => navigation.navigate('Drawer')} />
            <Button title='Tab选项卡' onPress={() => navigation.navigate('Tab')} />
            <Button title='Picker选择器' onPress={() => navigation.navigate('Picker')} />
        </>
    )
}
