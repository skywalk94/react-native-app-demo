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
        title: "抽屉",
        component: require("../screens/Drawer").default
    },
    {
        name: "Tab",
        title: "选项卡",
        component: require("../screens/Tab").default
    },
    {
        name: "Picker",
        title: "选择器",
        component: require("../screens/Picker").default
    },
    {
        name: "Sheet",
        title: "sheet弹窗",
        component: require("../screens/Sheet").default
    },
    {
        name: "Carousel",
        title: "轮播图",
        component: require("../screens/Carousel").default
    },
    {
        name: "Toast",
        title: "Toast提示",
        component: require("../screens/Toast").default
    },
    {
        name: "Preview",
        title: "预览图片",
        component: require("../screens/Preview").default
    }
]