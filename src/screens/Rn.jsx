import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
export default () => {
    Alert.alert('提示', '是否确认删除？',
        [
            { text: '取消' },
            { text: '确认', onPress: () => console.log('确认删除') }
        ]
    )
    return (
        <View>
            <Text>123</Text>
        </View>
    )
}
const styles = StyleSheet.create({})