<template>
<div>
  <h1>Layou组件的使用</h1>
  三个八等份
  <el-row>
    <el-col :span="8"><div style="border: 1px red solid">占用8份</div></el-col>
    <el-col :span="8"><div style="border: 1px red solid">占用8份</div></el-col>
    <el-col :span="8"><div style="border: 1px red solid">占用8份</div></el-col>
  </el-row>
  <br>
  四个六等份
  <el-row>
    <el-col :span="6"><div style="border: 1px red solid">占用6份</div></el-col>
    <el-col :span="6"><div style="border: 1px red solid">占用6份</div></el-col>
    <el-col :span="6"><div style="border: 1px red solid">占用6份</div></el-col>
    <el-col :span="6"><div style="border: 1px red solid">占用6份</div></el-col>
  </el-row>
  <br>
  <el-row>
    <el-col :span="3"><div style="border: 1px red solid">占用3份</div></el-col>
    <el-col :span="7"><div style="border: 1px red solid">占用7份</div></el-col>
    <el-col :span="4"><div style="border: 1px red solid">占用6份</div></el-col>
    <el-col :span="6"><div style="border: 1px red solid">占用6份</div></el-col>
    <el-col :span="4"><div style="border: 1px red solid">占用4份</div></el-col>
  </el-row>
  <br>

  gutter （间隔）   tag (自定义标签元素)
  <el-row :gutter="5" tag="span">
    <el-col :span="3"><div style="border: 1px red solid">占用3份</div></el-col>
    <el-col :span="7"><div style="border: 1px red solid">占用7份</div></el-col>
    <el-col :span="4"><div style="border: 1px red solid">占用6份</div></el-col>
    <el-col :span="6"><div style="border: 1px red solid">占用6份</div></el-col>
    <el-col :span="4"><div style="border: 1px red solid">占用4份</div></el-col>
  </el-row>
  <br>
  offset (偏移)
  <el-row  tag="span">
    <el-col :offset="10" :span="4"><div style="border: 1px red solid">使用偏移-占用4份</div></el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped>

</style>
