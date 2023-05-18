import { useState } from "react"
import { Picker } from '@react-native-picker/picker'
export default () => {
    const [selectedLanguage, setSelectedLanguage] = useState()
    return (
        <Picker
            mode="dropdown"
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="请选择" value="" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
    )
}