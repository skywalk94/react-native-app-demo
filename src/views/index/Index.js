import React from 'react';
import { View, Button } from 'react-native';

const Index = (props) => {
    const goDetail = () => {
        props.navigation.navigate("Detail", {
            id: 123 //传递参数
        })
    }
    return (
        <View>
            <Button title="跳转到详情" onPress={() => goDetail()}></Button>
        </View>
    );
}

export default Index;