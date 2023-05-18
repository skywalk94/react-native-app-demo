import { useRef, useEffect } from "react"
import { Text, Button, StyleSheet } from "react-native"
import ActionSheet from "react-native-actions-sheet"

export default () => {
    const actionSheetRef = useRef(null)
    useEffect(() => {
        open()
    }, [])

    const open = () => {
        actionSheetRef.current?.show()
    }

    return (
        <>
            <Button title="打开" onPress={() => open()} />
            {/* backgroundInteractionEnabled={true} closable={false}*/}
            <ActionSheet ref={actionSheetRef} gestureEnabled headerAlwaysVisible initialSnapIndex={1} snapPoints={[30, 60, 100]} >
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
            </ActionSheet>
        </>
    )
}