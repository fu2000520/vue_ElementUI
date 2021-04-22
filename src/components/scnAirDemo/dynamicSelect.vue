<template>
  <div>
    <div>
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
    </div>
    <div>
      <el-select
        ref="selectDom"
        v-model="value"
        multiple
        filterable
        remote
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span style="float: left">{{ item.label }}</span>
          <span
            style="
              float: right;
              color: #8492a6;
              font-size: 13px;
              padding-right: 15px;
            "
            >{{ item.value }}</span
          >
        </el-option>
      </el-select>
      {{ this.value }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
      saveMsg: "",
      value: ["700820"],//所选中的当事人
      options: [],//当事人待选值
      list:"",
      loading: false,
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

    remoteMethod(query) {
      this.list = [
        {
          value: "700820",
          label: "张三",
        },
        {
          value: "700821",
          label: "李四",
        },
        {
          value: "700822",
          label: "王五",
        },
        {
          value: "700823",
          label: "赵六",
        },
        {
          value: "700824",
          label: "吴九",
        },
        {
          value: "700825",
          label: "方十",
        },
        {
          value: "700826",
          label: "赵六",
        },
      ];

      // 解决回显时显示为id的问题
      this.list.forEach((item) => {
        this.$refs["selectDom"].cachedOptions.push({
          currentLabel: item.label,
          currentValue: item.value,
          label: item.label,
          value: item.value,
        });
      });
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list;
          // .filter((item) => {
          //   return item.value.toLowerCase().indexOf(query.toLowerCase()) > -1;
          // });
        }, 200);
      } else {
        this.options = [];
      }
    },
  },
  mounted() {
    this.remoteMethod()
  },
};
</script>