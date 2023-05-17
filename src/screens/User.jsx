import { View, Text } from 'react-native'
export default () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
        >
            <Text>This is top text.</Text>
            <Text>This is bottom text.</Text>
        </View>
    )
}