import { useState } from 'react'
import { Text, Button } from 'react-native'
import PopUp from "../components/PopUp"

export default () => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <Button title='打开弹窗' onPress={() => setVisible(true)} />
            <PopUp visible={visible} close={() => setVisible(false)}>
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
                <Text>占位</Text>
            </PopUp>
        </>
    )
}
