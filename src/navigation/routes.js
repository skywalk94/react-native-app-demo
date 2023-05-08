export default [
    {
        name: "tabcreens",
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