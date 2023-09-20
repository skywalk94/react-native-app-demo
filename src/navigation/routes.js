export default [
    {
        name: "TabBar",
        component: require("./tabNavigation").default,
        options: {
            headerShown: false
        }
    },
    {
        name: "Detail",
        component: require("../screens/Detail").default,
        options: {
            title: "详情",
        }
    },
    {
        name: "CustomPop",
        component: require("../screens/CustomPop").default,
        options: {
            title: "自定义弹窗",
        }
    },
    {
        name: "Drawer",
        component: require("../screens/Drawer").default,
        options: {
            title: "抽屉",
        }
    },
    {
        name: "Tab",
        component: require("../screens/Tab").default,
        options: {
            title: "选项卡",
        }
    },
    {
        name: "Picker",
        component: require("../screens/Picker").default,
        options: {
            title: "选择器",
        }
    },
    {
        name: "Sheet",
        component: require("../screens/Sheet").default,
        options: {
            title: "sheet弹窗",
        }
    },
    {
        name: "Carousel",
        component: require("../screens/Carousel").default,
        options: {
            title: "轮播图",
        }
    },
    {
        name: "Toast",
        component: require("../screens/Toast").default,
        options: {
            title: "Toast提示",
        }
    },
    {
        name: "Preview",
        component: require("../screens/Preview").default,
        options: {
            title: "预览图片",
        }
    },
    {
        name: "Axios",
        component: require("../screens/Axios").default,
        options: {
            title: "Axios请求",
        }
    },
    {
        name: "ViewShot",
        component: require("../screens/ViewShot").default,
        options: {
            title: "视图层生成图片",
        }
    },
    {
        name: "Notice",
        component: require("../screens/Notice").default,
        options: {
            title: "消息推送",
        }
    }
]