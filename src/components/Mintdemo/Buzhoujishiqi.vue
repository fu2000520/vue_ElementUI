<template>
  <div>
    <div>
      步骤：
      <button :class="[checkBox_shenbao ? 'becomeGreen' : 'defaultStyle']">
        申报
      </button>
      <i class="el-icon-caret-right"></i>
      <button :class="[checkBox_shibie ? 'becomeGreen' : 'defaultStyle']">
        识别
      </button>
      <i class="el-icon-caret-right"></i>
      <button :class="[checkBox_submit ? 'becomeGreen' : 'defaultStyle']">
        提交
      </button>
    </div>
    <hr />
    <div>
     
      <button @click="checkBox_shenbao = true">申报</button>
      <button @click="checkBox_shibie = true" v-if="checkBox_shenbao"> 识别 </button>
      <button @click="checkBox_submit = true" v-if="checkBox_shibie">
        提交
      </button>
      <button
        @click="
          (checkBox_shenbao = false),
            (checkBox_shibie = false),
            (checkBox_submit = false)
        "
        v-if="checkBox_submit"
      >
        重置
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkBox_shenbao: false,
      checkBox_shibie: false,
      checkBox_submit: false,
    };
  },
  methods: {
    shenbao() {
      checkBox_shenbao = true;
    },
  },
};
</script>
<style>
.becomeGreen {
  color: #fff;
  background: rgb(12, 170, 12);
  border-color: none;
  border-radius: 10px;
}
.defaultStyle {
  border-radius: 50px;
}
</style>
