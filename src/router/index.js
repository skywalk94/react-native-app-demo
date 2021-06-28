const router = [
    {
        name: "TabNavigator", //跳转路径
        title: "标题", //头部展示标题
        component: require("./TabNavigator").default,
    },
    //下面只需配置非tabbar页面
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