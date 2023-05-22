import { useState, useEffect } from 'react'
import { Button, StyleSheet } from 'react-native'
import Toast from 'react-native-toast-message'
export default () => {
    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: '标题哒哒哒',
            text2: '说明哒哒哒'
        })
    }
    return (
        <>
            <Button title='弹出Toast' onPress={() => showToast()} />
        </>
    )
}
const styles = StyleSheet.create({})