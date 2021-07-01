import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const Photo = () => {
    const [imgs, setImgs] = useState([])

    const addPhoto = () => {
        launchImageLibrary({
            mediaType: "photo", // 'photo' or 'video' or 'mixed'
            selectionLimit: 0,// 1为一张，0不限制数量
            includeBase64: true
        }, res => {
            setImgs(res.assets)
        })
    }

    const addVideo = () => {
        launchImageLibrary({
            mediaType: "video",
            selectionLimit: 1,
        }, res => {
            console.log(res)
        })
    }

    const tackPhoto = () => {
        launchCamera({
            mediaType: "photo",
            cameraType: "back"
        }, res => {
            console.log(res)
        })
    }
    return (
        <View>
            <Button title="启动图库选择图像" onPress={() => addPhoto()}></Button>
            <Button title="启动图库选择视频" onPress={() => addVideo()}></Button>
            <Button title="启动相机拍摄图片" onPress={() => tackPhoto()}></Button>
            {
                imgs.map((item, index) => {
                    return (
                        <View key={index}>
                            <Image style={{ width: 50, height: 50 }} source={{ uri: item.uri }}></Image>
                        </View>
                    )
                })
            }
        </View>
    );
}

export default Photo;