import { useState, useRef } from 'react'
import ViewShot from "react-native-view-shot"
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import * as MediaLibrary from 'expo-media-library'

export default () => {
    const ctxRef = useRef()
    const [imgUri, setImgUri] = useState()

    const createImg = () => {
        ctxRef.current.capture().then(uri => {
            setImgUri(uri)
        })
    }

    const saveImg = async (item) => {
        const permission = await MediaLibrary.requestPermissionsAsync()
        if (!permission.granted) return
        const asset = await MediaLibrary.createAssetAsync(item)
        MediaLibrary.createAlbumAsync('Images', asset, false).then(() => {
            console.log('保存成功')
        }).catch(() => {
            console.log('保存失败')
        })
    }

    return (
        <View>
            <ViewShot ref={ctxRef} options={{ fileName: `文件名${Date.now()}`, format: "png", result: "tmpfile" }}>
                <View style={styles.content}>
                    <Text>文字占位,文字占位,文字占位,文字占位,文字占位,文字占位</Text>
                    <Text>---------------------手动分割线---------------------</Text>
                    <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>
            </ViewShot>
            <Button title='生成图片' onPress={() => createImg()} />
            <Image resizeMode="contain" style={styles.pic} source={{ uri: imgUri }} />
            {imgUri && <Button title='保存图片' onPress={() => saveImg(imgUri)} />}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#ffffff",
        padding: 20,
    },
    logo: {
        width: 50,
        height: 50,
    },
    pic: {
        width: "100%",
        height: 200,
    }
})