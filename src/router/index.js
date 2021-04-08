import Vue from 'vue'
import Router from 'vue-router'
import Button from "../components/Button";
import Button2 from "../components/Button2";
import ButtonDetail from "../components/ButtonDetail";
import Link from "../components/Link";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Form01 from "../components/Form01";
import DataList from "../components/DataList"


import DataList2 from "../components/scnAirDemo/DataList2"
import DataList3 from "../components/scnAirDemo/DataList3"
import Echarts01 from "../components/scnAirDemo/Echarts01"
import jiakoufenTable from "../components/scnAirDemo/jiakoufenTable"
import vueFangfaDemo from "../components/scnAirDemo/vueFangfaDemo"
// import ditorView from "../components/scnAirDemo/ditorView"
import dynamicSelect from "../components/scnAirDemo/dynamicSelect"

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/btn', component: Button },
    { path: '/btn2', component: Button2 },
    { path: '/btndetail', component: ButtonDetail },
    { path: '/link', component: Link },
    { path: '/layout', component: Layout },
    { path: '/container', component: Container },
    { path: '/form01', component: Form01 },
    { path: '/dataList', component: DataList },

    { path: '/dataList2', component: DataList2 },
    { path: '/dataList3', component: DataList3 },
    { path: '/echarts01', component: Echarts01 },
    { path: '/jiakoufenTable', component: jiakoufenTable },
    { path: '/vueFangfaDemo', component: vueFangfaDemo },
    // { path: '/ditorView', component: ditorView },
    { path: '/dynamicSelect', component: dynamicSelect },
  ]
})
