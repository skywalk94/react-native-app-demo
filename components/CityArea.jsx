import { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native'
import pcaCode from "../assets/pca-code.json"

export default (props) => {
    const { value } = props

    const [selected, setSelected] = useState([]) //选择过的省市区
    const [options, setOptions] = useState([pcaCode]) //每一级的数据
    const [level, setLevel] = useState(0) // 当前展示第几级

    useEffect(() => {
        if (!value) return
        let trees = findNodeByCode(pcaCode, value) || []
        const select = trees.map((item) => ({ code: item.code, name: item.name }))
        const child = trees.map((item) => item.children)
        setSelected(select)
        setOptions([pcaCode].concat(child))
        setLevel(select.length == 0 ? 0 : select.length - 1)
    }, [value])

    // 通过code寻找上级节点
    const findNodeByCode = (tree, code) => {
        for (let item of tree) {
            if (item.code == code) return [item]
            if (item.children) {
                const result = findNodeByCode(item.children, code)
                if (result) return [item, ...result]
            }
        }
        return null
    }

    // 列表子选项 
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.option} onPress={() => activeItem(item)}>
            <Text style={[styles.option_text, isActive(item.code) && styles.option_text_active]}>{item.name}</Text>
            {isActive(item.code) && <View style={styles.option_icon} />}
        </TouchableOpacity >
    )

    // 选中的code
    const isActive = (code) => selected.some(item => item.code == code)

    // 点击选项
    const activeItem = (item) => {
        setSelected((prev) => {
            const newSelected = [...prev]
            newSelected[level] = { code: item.code, name: item.name }
            return newSelected.slice(0, level + 1)
        })
        if (level < 2) {
            const nextLevel = level + 1
            setLevel(nextLevel)
            setOptions((prev) => {
                const newOptions = [...prev]
                newOptions[nextLevel] = item.children
                return newOptions.slice(0, nextLevel + 1)
            })
        }
    }

    // 顶部面板
    const PanelTab = () => {
        const tabs = selected.length < 3 ? selected.concat({ name: "请选择" }) : selected
        return (
            <View style={styles.tab}>
                {tabs.map((item, index) => {
                    return (
                        <View style={styles.tab_item} key={index}>
                            <TouchableOpacity onPress={() => setLevel(index)}>
                                <Text style={item.code ? styles.tab_item_text : styles.tab_item_text_gray}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                            {level == index && <View style={styles.tab_item_line} />}
                        </View>
                    )
                })}
            </View>
        )
    }

    return (
        <>
            <PanelTab />
            <FlatList style={styles.flat} data={options[level]} renderItem={renderItem} keyExtractor={item => item.code} />
        </>
    )
}

const styles = StyleSheet.create({
    flat: {
        height: 500,
    },
    option: {
        height: 40,
        paddingRight: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    option_text: {
        fontSize: 14
    },
    option_text_active: {
        color: "#409eff",
        fontWeight: 'bold',
    },
    option_icon: {
        width: 6,
        height: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#409eff",
        borderRightWidth: 2,
        borderRightColor: "#409eff",
        transform: "rotate(45deg)"
    },
    tab: {
        flexDirection: "row",
        marginBottom: 10,
    },
    tab_item: {
        position: "relative",
        marginRight: 15,
    },
    tab_item_text: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    tab_item_text_gray: {
        fontSize: 14,
        color: "gray",
        paddingBottom: 10,
    },
    tab_item_line: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 3,
        borderRadius: 5,
        backgroundColor: "#409eff"
    }
})