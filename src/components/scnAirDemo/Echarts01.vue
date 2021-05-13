<template>
  <div>
    <el-button @click="loginEcharts()">加载图表</el-button>
    <hr />

    <el-row>
      <el-col :span="12">
        <div id="myChart" :style="{ width: '100%', height: '300px' }"></div>
      </el-col>
      <el-col :span="2"
        ><span>
          <el-tooltip content="正序" placement="top">
            <el-button
              icon="el-icon-sort-up"
              circle
              @click="paixu('up')"
            ></el-button> </el-tooltip
        ></span>
        <span>
          <el-tooltip content="倒序" placement="top"
            ><el-button
              icon="el-icon-sort-down"
              circle
              @click="paixu('down')"
            ></el-button></el-tooltip
        ></span>
      </el-col>
    </el-row>

    <div id="myChart4" :style="{ width: '800px', height: '400px' }"></div>
    <div id="myChart3" :style="{ width: '90%', height: '400px' }"></div>
    <div id="dialogDiv">
      <el-dialog title="" :visible.sync="dialogVisible" width="40%">
        <span>{{ name }}下子类别详情</span>
        <span slot="footer" class="dialog-footer">
          <div id="myChart2" :style="{ width: '800px', height: '400px' }"></div>
        </span>
      </el-dialog>
    </div>
    <div id="dialogDiv2">
      <el-dialog title="" :visible.sync="dialogVisible2" width="40%">
        <span>危险源子类别详情</span>
        <span slot="footer" class="dialog-footer">
          <div id="myChart5" :style="{ width: '800px', height: '400px' }"></div>
        </span>
      </el-dialog>
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
      dialogVisible2: false,
      msg: "Welcome to Your Vue.js App",
      qqName: "",
      qqPwd: "",
      hiddenFlag: { charts: false },
      testData: { tableData: [] },
      echartsDate: {
        LineDate2: [
          { id: "666", orgName: "实施部1", num: "25" },
          { id: "888", orgName: "开发部2", num: "11" },
          { id: "444", orgName: "人事部3", num: "23" },
          { id: "333", orgName: "检验部4", num: "12" },
          { id: "222", orgName: "运维部5", num: "34" },
        ],
        flodLineDateTitleSeRiskTypeSub: [],
        flodLineDateTitleSeOrg: [],
        oldDate: [
          {
            pkid: "3132",
            orgName: "中国南方 ",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 3, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 2, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "中国东方",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "中国上海",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 8, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 2, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "办公部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 3, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 2, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "办公部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 2, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "办公部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 2, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "办公部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 3, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
          {
            pkid: "321132",
            orgName: "办公部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 2, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "办公部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 3, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 2, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "办公部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 2, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "办公部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 2, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "办公部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 2, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源父类别ID
                typeSub: "危险源父类别1", //危险源父类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源父类别ID
                typeSub: "危险源父类别2", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别3", //危险源父类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源父类别ID
                typeSub: "危险源父类别4", //危险源父类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
        ],
        myCharts1Title: ["张三", "李四", "王五", "赵六", "冯琦", "吴九"],
        myCharts1Date: [5, 20, 36, 10, 1, 20],
      },
    };
  },
  mounted() {},
  watch: {},
  methods: {
    loginEcharts() {
      this.drawLine();
      this.drawFoldLine();
      this.drawCircle4();
    },
    openDialog() {
      this.dialogVisible = !this.dialogVisible;
      console.log("openDialog", this.dialogVisible);
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("myChart"));
      //获取数据 例如：$Http.post....  （rest）=>{}
      let rest = this.echartsDate.LineDate2;
      //格式转换
      // const newOrg = this.objArrtransArr(rest, "orgName", "num");

      // 树形图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: this.echartsDate.myCharts1Title,
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.echartsDate.myCharts1Date,
          },
        ],
      });
      myChart.on("click", (params) => {
        console.log("您点击了我");
        this.name = params.name;
        this.openDialog();
      });
    },
    //饼图图表
    drawCircle() {
      // 基于准备好的dom，初始化echarts实例
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart2.setOption({
        title: {},
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "危险源子类别详情",
            type: "pie",
            radius: "60%",
            data: [
              { value: 104, name: "危险源子类别1" },
              { value: 735, name: "危险源子类别2" },
              { value: 580, name: "危险源子类别3" },
              { value: 484, name: "危险源子类别4" },
              { value: 300, name: "危险源子类别15" },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{c}次 ({d}%)",
                },
                labelLine: { show: true },
              },
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
    //饼图图表
    drawCircle5() {
      // 基于准备好的dom，初始化echarts实例
      let myChart5 = this.$echarts.init(document.getElementById("myChart5"));
      // 绘制图表
      myChart5.setOption({
        title: {},
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "危险源子类别详情",
            type: "pie",
            radius: "60%",
            data: [
              { value: 114, name: "危险源子类别1" },
              { value: 75, name: "危险源子类别2" },
              { value: 50, name: "危险源子类别3" },
              { value: 84, name: "危险源子类别4" },
              { value: 30, name: "危险源子类别15" },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{c}次 ({d}%)",
                },
                labelLine: { show: true },
              },
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
    //饼图图表
    drawCircle4() {
      // 基于准备好的dom，初始化echarts实例
      let myChart4 = this.$echarts.init(document.getElementById("myChart4"));
      // 绘制图表
      myChart4.setOption({
        title: {
          text: "危险源父类总占比",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "危险源子类别详情",
            type: "pie",
            radius: "70%",
            data: [
              { value: 12, name: "危险源父类别1" },
              { value: 3, name: "危险源父类别2" },
              { value: 1, name: "危险源父类别3" },
              { value: 2, name: "危险源父类别4" },
              { value: 3, name: "危险源父类别15" },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{c}次 ({d}%)",
                },
                labelLine: { show: true },
              },
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
      myChart4.on("click", (params) => {
        console.log("您点击了我");
        this.drawCircle5();
        this.dialogVisible2 = true;
      });
    },
    drawFoldLine() {
      let newArr = this.toChangeChartsdData();
      var myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      myChart3.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          //表头显示的内容   动态 => 相当于危险源类别
          data: this.echartsDate.flodLineDateTitleSeRiskTypeSub,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: {
          type: "value",
        },
        xAxis: {
          type: "category",
          data: this.echartsDate.flodLineDateTitleSeOrg, //动态  => 相当于部门
          axisLabel: {
            inside: false,
            textStyle: {
              fontSize: "15",
            },
            formatter: function (val) {
              return val.split("").join("\n");
            },
          },
        },
        series: newArr,
      });
      myChart3.on("click", (params) => {
        console.log("您点击了我");
        console.log("params", params);
        this.name = params.name + ` -->  ` + params.seriesName;
        this.openDialog();

        //根据name查询部门ID
        console.log("params", params.name);

        //根据name查询危险源父类别
        console.log("seriesName", params.seriesName);

        //根据部门ID各危险源父类查询其下所有的危险源子类

        this.drawCircle();
      });
    },
    //弹窗关闭事件
    handleClose(done) {
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done();
      //   })
      //   .catch((_) => {});
    },
    //echarts类型数据转换
    objArrtransArr(olddata, oldval, oldname) {
      const newArr = [];
      olddata.forEach((item) => {
        // 定义数组内部对象形式
        let obj = {};
        obj.value = item[oldval];
        obj.name = item[oldname];
        // 将对象数据推到数组中
        newArr.push(obj);
      });
    },

    //echarts类型数据转换
    toChangeChartsdData() {
      let arr = [];
      let arrTypeSub = [];
      let newArr = [];
      let orgName = [];
      this.echartsDate.flodLineDateTitleSeOrg = [];
      this.echartsDate.flodLineDateTitleSeRiskTypeSub = [];
      let echartsT = {
        name: "",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [],
      };
      for (let i of this.echartsDate.oldDate) {
        this.echartsDate.flodLineDateTitleSeOrg.push(i.orgName);
        // this.echartsDate.flodLineDateTitleSeOrg.push(i.pkid);
        for (let j of i.seRiskList) {
          let { typeSub, count, rtsId } = j;
          arr.push({
            typeSub,
            count,
            rtsId,
          });
        }
        for (let i of arr) {
          if (arrTypeSub.indexOf(i.typeSub) === -1) {
            arrTypeSub.push(i.typeSub);
          }
        }
      }

      for (let typeSub of arrTypeSub) {
        let data = [];
        for (let j of arr) {
          if (typeSub === j.typeSub) {
            data.push(j.count);
          }
        }
        echartsT.name = typeSub;
        echartsT.data = data;
        newArr.push({ ...echartsT });
        this.echartsDate.flodLineDateTitleSeRiskTypeSub.push(typeSub);
      }
      return newArr;
    },

    paixu(type) {
      var newLineDate = this.echartsDate.myCharts1Date;
      var newDateTitle = this.echartsDate.myCharts1Title;
      if (newLineDate != null) {
        for (let i = 0; i < newLineDate.length - 1; i++) {
          for (let j = 0; j < newLineDate.length - 1 - i; j++) {
            if (type == "up") {
              if (newLineDate[j] > newLineDate[j + 1]) {
                var big = Number(newLineDate[j]);
                var bigTitle = newDateTitle[j];
                newLineDate[j] = newLineDate[j + 1];
                newDateTitle[j] = newDateTitle[j + 1];
                newLineDate[j + 1] = big;
                newDateTitle[j + 1] = bigTitle;
              }
            } else {
              if (newLineDate[j] < newLineDate[j + 1]) {
                var big = Number(newLineDate[j]);
                var bigTitle = newDateTitle[j];
                newLineDate[j] = newLineDate[j + 1];
                newDateTitle[j] = newDateTitle[j + 1];
                newLineDate[j + 1] = big;
                newDateTitle[j + 1] = bigTitle;
              }
            }
          }
        }
      }
      console.log(type, newLineDate, newDateTitle);
      this.echartsDate.myCharts1Date = newLineDate;
      this.echartsDate.myCharts1Title = newDateTitle;
      this.drawLine();
    },
  },
  computed: {},
};
</script>