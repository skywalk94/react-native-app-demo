import React, { useState } from 'react';
import { View, Button, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
const images = [
    { url: 'http://img.netbian.com/file/2021/0615/small7afca70a01630451d1c474fd318df5c01623728557.jpg' },
    { url: 'http://img.netbian.com/file/2021/0605/smalld9fcb449fa428b1cc001b40527b990761622906649.jpg' },
    { url: 'http://img.netbian.com/file/2021/0527/small2998966e25f9370d55e4672ade1013dc1622123475.jpg' }
]

const Preview = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <View>
            <Button title="启动预览图片" onPress={() => setIsVisible(true)}></Button>
            <Modal visible={isVisible} transparent={true}>
                <ImageViewer enableSwipeDown menuContext={{ saveToLocal: '保存到本地', cancel: '取消' }} onSave={() => alert("点击了保存图片")} onSwipeDown={() => setIsVisible(false)} imageUrls={images} />
            </Modal>
        </View>
    );
}

export default Preview;