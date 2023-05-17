import { useState } from 'react'
import { Text, useWindowDimensions, StyleSheet, ScrollView } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

const one = () => (
    <ScrollView>
        {
            [1, 1, 1, 1, 1].map((item, index) => {
                return (
                    <Text key={index} style={styles.text}>1</Text>
                )
            })
        }
    </ScrollView>
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
        { key: 'two', title: 'option2' }
    ])
    const renderTabBar = (props) => (
        <TabBar {...props} activeColor="#16BA98" inactiveColor="#333333" style={styles.tabBar} indicatorStyle={styles.line} tabStyle={styles.tab} scrollEnabled bounces={false} />
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
    text: {
        marginBottom: 200,
    },
    tabBar: {
        backgroundColor: '#fff'
    },
    line: {
        backgroundColor: "#16BA98",
    },
    tab: {
        width: "auto"
    }
})