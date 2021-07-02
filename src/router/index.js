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
    {
        name: "Module",
        title: "React-native组件",
        component: require("../views/Module/Module").default
    },
    {
        name: "Module_one",
        title: "React-native组件",
        component: require("../views/Module_one/Module_one").default
    },
    {
        name: "Module_two",
        title: "React-native组件",
        component: require("../views/Module_two/Module_two").default
    },
    {
        name: "Photo",
        title: "上传图片",
        component: require("../views/Photo/Photo").default
    },
    {
        name: "Contacts",
        title: "联系人",
        component: require("../views/Contacts/Contacts").default
    },
    {
        name: "Preview",
        title: "预览图片",
        component: require("../views/Preview/Preview").default
    },
]
export default router