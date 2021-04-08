<template>
<div>
  <el-link >我是默认Link连接</el-link>
  <br/>
  <el-link type="success">我是successLink连接</el-link>
  <br/>
  <el-link type="success" :underline="false">我是无下划线Link连接</el-link>
  <br/>
  <el-link type="success" disabled>我是禁用Link连接</el-link>
  <br/>
  <el-link type="success" href="http://www.baidu.com">我是具有Href的Link连接</el-link>
  <br/>
  <el-link type="success" href="http://www.baidu.com" target="_blank">我是具有Href的Link连接(新窗口打开)</el-link>
  <br/>
  <el-link type="success" href="http://www.baidu.com" target="_blank" icon="el-icon-s-flag">我是具有Href和图标的Link连接(新窗口打开)</el-link>

</div>
</template>

<script>
export default {
  name: "Link",
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
