import Index from "../views/Index/Index"
import Detail from "../views/Detail/Detail"
const router = [
    {
        name: "Index", //跳转路径
        title: "首页", //头部展示标题
        component: Index,
    },
    {
        name: "Detail",
        title: "详情",
        component: Detail
    },
]
export default router