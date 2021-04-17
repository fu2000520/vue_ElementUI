<template>
  <div class="form" style="width: 50%; padding-left: 25%">
    <div>
      姓名： {{ staffinfoForm.name }}
      <br />
      年龄： {{ staffinfoForm.age }}
      <br />
      性别： {{ staffinfoForm.sex }}
      <br />
      所属部门： {{ staffinfoForm.club }}

      <br />
      爱好： {{ staffinfoForm.hobby }}
      <br />
      爱好(全选功能)： {{ staffinfoForm.hobby2 }}

      <br />
      开关： {{ staffinfoForm.realPS }}
      <br />
      备注： {{ staffinfoForm.context }}
      <br />
      日期： {{ staffinfoForm.date1 }}
    </div>
    <hr />
    <el-form :model="staffinfoForm" :rules="rules" ref="staffinfoForm">
      <el-form-item label="姓名：" prop="name">
        <el-input
          style="width: 50%"
          type="text"
          placeholder="请输入姓名"
          class=""
          v-model="staffinfoForm.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="年龄：" prop="age">
        <el-input-number
          v-model="staffinfoForm.age"
          :min="1"
          :max="100"
          label="请输入年龄"
        ></el-input-number>
        <!--      <el-input  type="number" placeholder="请输入年龄" class="" v-model='staffinfoForm.age'></el-input>-->
      </el-form-item>
      <el-form-item label="性别：" prop="sex">
        <el-radio-group v-model="staffinfoForm.sex">
          <el-radio
            v-for="(items) in sexItems"
            :label="items.values"
            :key="items.id"
          >
            {{ items.name }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="所属部门" prop="club">
        <el-select v-model="staffinfoForm.club" placeholder="请选择活动区域">
          <el-option
            v-for="items in clubs"
            :value="items.values"
            :label="items.name"
            :key="items.id"
            >{{ items.name }}</el-option
          >
        </el-select>
      </el-form-item>
      <el-form-item label="爱好" prop="hobby">
        <el-checkbox-group v-model="staffinfoForm.hobby">
          <el-checkbox
            v-for="items in hobbys"
            :label="items.values"
            :disabled="items.name === '跳舞'"
            :key="items.id"
            >{{ items.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="爱好(多选)" prop="hobby">
        <br />
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox
        >
        <div style="margin: 15px 0"></div>
        <el-checkbox-group
          v-model="staffinfoForm.hobby2"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox
            v-for="items in hobbys2"
            :label="items"
            :key="items.id"
            >{{ items }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="开关" prop="realPS">
        <el-switch v-model="staffinfoForm.realPS"></el-switch>
      </el-form-item>

      <el-form-item label="备注">
        <el-input type="textarea" v-model="staffinfoForm.context"></el-input>
      </el-form-item>

      <el-form-item label="日期">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="staffinfoForm.date1"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('staffinfoForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('staffinfoForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Form01",
  data() {
    return {
      staffinfoForm: {
        name: "",
        age: "0",
        sex: "",
        club: "xxb",
        realPS: "false",
        hobby: [],
        hobby2: [],
        context: " ",
        date1: "",
      },
      sexItems: [
        { name: "男", values: "M" },
        { name: "女", values: "F" },
      ],
      clubs: [
        { name: "信息部", values: "xxb" },
        { name: "人事部", values: "rsb" },
      ],
      hobbys: [
        { name: "唱歌", values: "music" },
        { name: "跳舞", values: "dance" },
        { name: "游戏", values: "game" },
      ],
      hobbys2: ["唱歌", "跳舞", "游戏"],
      isIndeterminate: true,
      checkAll: false,
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.staffinfoForm.hobby2 = val ? this.hobbys2 : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value.length);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.hobbys2.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.hobbys2.length;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("Commit");
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
</style>
