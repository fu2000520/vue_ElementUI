<template>
  <div id="app">
    <a href="#/btn">点我查看按钮</a>
    <a href="#/btndetail">按钮组件的详细使用</a>
    <a href="#/link">点击查看link链接</a>
    <a href="#/layout">点击查看Layout</a>
    <a href="#/container">点击查看container布局容器</a>
    <a href="#/form01">点击查看Form表单</a>
    <a href="#/dataList">点击查看dataList</a>
    <a href="#/dataList2">点击查看某部门的文件上交情况</a>
    <a href="#/dataList3">点击查看全部部门的文件上交情况</a>
    <a href="#/echarts01">点击查看echarts视图</a>
    <a href="#/vueFangfaDemo">点击查看Vue方法demo</a>
    <a href="#/jiakoufenTable">点击查看加扣分排行视图</a>
    <!-- <a href="#/ditorView">点击查看富文本视图</a> -->

    
    <br/> <br/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
</style>
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-plus/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-plus/lib/index.full.js"></script>
