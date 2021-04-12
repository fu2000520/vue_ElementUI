<template>
  <el-tabs type="border-card" @tab-click="queryReportRecode">
    <el-tab-pane label="月季度扣分信息" name="first">
      <div class="block">
        <span class="demonstration">月</span>
        <el-date-picker
          v-model="queryMonth"
          :picker-options="pickerOptions"
          type="month"
          placeholder="选择月"
        >
        </el-date-picker>
      </div>
      <div style="width: 100%; height: 100%">
        <el-table highlight-current-row :data="testData.tableDataByMonth" stripe>
          <el-table-column prop="pkid" label="orgId"> </el-table-column>
          <el-table-column prop="orgName" label="部门名称"> </el-table-column>
          <el-table-column prop="marksScore" label="累计扣分分" sortable>
          </el-table-column>
          <el-table-column prop="addScore" label="累计总分" sortable>
          </el-table-column>
          <el-table-column prop="totalScore" label="总分" sortable>
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane>

    <el-tab-pane label="年季度扣分信息" name="second">
      <div style="width: 100%; height: 100%">
        <div class="block">
          <span class="demonstration">年</span>
          <el-date-picker
            v-model="queryYear"
            :picker-options="pickerOptions"
            type="year"
            placeholder="选择年"
          >
          </el-date-picker>
        </div>
        <el-table highlight-current-row :data="testData.tableDataByYear" stripe>
          <el-table-column prop="pkid" label="orgId"> </el-table-column>
          <el-table-column prop="orgName" label="部门名称"> </el-table-column>
          <el-table-column prop="marksScore" label="累计扣分分" sortable>
          </el-table-column>
          <el-table-column prop="addScore" label="累计总分" sortable>
          </el-table-column>
          <el-table-column prop="totalScore" label="总分" sortable>
          </el-table-column>
        </el-table></div
    ></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "jiakoufenTable",
  data() {
    return {
      queryYear: new Date(),
      queryMonth: new Date(),
      msg: "Welcome to Your Vue.js App",
      testData: { tableDataByMonth: [] ,tableDataByYear: []},
      pickerOptions: {
        //可选日期不能大于当前日期
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    };
  },
  mounted() {},
  watch: {},
  methods: {
    queryReportRecode() {
      // this.axios
      //   .post("query")
      //   .then((res) => {
      //     console.log(res);
      //     this.testData.tableData = res.data;
      //   })
      //   .catch((err) => {});

      this.testData.tableDataByMonth = [
        {
          pkid: "12311132",
          orgName: "宣传部1",
          marksScore: 10,
          addScore: 20,
          totalScore: 112,
        },
        {
          pkid: "123412132",
          orgName: "宣传部2",
          marksScore: 10,
          addScore: 20,
          totalScore: 114,
        },
        {
          pkid: "12312132",
          orgName: "宣传部3",
          marksScore: 10,
          addScore: 20,
          totalScore: 122,
        },
        {
          pkid: "12356132",
          orgName: "宣传部4",
          marksScore: 2,
          addScore: 11,
          totalScore: 152,
        },
        {
          pkid: "12378132",
          orgName: "宣传部5",
          marksScore: 1,
          addScore: 42,
          totalScore: 212,
        },
      ];
    },
  },
  computed: {},
};
</script>
      