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
    }
]