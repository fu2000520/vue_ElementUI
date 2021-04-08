<template>
<div>

  <h1>创建简单的按钮</h1>
  <el-button type="success" plain round size="mini">Button</el-button>
  <el-button type="success" plain round size="small">Button</el-button>
  <el-button type="success" plain round size="medium">Button</el-button>
  <el-button type="success" plain round size="medium" circle>Button</el-button>
  <el-button type="success" plain round size="medium" circle></el-button>
  <el-button type="success" plain round size="medium" circle icon="el-icon-loading"></el-button>
  <el-button type="success" plain round size="medium"  icon="el-icon-loading">加载中</el-button>
  <el-button type="success" plain round size="medium"  icon="el-icon-loading" disabled>加载中</el-button>

  <h1>按钮组的使用</h1>
  <el-button-group>
    <el-button type="primary" icon="el-icon-caret-left">上一页</el-button>
    <el-button type="primary" icon="el-icon-caret-right">下一页 </el-button >
  </el-button-group>

</div>
</template>

<script>
export default {
  name: "ButtonDetail"
}
</script>

<style scoped>

</style>
