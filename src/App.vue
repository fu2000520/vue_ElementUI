<template>
  <div id="app">
    <!-- <a href="#/btn">点我查看按钮</a> -->
    <!-- <a href="#/btndetail">按钮组件的详细使用</a> -->
    <!-- <a href="#/link">点击查看link链接</a> -->
    <!-- <a href="#/layout">点击查看Layout</a> -->
    <!-- <a href="#/container">点击查看container布局容器</a> -->
    <!-- <a href="#/form01">点击查看Form表单</a> -->
    <!-- <a href="#/dataList">dataList</a> -->
    <!-- <a href="#/dataList2">某部门的文件上交情况</a>
    <a href="#/dataList3">全部部门的文件上交情况</a> -->
    <!-- <a href="#/echarts01">echarts视图</a> -->
    <!-- <a href="#/vueFangfaDemo">Vue方法demo</a> -->
    <!-- <a href="#/jiakoufenTable">加扣分排行视图</a> -->
    <!-- <a href="#/ditorView">点击查看富文本视图</a> -->
    <!-- <a href="#/dynamicSelect">动态辅助输入框</a> -->
    <!-- <a href="#/quillDemo">富文本视图</a> -->
    <!-- <a href="#/fileUoload">文件上传</a> -->

    <br />
    <el-tabs type="border-card" v-model="activeName" tab-position="left" style="height: 80%" >
      <el-tab-pane label="富文本视图" name="quillDemo">
        <quillDemo></quillDemo>
      </el-tab-pane>
      <el-tab-pane label="文件上传" name="fileUoload">
        <fileUoload></fileUoload>
      </el-tab-pane>
      <el-tab-pane label="动态辅助输入框" name="dynamicSelect">
        <dynamicSelect></dynamicSelect>
      </el-tab-pane>
      <el-tab-pane label="加扣分排行视图" name="jiakoufenTable">
        <jiakoufenTable></jiakoufenTable>
      </el-tab-pane>
      <el-tab-pane label="echarts视图" name="echarts01">
        <echarts01></echarts01>
      </el-tab-pane>
      <el-tab-pane label="全部部门的文件上交情况" name="dataList3">
        <dataList3></dataList3>
      </el-tab-pane>
      <el-tab-pane label="点击查看Form表单" name="form01">
        <form01></form01>
      </el-tab-pane>
      <el-tab-pane label="按钮组件的详细使用" name="btndetail">
        <btndetail></btndetail>
      </el-tab-pane>
      <el-tab-pane label="点击查看link链接" name="links">
        <links></links>
      </el-tab-pane>
      <el-tab-pane label="点击查看dataList" name="dataList">
        <dataList></dataList>
      </el-tab-pane>
      <el-tab-pane label="点击查看dataList（多选框+禁用）" name="dataList2">
        <dataList2></dataList2>
      </el-tab-pane>
      <el-tab-pane label="点击查看步骤计时器  " name="buzhoujishiqi">
        <buzhoujishiqi></buzhoujishiqi>
      </el-tab-pane>
      
      <el-tab-pane label="点击查看通知滚动  " name="msgGunDong">
        <msgGunDong></msgGunDong>
      </el-tab-pane>
      
    </el-tabs>
    <br />
  </div>
</template>

<script>
import quillDemo from "./components/scnAirDemo/quillDemo";
import fileUoload from "./components/scnAirDemo/fileUoload";
import dynamicSelect from "./components/scnAirDemo/dynamicSelect";
import jiakoufenTable from "./components/scnAirDemo/jiakoufenTable";
import echarts01 from "./components/scnAirDemo/Echarts01";
import dataList3 from "./components/scnAirDemo/DataList3";
import form01 from "./components/Form01";
import btndetail from "./components/ButtonDetail";
import links from "./components/Link";
import dataList from "./components/DataList";
import dataList2 from "./components/DataList2";
import buzhoujishiqi from "./components/Mintdemo/Buzhoujishiqi";
import msgGunDong from "./components/scnAirDemo/msgGunDong";
export default {
  name: "App",
  components: {
    quillDemo,
    fileUoload,
    dynamicSelect,
    jiakoufenTable,
    echarts01,
    dataList3,
    form01,
    btndetail,
    links,
    dataList,
    dataList2,
    buzhoujishiqi,
    msgGunDong,
  },
  data () {
    return {
      activeName:"quillDemo"
    }
  }
};
</script>
<style>
</style>
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-plus/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-plus/lib/index.full.js"></script>
