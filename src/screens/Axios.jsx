import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from "axios"
export default () => {
    const [arr, setArr] = useState([])
    useEffect(() => {
        axios("https://api.github.com/orgs/nuxt/repos").then(res => {
            setArr(res.data)
        })
    }, [])

    return (
        <View>
            {arr.map(item => (
                <Text key={item.id}>{item.id}</Text>
            ))
            }
        </View>
    )
}
const styles = StyleSheet.create({})