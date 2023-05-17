import { useState } from 'react'
import { Text, useWindowDimensions, StyleSheet } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

const one = () => (
    <Text>1</Text>
)
const two = () => (
    <Text>2</Text>
)
const three = () => (
    <Text>3</Text>
)

export default () => {
    const layout = useWindowDimensions()

    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'one', title: 'option1' },
        { key: 'two', title: 'option2' },
        { key: 'three', title: 'option3' }
    ])
    const renderTabBar = (props) => (
        <TabBar {...props} activeColor="#16BA98" inactiveColor="#333333" style={styles.tabBar} indicatorStyle={styles.line} />
    )
    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={SceneMap({ one: one, two: two, three: three })}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff'
    },
    line: {
        backgroundColor: "#16BA98",
    }
})