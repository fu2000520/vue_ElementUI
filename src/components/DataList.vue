<template>
  <div class="hello">
    <h1>element-ui表格</h1>
    <el-table :data="tableData" :stripe="true" :border="true" width="100%">
      <el-table-column label="日期" prop="date"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="modifyData(scope.$index, scope.row)">修改</el-button>
          <el-button type="danger" @click="deleteData(scope.$index,tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="centerDialogVisible">
      <el-form  :model="editForm">
        <el-form-item label="日期" :picker-options="pickerOptions">
          <el-date-picker v-model="editForm.date" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                          value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">npm
          <el-input v-model="editForm.address"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button @click="closeDialog()">取消</el-button>
        <el-button type="primary" @click="sumbitEditRow()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
var _index;
export default {
  name: 'DataList',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      centerDialogVisible: false,
      editForm: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      tableData: [{
        date: '2020-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2020-05-04',
        name: '王大虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2020-05-01',
        name: '王中虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2020-05-03',
        name: '王全虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    deleteData(index, row) {
      this.centerDialogVisible = true
      this.tableData.splice(index, 1)
      console.log("进行了删除操作")
      console.log("index的值是：" + index)
      console.log("row的值是：", row)
    },
    modifyData(index, row) {
      this.centerDialogVisible = true
      this.editForm = Object.assign({}, row);//重置对象
      _index = index;
      console.log("index的值："+index)
      console.log("_index的值："+_index)
      console.log("row的值是：", row)//代表选择的这一行的数据

    },
    sumbitEditRow() {
      var editData = _index;
      console.log("editData的值"+	this.editForm)
      this.tableData[editData].name = this.editForm.name;
      this.tableData[editData].date = this.editForm.date;
      this.tableData[editData].address = this.editForm.address;
      this.centerDialogVisible = false;
      console.log("数据："+this.editForm.date)
      console.log("对象数组",this.tableData)
    },
    closeDialog(){
      this.centerDialogVisible=false
      console.log("editfrom",this.editForm)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
