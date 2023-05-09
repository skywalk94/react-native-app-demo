import React from "react"
import { Dimensions, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
const { width } = Dimensions.get('window')

export default (props) => {
    const { visible, closeModal, children } = props

    const close = () => {
        closeModal(false)
    }

    return (
        <Modal transparent visible={visible} animationType={'fade'} onRequestClose={() => close()}>
            <TouchableOpacity style={styles.overlay} activeOpacity={1}
                onPress={() => close()} />
            <View style={styles.content}>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    content: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: width,
        backgroundColor: '#ffffff',
        zIndex: 1,
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
})