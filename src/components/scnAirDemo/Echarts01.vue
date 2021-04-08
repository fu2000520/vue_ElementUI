<template>
  <div>
    <el-button @click="loginEcharts()">加载图表</el-button>
    <el-button type="text" @click="openDialog()">点击打开 Dialog</el-button>
    <el-button type="text" @click="toChangeChartsdData()"
      >点击打开折叠柱状图</el-button
    >
    <hr />

    <div id="myChart" :style="{ width: '500px', height: '300px' }"></div>
    <div id="myChart2" :style="{ width: '600px', height: '400px' }"></div>
    <div id="myChart3" :style="{ width: '80%', height: '400px' }"></div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-input v-model="name"></el-input>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
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
      testData: { tableData: [] },
      echartsDate: {
        LineDate: [
          { id: "666", value: "实施部", num: "25" },
          { id: "888", value: "开发部", num: "11" },
          { id: "444", value: "人事部", num: "23" },
          { id: "333", value: "检验部", num: "12" },
          { id: "222", value: "运维部", num: "34" },
        ],
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
            orgName: "办公部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源子类别ID
                typeSub: "危险源子类别1", //危险源子类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源子类别ID
                typeSub: "危险源子类别2", //危险源子类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别3", //危险源子类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别4", //危险源子类别名称
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
                rtsId: "1123", //危险源子类别ID
                typeSub: "危险源子类别1", //危险源子类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源子类别ID
                typeSub: "危险源子类别2", //危险源子类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别3", //危险源子类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别4", //危险源子类别名称
                count: 1, //危险源统计数量
              },
            ],
          }, {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源子类别ID
                typeSub: "危险源子类别1", //危险源子类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源子类别ID
                typeSub: "危险源子类别2", //危险源子类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别3", //危险源子类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别4", //危险源子类别名称
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
                rtsId: "1123", //危险源子类别ID
                typeSub: "危险源子类别1", //危险源子类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源子类别ID
                typeSub: "危险源子类别2", //危险源子类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别3", //危险源子类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别4", //危险源子类别名称
                count: 4, //危险源统计数量
              },
            ],
          },
          {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源子类别ID
                typeSub: "危险源子类别1", //危险源子类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源子类别ID
                typeSub: "危险源子类别2", //危险源子类别名称
                count: 2, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别3", //危险源子类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别4", //危险源子类别名称
                count: 4, //危险源统计数量
              },
            ],
          }, {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源子类别ID
                typeSub: "危险源子类别1", //危险源子类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源子类别ID
                typeSub: "危险源子类别2", //危险源子类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别3", //危险源子类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别4", //危险源子类别名称
                count: 1, //危险源统计数量
              },
            ],
          }, {
            pkid: "3132",
            orgName: "财务部",
            seRiskList: [
              //危险源信息
              {
                rtsId: "1123", //危险源子类别ID
                typeSub: "危险源子类别1", //危险源子类别名称
                count: 1, //危险源统计数量
              },
              {
                rtsId: "1124", //危险源子类别ID
                typeSub: "危险源子类别2", //危险源子类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别3", //危险源子类别名称
                count: 4, //危险源统计数量
              },
              {
                rtsId: "1125", //危险源子类别ID
                typeSub: "危险源子类别4", //危险源子类别名称
                count: 1, //危险源统计数量
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {},
  watch: {},
  methods: {
    loginEcharts() {
      this.drawLine();
      this.drawCircle();
      this.drawFoldLine();
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
      const newOrg = this.objArrtransArr(rest, "orgName", "num");

      // 树形图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: newOrg,
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
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
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
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
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
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
        },
        series: newArr,
      });
    },
    //弹窗关闭事件
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
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
        for (let j of i.seRiskList) {
          let { typeSub, count } = j;
          arr.push({
            typeSub,
            count,
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
  },
  computed: {},
};
</script>