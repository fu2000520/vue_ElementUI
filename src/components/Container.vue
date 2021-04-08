<template>
  <div><h1>容器组件的使用</h1>
      <!-- 创建容器-->
    <el-container>
      <el-header><div><h1>我是标题</h1></div></el-header>
      <!-- 左侧菜单-->
      <el-aside><div><h1>我是菜单</h1></div></el-aside>
      <!-- 中心内容-->
      <el-main><div><h1>我是中心内容</h1></div></el-main>
      <!-- 底部内容-->
      <el-footer><div><h1>我是底部</h1></div></el-footer>
    </el-container>
    <br>

    <h1>容器组件的嵌套使用</h1>
    <!-- 创建容器-->
    <el-container>
      <el-header ><div><h1>我是标题</h1></div></el-header>
      <!--容器的嵌套使用-->
      <el-container>
      <!-- 左侧菜单-->
      <el-aside > <div><h1>我是菜单</h1></div></el-aside>
        <!-- 中心内容-->
      <el-main > <div><h1>我是中心内容</h1></div> </el-main>
      </el-container>

      <!-- 底部内容-->
      <el-footer > <div><h1>我是底部</h1></div></el-footer>
    </el-container>



    <h1>容器组件的属性使用</h1>
    <!-- 创建容器   direction =“horizontal” 水平     “vertical”  垂直-->
    <el-container direction="vertical">
      <el-header height="150px"><div><h1>我是标题</h1></div></el-header>
      <!--容器的嵌套使用-->
      <el-container>
        <!-- 左侧菜单-->
        <el-aside width="100px"> <div><h1>我是菜单</h1></div></el-aside>
        <!-- 中心内容-->
        <el-main > <div><h1>我是中心内容</h1></div> </el-main>
      </el-container>
      <!-- 底部内容-->
      <el-footer height="80px"> <div><h1>我是底部</h1></div></el-footer>
    </el-container>
  </div>

</template>

<script>
export default {
  name: "Container"
}
</script>

<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
