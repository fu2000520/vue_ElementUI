<template>
  <div>
    <el-form :rules="rules" :model="form" ref="FormTable">
      <el-row :span="24">
        <el-col :span="6" :offset="6">
          <el-form-item prop="title">
            <el-input v-model="form.title" placeholder="标题"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="24" v-for="(item, index) in this.form.person" :key="index">
        <el-col :span="6">
          <el-form-item
            :prop="'person.' + index + '.name'"
            :rules="[{ required: true, message: '请完善信息' }]"
          >
            <el-input
              v-model="form.person[index].name"
              placeholder="姓名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="form.person[index].sex"
            placeholder="性别"
          ></el-input>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="form.person[index].age"
            placeholder="年龄"
          ></el-input>
        </el-col>
        <el-col :span="1" v-if="index == 0"
          ><el-button
            type="primary"
            icon="el-icon-plus"
            circle
            @click="addList"
          ></el-button
        ></el-col>
        <el-col :span="1" v-if="index != 0"
          ><el-button
            type="primary"
            icon="el-icon-minus"
            circle
            @click="delList(index)"
          ></el-button
        ></el-col>
      </el-row>
    </el-form>
    <br />
    <div style="margin: 0 auto; text-align: center">
      <el-button @click="submitForm('FormTable')">确认</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        title: "",
        person: [
          {
            name: "",
            sex: "",
            age: "",
          },
        ],
      },
      rules: {
        title: [{ required: true, message: "title不能为空", trigger: "blur" }],
      },
    };
  },
  methods: {
    addList() {
      this.form.person.push({
        name: "",
        sex: "",
        age: "",
      });
    },
    delList(index) {
      this.form.person.splice(index, 1);
    },
    submitForm(formName) {
      this.$refs["FormTable"].validate((res) => {
        if (res) {
          alert("确认成功");
          console.log(this.form);
        } else {
          console.log("请认真填写表单");
        }
      });
    },
  },
};
</script>