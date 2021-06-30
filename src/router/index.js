const router = [
    {
        name: "Tab", //跳转路径
        title: "Tab", //头部展示标题
        component: require("./TabNavigator").default
    },
    //只需要引入非Tabbar页面
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