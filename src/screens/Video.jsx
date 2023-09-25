import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Video, ResizeMode } from 'expo-av'
export default () => {
    return (
        <Video style={{ flex: 1 }} source={{ uri: "https://video.pearvideo.com/mp4/short/20170124/cont-1028616-10167568-hd.mp4" }} shouldPlay useNativeControls />
    )
}
const styles = StyleSheet.create({})