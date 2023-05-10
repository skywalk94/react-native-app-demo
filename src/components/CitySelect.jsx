import { useState, useEffect } from "react"
import { Button, View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import PopUp from "./PopUp"
import pcaCode from "../assets/js/pca-code.json"
const options = pcaCode

export default () => {
    const [visible, setVisible] = useState(true)
    const [tabs, setTabs] = useState([])
    const [tabIndex, setTabIndex] = useState(0)
    const [cities, setCities] = useState([])


    useEffect(() => {
        getSelectOptions()
    }, [])

    const getSelectOptions = () => {
        console.log(options)
        setCities(options)
    }

    const selectCity = (item) => {
        // setTabs(oldTab => [...oldTab, { code: item.code, name: item.name }])
        if (item?.children) {
            setCities(item.children)
            setTabIndex(index => index + 1)
            console.log(tabIndex)
        }
    }

    return (
        <>
            <Button title="弹出地址选择" onPress={() => setVisible(true)}></Button>
            <PopUp visible={visible} close={() => setVisible(false)}>
                <View style={css.content}>
                    <Text style={css.title}>请选择所在地区</Text>
                    <View style={css.tab}>
                        {
                            tabs.map((item, index) => {
                                return <Text key={index} style={[css.tab_item, css.tab_item_active]}>{item.name}</Text>
                            })
                        }
                    </View>
                    <View style={css.area}>
                        <FlatList data={cities} keyExtractor={item => item.code}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => selectCity(item)}>
                                        <Text style={css.area_item}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                </View>
            </PopUp>
        </>
    )
}

const css = StyleSheet.create({
    content: {
        paddingTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
    },
    tab: {
        flexDirection: "row",
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingLeft: 20,
        paddingRight: 20,
    },
    tab_item: {
        fontSize: 14,
        paddingBottom: 5,
        marginRight: 20,
    },
    tab_item_active: {
        borderBottomWidth: 2,
        borderBottomColor: "#1989fa",
    },
    area: {
        height: 500,
        overflow: "scroll",
    },
    area_item: {
        padding: 12,
        fontSize: 14,
    }
})