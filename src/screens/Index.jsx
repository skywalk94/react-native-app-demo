import { useState } from 'react'
import { Text } from 'react-native'
import PopUp from "../components/PopUp"
import { Button } from "native-base"

export default () => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <Button onPress={() => setVisible(true)}>打开弹窗</Button>
            <PopUp visible={visible} close={() => setVisible(false)}>
                <Text>占位</Text>
            </PopUp>
        </>
    )
}
