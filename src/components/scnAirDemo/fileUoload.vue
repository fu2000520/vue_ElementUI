<template>
  <div>
    <el-dialog
      :close-on-click-modal="false"
      title="数据信息新增"
      redefine
      :visible.sync="applyFlag"
      @close="closeDialog"
    >
      <el-form ref="applyForm" :model="applyForm" :rules="applyRules">
        <el-row>
          <el-col :span="24">
            <el-form-item label="备注" prop="remark">
              <el-input
                type="textarea"
                :rows="4"
                placeholder="请输入备注"
                v-model="applyForm.remark"
                prop="remark"
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-upload
            class="upload-demo"
            ref="update"
            :action="action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="file.fileList"
            :auto-upload="false"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!--        <el-button type="primary" :disabled="btnDisable" :loading="formLoading" @click="handleSaveApply">保存</el-button>-->
        <el-button
          type="primary"
          :loading="submitFormLoading"
          @click="handleSaveToSubmit('applyForm')"
          >提交</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "VueElementFileuoload",
  data() {
    return {
      action: "/upload", //文件上传接口
      applyFlag: true, //弹出层标示
      reportFormatRole: "", //需验证的文件格式
      reportSize: "", //需验证文件的大小
      submitFormLoading: false, //提交表单加载
      data: {
        templateName: "security",
        moduleName: "seReportRecord",
        pkid: "",
      }, //保存业务参数/保存业务参数
      applyForm: {
        remark: "",
      },
      file: { filePkid: "", fileList: [], data: "", currentItems: [] },
      applyRules: {
        //验证规则   blur：失去焦点实现     required:必填项
        remark: [
          {
            required: true,
            message: "请输入文件名称",
            trigger: "blur",
          },
          {
            min: 0,
            max: 200,
            message: "最多输入200字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    //弹出层关闭出发事件
    closeDialog() {
      this.applyFlag = false;
      this.file.filePkid = ""; //文件上传附带编号
      this.reportFormatRole = ""; //文件类型标识
    },
    handleSaveToSubmit(applyForm) {
      this.$refs[applyForm].validate((valid) => {
        if (valid) {
          //   if (
          //     this.uploadItems.length == 0 ||
          //     !this.beforeUpload() ||
          //     this.currentItems.length == 0
          //   ) {
          //     this.currentItems = "";
          //     this.$common.error("请正确添加附件");
          //     return;
          //   }

          console.log("添加成功");
          this.$refs.update.submit();
        } else {
          this.$notify.error({
            title: "错误",
            message: "请按规则填写",
          });
          //   this.$common.error("请按规则填写");
        }
      });
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // //文件标签发生改变触发事件
    // handleChange(files, fileList) {
    //   console.log("进入handleChange");
    //   console.log(fileList);
    //   console.log(this.file.fileList);
    //   this.file.fileList = fileList;
    //   this.file.currentItems = this.$common.copy(fileList);
    //   console.log(this.file.currentItems);

    //   this.checkFileTypeSize(); //检验文件大小和格式
    //   if (fileList.length !== 0) {
    //     this.hasFiles = true;
    //     this.handleFilter(fileList);
    //   } else {
    //     this.hasFiles = false;
    //   }
    // },
    // /* 上传前钩子 */
    // beforeUpload(file) {
    //   console.log("进入beforeUpload");
    //   return this.checkFileTypeSize();
    // },
    // /* 移除文件 */
    // handleRemove(file, fileList) {
    //   console.log("进入handleRemove");
    // },
    // /* 检查文件类型大小 */
    // checkFileTypeSize() {
    //   console.log("进入checkFileTypeSize");
    //   let isPass = true; //检验是否通过标示
    //   let type = this.file.reportFormatRole; //获取需要验证的格式
    //   var bigSize = Number(this.reportSiz); //获取需要验证的文件大小
    //   for (let i = 0; i < this.currentItems.length; i++) {
    //     const extension = this.currentItems[i].name.substring(
    //       this.currentItems[i].name.lastIndexOf(".") + 1
    //     );
    //     console.log(extension);

    //     if (type && type.indexOf(extension) === -1) {
    //       this.$message({
    //         message: `文件名:${this.currentItems[i].name}文件类型不支持`,
    //         type: "warning",
    //         duration: 6000,
    //       });
    //       isPass = false;
    //       break;
    //     }

    //     const isLt10M = this.currentItems[i].size / 1024 / 1024 < bigSize; //这里做文件大小限制
    //     console.log(isLt10M);
    //     if (!isLt10M) {
    //       this.$message({
    //         message:
    //           `文件名:${this.currentItems[i].name}大小超过` +
    //           bigSize +
    //           `M限制了`,
    //         type: "warning",
    //         duration: 6000,
    //       });
    //       isPass = false;
    //     }
    //   }
    //   if (!isPass) {
    //     this.$refs.upload.clearFiles();
    //     this.$emit("loading", false);
    //     this.isSaving = false;
    //   }
    //   return isPass;
    // },
    // /* 捕获错误 */
    // handleError(err, file, fileList) {
    //   this.isSaving = false;
    //   console.log("上传失败");
    //   console.log(file);
    //   console.log(this.fileList);
    //   const { reason } = JSON.parse(err.toString().substring(6));
    //   if (reason == "运行时错误，请联系管理员") {
    //     this.$common.error("上传文件不能超过10M");
    //   } else if (reason == "文件类型不支持") {
    //     this.$common.error(reason);
    //   } else {
    //     this.$common.error();
    //   }
    // },
    // /* 移除文件前 */
    // beforeRemove(file, fileList) {
    //   console.log("进入beforeRemove");
    //   this.applyForm.reportFormat = "";
    //   this.currentItems = this.$common.copy(fileList);
    //   // return this.$confirm(`确定移除 ${file.name}？`);
    // },
    // handleSuccess(response, file, fileList) {
    //   console.log("进入handleSuccess");
    //   if (response.success) {
    //     this.count++;
    //     if (this.count == this.uploadItems.length) {
    //       this.sussItems = this.$common.copy(fileList); //记录上传成功的文件列表
    //       this.$common.success("上传成功");
    //       this.fileList = [];
    //       this.uploadItems = [];
    //       this.activeAddIndex = "附件列表";
    //       this.$emit("reload");
    //       this.getAttachmentList();
    //       this.isSaving = false;
    //       this.count = 0;
    //     }
    //   }
    // } /* 控制文件超出 */,
    // handleExceed(files, fileList) {
    //   console.log("进入handleExceed");
    //   this.$message.warning(`当前限制选择 1 个文件`);
    // },
    // uploadAuthorization() {
    //   return { Authorization: this.$store.state.$authorization };
    // },
    // accept() {
    //   return this.reportFormatRole;
    // },
  },
};
</script>