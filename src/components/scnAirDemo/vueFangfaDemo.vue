<template>
  <div>
    watch的演示
    <div>
      账户名称：<el-input v-model="qqName" style="width: 10%"></el-input>
      账户密码：<el-input v-model="qqPwd" style="width: 10%"></el-input>
    </div>
    <hr />
    computed计算属性演示
    <div>
      <el-input
        placeholder="请输入内容"
        v-model="testData.num1"
        style="width: 20%"
      >
        <template slot="prepend">数值1</template>
      </el-input>
      <el-input
        placeholder="请输入内容"
        v-model="testData.num2"
        style="width: 20%"
      >
        <template slot="prepend">数值2</template>
      </el-input>
    </div>
    <div>
      return的数据： {{ qqSum }} <br />
      val1 ：<el-input v-model="testData.val1" style="width: 10%"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  name: "hello",
  data() {
    return {
      name: "",
      dialogVisible: false,
      msg: "Welcome to Your Vue.js App",
      qqName: "",
      qqPwd: "",
      hiddenFlag: { charts: false },
      testData: { val1: "", num1: "", num2: "" },
      echartsDate: {},
    };
  },
  mounted() {},
  watch: {
    // qqName: function (newValue, oldValue) {
    //   console.log("oldValue", oldValue, "newValue:", newValue);
    // },

    //当变量值发生改变是进行调用
    qqName(newValue, oldValue) {
      console.log(
        "当变量值发生改变是进行调用oldValue",
        oldValue,
        "newValue:",
        newValue
      );
    },

    // 页面渲染时就调用一次
    // qqName: {
    //   handler(newValue, oldValue) {
    //     console.log("页面渲染时就调用一次oldValue", oldValue, "newValue:", newValue);
    //   },
    //   immediate: false
    // },

    qqPwd(value) {
      console.log(value);
    },
  },
  methods: {
    loginEcharts() {
      this.drawLine();
      this.drawCircle();
    },
    openDialog() {
      this.dialogVisible = !this.dialogVisible;
      console.log("openDialog", this.dialogVisible);
    },
    //弹窗关闭事件
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
  computed: {
    qqSum: {
      get() {
        console.log("进入qqSum");
        //this.testDate.val1++;
        return Number(this.testData.num1) + Number(this.testData.num2);
      },
      set() {},
    },
  },
};
</script>