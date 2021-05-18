<template>
  <div>
    <el-select
      v-model="value1"
      placeholder="选择省份"
      @change="selectOption"
      clearable
    >
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="value2"
      :placeholder="this.value1 == '' ? '请先选择省份' : '选择市'"
      :disabled="this.value1 == '' ? true : false"
      @change="selectValue2"
    >
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options1: [
        {
          value: "shanghai",
          label: "上海",
        },
        {
          value: "hubei",
          label: "湖北",
        },
      ],
      options2: [],
      datas: [
        {
          label: "上海",
          value: "shanghai",
          options: [
            {
              value: "huangpuqu",
              label: "黄浦区",
            },
            {
              value: "pudongxinqu",
              label: "浦东新区",
            },
          ],
        },
        {
          label: "湖北",
          value: "hubei",
          options: [
            {
              value: "wuhan",
              label: "武汉",
            },
            {
              value: "xiantao",
              label: "仙桃",
            },
          ],
        },
      ],
      value1: "",
      value2: "",
    };
  },
  methods: {
    selectOption(val) {
      this.value2 = "";
      if (val != "") {
        var Arr = [];
        this.datas.forEach((item) => {
          if (item.value == val) {
            item.options.forEach((item2) => {
              let { value, label } = item2;
              Arr.push({ value, label });
            });
          }
        });
        if (Arr != null) this.options2 = Arr;
      } else {
        this.options2 = [];
      }
    },
    selectValue2(val) {
      console.log(val);
    },
  },
};
</script>