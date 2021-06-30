import React, { useState } from 'react';
import { Image, Text, KeyboardAvoidingView, TextInput, ScrollView, Modal, Button } from "react-native"
const Module_one = () => {
    const [name, setName] = useState("")
    const [show, setShow] = useState(false)
    return (
        <ScrollView>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "heighttrue"}>
                <TextInput placeholder="请输入名字" value={name} onChangeText={(text) => setName(text)} />
                <TextInput placeholder="密码" secureTextEntry />
                <TextInput placeholder="文本域" multiline />
                <Text>图片是用来占位的，为了查看KeyboardAvoidingView组件的用法</Text>
                <Image source={require('../../assets/img/react.png')} />
                <Image source={require('../../assets/img/react.png')} />
                <Image source={require('../../assets/img/react.png')} />
                <Button onPress={() => setShow(true)} title="打开Modal,效果有点类似于popUp效果"></Button>
                <Modal
                    animationType="slide"
                    visible={show}
                >
                    <Button onPress={() => setShow(false)} title="关闭Modal"></Button>
                </Modal>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default Module_one;