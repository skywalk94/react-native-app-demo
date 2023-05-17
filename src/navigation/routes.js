export default [
    {
        name: "tabScreens",
        component: require("./tabNavigation").default,
        options: {
            headerShown: false
        }
    },
    {
        name: "Detail",
        title: "详情",
        component: require("../screens/Detail").default
    },
    {
        name: "CustomPop",
        title: "自定义弹窗",
        component: require("../screens/CustomPop").default
    },
    {
        name: "Drawer",
        title: "自定义弹窗",
        component: require("../screens/Drawer").default
    },
    {
        name: "Tab",
        title: "选项卡",
        component: require("../screens/Tab").default
    }
]