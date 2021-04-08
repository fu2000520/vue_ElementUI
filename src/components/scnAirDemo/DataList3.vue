<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      @header-click="headerClick"
      v-if="showTable"
    >
      <el-table-column label="评分要点" prop="title" width="180">
        <template slot-scope="scope">
          <span style="font-weight: bold; font-size: 15px">{{
            scope.row.report
          }}</span>
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
            :class="scope.row.orgList[i].color"
            size="mini"
          >
            {{ scope.row.orgList[i].count }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="orgTitle"
      :visible.sync="dialogVisible"
      width="30%"
      fullscreen
    >
      <dataList2  :orgId="orgId"></dataList2>
    </el-dialog>
  </div>
</template>

<script>
import dataList2 from "./DataList2.vue";

export default {
  data() {
    return {
      showTable: true,
      dialogVisible: false,
      orgId: "",
      orgTitle:"",
      tableMonthTitle: [{ prop: " ", label: " 12", id: "" }],
      tableData: [
        {
          report: "落实员工思想",
          orgList: [
            { orgId: "12252", orgName: "产业部1", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部2", count: 1, color: "green" },
            { orgId: "22152", orgName: "技术部3", count: 2, color: "orange" },
            { orgId: "12252", orgName: "产业部4", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部5", count: 1, color: "green" },
            { orgId: "12252", orgName: "产业部6", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部7", count: 1, color: "green" },
          ],
        },
        {
          report: "党支部信息",
          orgList: [
            { orgId: "12252", orgName: "产业部1", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部2", count: 1, color: "green" },
            { orgId: "22152", orgName: "技术部3", count: 2, color: "red" },
            { orgId: "12252", orgName: "产业部4", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部5", count: 1, color: "green" },
            { orgId: "12252", orgName: "产业部6", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部7", count: 1, color: "green" },
          ],
        },
        {
          report: "落实员工思想2221",
          orgList: [
            { orgId: "12252", orgName: "产业部1", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部2", count: 1, color: "green" },
            { orgId: "22152", orgName: "技术部3", count: 2, color: "red" },
            { orgId: "12252", orgName: "产业部4", count: 2, color: "green" },
            { orgId: "12522", orgName: "发展部5", count: 1, color: "green" },
            { orgId: "12252", orgName: "产业部6", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部7", count: 1, color: "green" },
          ],
        },
        {
          report: "落实员工思想1212",
          orgList: [
            { orgId: "12252", orgName: "产业部1", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部2", count: 1, color: "green" },
            { orgId: "22152", orgName: "技术部3", count: 2, color: "orange" },
            { orgId: "12252", orgName: "产业部4", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部5", count: 1, color: "green" },
            { orgId: "12252", orgName: "产业部6", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部7", count: 1, color: "green" },
          ],
        },
        {
          report: "落实员工思想12",
          orgList: [
            { orgId: "12252", orgName: "产业部1", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部2", count: 1, color: "orange" },
            { orgId: "22152", orgName: "技术部3", count: 2, color: "orange" },
            { orgId: "12252", orgName: "产业部4", count: 2, color: "green" },
            { orgId: "12522", orgName: "发展部5", count: 1, color: "green" },
            { orgId: "12252", orgName: "产业部6", count: 2, color: "red" },
            { orgId: "12522", orgName: "发展部7", count: 1, color: "green" },
          ],
        },
      ],
      oldTitle: [
        { orgId: "12252", orgName: "产业部1", count: 2, color: "red" },
        { orgId: "12522", orgName: "发展部2", count: 1, color: "green" },
        { orgId: "22152", orgName: "技术部3", count: 2, color: "orange" },
        { orgId: "12252", orgName: "产业部4", count: 2, color: "red" },
        { orgId: "12522", orgName: "发展部5", count: 1, color: "green" },
        { orgId: "12252", orgName: "产业部6", count: 2, color: "red" },
        { orgId: "12522", orgName: "发展部7", count: 1, color: "green" },
      ],
    };
  },
  methods: {
    headerClick(column, event) {
      console.log("column:", column, "event:", event);
      if (column.property == "title") {
        console.log("这是标题无法跳转");
      } else {
        this.orgTitle='部门信息:'+column.label
        console.log(column.property);
        this.orgId=column.property;
        this.dialogVisible = true;
      }
    },
    //echarts类型数据转换
    objArrtransArr(olddata, orgId, orgName) {
      const newArr = [];
      olddata.forEach((item) => {
        // 定义数组内部对象形式
        let obj = {};
        obj.prop = item[orgId];
        obj.label = item[orgName];
        // 将对象数据推到数组中
        newArr.push(obj);
      });
      return newArr;
    },
  },
  mounted() {

    this.$nextTick(() => {
      console.log("oldTitle:", this.oldTitle);
      const newOrg = this.objArrtransArr(this.oldTitle, "orgId", "orgName");
      console.log("newOrg:", newOrg);
      this.tableMonthTitle = newOrg;
    });
  },
  witch: {},
  components: {
    //将导入的Vue 注册为组件
    dataList2,
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