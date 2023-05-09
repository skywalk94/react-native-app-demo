export default [
    {
        name: "tabScreens",
        component: require("./tabNavigation").default,
        options: {
            headerShown: false
        }
    },
    {
        name: "detail",
        title: "详情",
        component: require("../screens/Detail").default
    }
]