const router = [
    {
        name: "Drawer", //跳转路径
        title: "Drawer", //头部展示标题
        component: require("./DrawerNavigator").default,
    },
    {
        name: "Index",
        title: "首页",
        component: require("../views/Index/Index").default
    },
    {
        name: "Mine",
        title: "我的",
        component: require("../views/Mine/Mine").default
    },
    {
        name: "Detail",
        title: "详情",
        component: require("../views/Detail/Detail").default
    },
    {
        name: "Life",
        title: "生命周期",
        component: require("../views/Life/Life").default
    },
]
export default router