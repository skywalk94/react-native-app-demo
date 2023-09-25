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
            <Button title='Sheet弹窗' onPress={() => navigation.navigate('Sheet')} />
            <Button title='轮播' onPress={() => navigation.navigate('Carousel')} />
            <Button title='Toast提醒' onPress={() => navigation.navigate('Toast')} />
            <Button title='预览图片' onPress={() => navigation.navigate('Preview')} />
            <Button title='Axios请求' onPress={() => navigation.navigate('Axios')} />
            <Button title='视图层生成图片' onPress={() => navigation.navigate('ViewShot')} />
            <Button title='消息推送' onPress={() => navigation.navigate('Notice')} />
            <Button title='图表' onPress={() => navigation.navigate('Chart')} />
        </>
    )
}
