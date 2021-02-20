<template>
  <div>

    <input type="button" @click="goBtn2" value="点我查看图标按钮">
  </div>
</template>

<script>
export default {
  name: "btn.vue",
  methods:{
    goBtn2 () {
      this.$router.push({path:'/btn2'})
    }
  }
}
</script>

<style scoped>

</style>
