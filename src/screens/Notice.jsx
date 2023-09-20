import { useEffect } from 'react'
import { Button } from 'react-native'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
})

export default function App() {
    useEffect(() => {
        noticeAuth()
        // 监听用户点击推送消息
        const subscription = Notifications.addNotificationResponseReceivedListener(res => {
            const { data } = res.notification.request.content
            const { param } = data
            console.log(param)
        })
        return () => subscription.remove()
    }, [])

    // 消息推送权限
    const noticeAuth = async () => {
        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync()
            let finalStatus = existingStatus
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync()
                finalStatus = status
            }
            if (finalStatus !== 'granted') {
                alert('推送消息失败!')
                return
            }
            // projectId：https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
            await Notifications.getExpoPushTokenAsync({ projectId: Constants.expoConfig.extra.eas.projectId })
        } else {
            console.log('真机才有消息推送')
        }
    }

    const pushNotice = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "推送标题",
                body: '推送内容',
                data: { param: '推送参数' },
            },
            trigger: null,
        })
    }

    return (
        <>
            <Button title="消息推送" onPress={() => pushNotice()} />
        </>
    )
}




