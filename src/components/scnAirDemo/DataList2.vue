<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column label="评分要点" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px; font-weight: bold">{{
          scope.row.report
        }}</span>
      </template>
    </el-table-column>

    <el-table-column label="任务周期" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px; color: grey">{{
          scope.row.reportRateName
        }}</span>
      </template>
    </el-table-column>
    <el-table-column label="当前进度" width="180">
      <template slot-scope="scope">
        <el-button
          style="padding: 2px 4px 3px 4px"
          :class="scope.row.reportJinDuColor"
          size="mini"
          >{{ scope.row.reportJinDu }}</el-button
        >
      </template>
    </el-table-column>
    <el-table-column label="***年统计" width="180">
      <template slot-scope="scope">
        <el-button
          style="padding: 2px 4px 3px 4px"
          :class="scope.row.reportRateColor"
          size="mini"
          >{{ scope.row.reportDoneCount }} /
          {{ scope.row.reportRate }}</el-button
        >
      </template>
    </el-table-column>

    <el-table-column
      v-for="(item, i) in tableMonthTitle"
      :key="i"
      :label="item.label"
      :property="item.prop"
      align="center"
      :class="item.prop"
    >
      <template slot-scope="scope">
        <el-button
          style="padding: 2px 4px 3px 4px"
          :class="scope.row.reportCount[i].color"
          size="mini"
        >
          {{ scope.row.reportCount[i].count }}/{{
            scope.row.reportCount[i].needCount
          }}</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "",
  props: ["orgId"],
  data() {
    return {
      // orgId:'',
      tableMonthTitle: [
        { prop: "1月", label: "1月" },
        { prop: "2月", label: "2月" },
        { prop: "3月", label: "3月" },
        { prop: "4月", label: "4月" },
        { prop: "5月", label: "5月" },
        { prop: "6月", label: "6月" },
        { prop: "7月", label: "7月" },
        { prop: "8月", label: "8月" },
        { prop: "9月", label: "9月" },
        { prop: "10月", label: "10月" },
        { prop: "11月", label: "11月" },
        { prop: "12月", label: "12月" },
      ],
      tableData: [
        {
          report: "党...2221121.",
          reportRateName: "月度工作",
          reportRate: 12,
          reportJinDu: -1,
          reportDoneCount: 5,
          reportRateColor: "green",
          reportJinDuColor: "red",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          reportCount: [
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "2", color: "green" },
            { month: "1", needCount: "2", count: "3", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
            { month: "1", needCount: "2", count: "2", color: "green" },
            { month: "2", needCount: "1", count: "3", color: "orange" },
            { month: "1", needCount: "2", count: "6", color: "green" },
            { month: "2", needCount: "1", count: "2", color: "orange" },
            { month: "1", needCount: "2", count: "3", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
            { month: "1", needCount: "2", count: "2", color: "green" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
          ],
        },
        {
          report: "党..2222.",
          reportRateName: "年度工作",
          reportRate: 6,
          reportJinDu: 1,
          reportDoneCount: 4,
          reportRateColor: "red",
          reportJinDuColor: "grey",
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          reportCount: [
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "0", color: "grey" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "grey" },
            { month: "1", needCount: "2", count: "2", color: "grey" },
            { month: "2", needCount: "1", count: "1", color: "green" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "2", color: "green" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "green" },
          ],
        },
        {
          report: "党.1111..",
          reportRateName: "季度工作",
          reportRate: 3,
          reportJinDu: 1,
          reportDoneCount: 3,
          reportRateColor: "orange",
          reportJinDuColor: "green",
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          reportCount: [
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "green" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "green" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "grey" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
          ],
        },
        {
          report: "党.2..",
          reportRateName: "半年度工作",
          reportRate: 1,
          reportJinDu: 1,
          reportDoneCount: 2,
          reportRateColor: "red",
          reportJinDuColor: "orange",
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          reportCount: [
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "green" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
            { month: "1", needCount: "2", count: "1", color: "grey" },
            { month: "2", needCount: "1", count: "1", color: "green" },
            { month: "1", needCount: "2", count: "1", color: "grey" },
            { month: "2", needCount: "1", count: "1", color: "grey" },
          ],
        },
        {
          report: "党委***文件报告",
          pkid: "",
          reportRate: 3,
          reportRateName: "半年度工作22",
          reportRateColor: "red",
          reportJinDuColor: "green",
          reportDoneCount: 2,
          reportJinDu: 4,
          reportCount: [
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
            { month: "1", needCount: "2", count: "1", color: "green" },
            { month: "2", needCount: "1", count: "1", color: "grey" },
            { month: "1", needCount: "2", count: "1", color: "green" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
            { month: "1", needCount: "2", count: "1", color: "red" },
            { month: "2", needCount: "1", count: "1", color: "green" },
            { month: "1", needCount: "2", count: "1", color: "grey" },
            { month: "2", needCount: "1", count: "1", color: "orange" },
          ],
        },
      ],
    };
  },
  methods: {
    headerClick(column, event) {
      alert(column);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  watch: {
    orgId: {
      handler() {
        alert(this.orgId);
      },
      immediate: false,
    },
  },
  mounted() {
  },
};
</script>
<style>
.red {
  color: #fff;
  background: red;
  border-color: none;
}
.red:focus {
  color: #fff;
  background: red;
  border-color: none;
}
.red:hover {
  color: #fff;
  background: red;
  border-color: none;
}

.orange {
  color: #fff;
  background: orange;
  border-color: none;
}
.orange:focus {
  color: #fff;
  background: orange;
  border-color: none;
}
.orange:hover {
  color: #fff;
  background: orange;
  border-color: none;
}

.green {
  color: #fff;
  background: green;
  border-color: none;
}

.green:focus {
  color: #fff;
  background: green;
  border-color: none;
}
.green:hover {
  color: #fff;
  background: green;
  border-color: none;
}

.grey {
  color: black;
  background: none;
  border-color: none;
  border: none;
}
.grey:focus {
  color: black;
  background: none;
  border-color: none;
  border: none;
}
.grey:hover {
  color: black;
  background: none;
  border-color: none;
  border: none;
}
</style>