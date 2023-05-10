import { Dimensions, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
const { width } = Dimensions.get('window')

export default (props) => {
    const { visible, close, children } = props

    const closeModal = () => {
        close(false)
    }

    return (
        <Modal transparent visible={visible} animationType={'fade'} onRequestClose={() => closeModal()}>
            <TouchableOpacity style={styles.overlay} activeOpacity={1}
                onPress={() => closeModal()} />
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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
})