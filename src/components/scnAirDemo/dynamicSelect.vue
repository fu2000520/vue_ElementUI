<template>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入内容"
    @select="handleSelect"
  ></el-autocomplete>
</template>
<script>
export default {
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
      saveMsg: "",
    };
  },
  methods: {
    querySearchAsync(queryString, cb) {
      //根據輸入的内容從後臺模糊查詢數據

    //   this.axios
    //     .post("orgQuery", {
    //       oname: queryString,
    //     })
    //     .then((res) => {
    //       this.saveMsg = this.objArrtransArr(res.data);
    //     });

      //假數據
      this.saveMsg = [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
      ];

      //取出查詢出的内容
      var restaurants = this.saveMsg;
      //將查詢出的内容進行回顯
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    //属性名转换
    objArrtransArr(olddata) {
      const newArr = [];
      olddata.forEach((item) => {
        // 定义数组内部对象形式
        let obj = {};
        obj.value = item["oname"];
        obj.pkid = item["pkid"];
        // 将对象数据推到数组中
        newArr.push(obj);
      });
      return newArr;
    },
  },
  mounted() {},
};
</script>