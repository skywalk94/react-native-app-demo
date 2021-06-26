import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Index = (props) => {
    useEffect(() => {
    })
    const goDetail = () => {
        props.navigation.navigate("Detail")
    }
    return (
        <View>
            <Button title="跳转到详情" onPress={() => goDetail()}></Button>
        </View>
    );
}

export default Index;