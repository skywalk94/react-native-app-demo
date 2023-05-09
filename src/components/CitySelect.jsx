import React, { useRef, useState, useEffect } from "react"
import { Animated, StyleSheet, Button, Text, View, TouchableWithoutFeedback } from "react-native"
import { winWidth, winHeight } from "../utils/device"

export default () => {

    const [visible, setVisible] = useState(false)

    const opacity = useRef(new Animated.Value(0)).current
    const translateY = useRef(new Animated.Value(winHeight)).current

    const AnimatedOption = {
        duration: 300,
        useNativeDriver: true
    }

    useEffect(() => {
        if (!visible) return
        Animated.parallel([
            Animated.timing(opacity, { ...{ toValue: 1 }, ...AnimatedOption }),
            Animated.timing(translateY, { ...{ toValue: 0 }, ...AnimatedOption })
        ]).start()
    }, [visible])

    const hideVisible = () => {
        Animated.parallel([
            Animated.timing(opacity, { ...{ toValue: 0 }, ...AnimatedOption }),
            Animated.timing(translateY, { ...{ toValue: winHeight }, ...AnimatedOption })
        ]).start(() => {
            setVisible(false)
        })
    }

    return (
        <>
            <Button title="弹窗" onPress={() => setVisible(true)} />
            {visible &&
                <View style={css.pop}>
                    <TouchableWithoutFeedback onPress={() => hideVisible()}>
                        <Animated.View style={[css.pop_overlay, { opacity: opacity }]} />
                    </TouchableWithoutFeedback >
                    <Animated.View style={[css.pop_up, { transform: [{ translateY: translateY }] }]}>
                        <Text>我是占位的</Text>
                        <Text>我是占位的</Text>
                        <Text>我是占位的</Text>
                        <Text>我是占位的</Text>
                    </Animated.View>
                </View>
            }
        </>
    )
}

const css = StyleSheet.create({
    pop: {

    },
    pop_overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: winWidth,
        height: winHeight,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1
    },
    pop_up: {
        position: 'absolute',
        bottom: 0,
        width: winWidth,
        backgroundColor: '#ffffff',
        zIndex: 2
    }
})