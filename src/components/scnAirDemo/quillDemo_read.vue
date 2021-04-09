
<template>
  <div>
      <div>
        <el-button type="primary" plain @click="loadTxt"
          >查看后台内容</el-button
        >
      </div>
   <div>
      <el-dialog
        title="查看加扣分规则"
        :visible.sync="dialogVisibleLoad"
        width="60%"
        height="70%"
      >
        <div class="editor_wrap" style="border: 1px solid  #000">
          <quill-editor
            class="editor"
            v-model="contentLoad"
            ref="myLookQuillEditor"
            @focus="onEditorFocusLoad($event)"
            @ready="onEditorFocusLoad($event)"
            :options="editorOptionLoad"
          ></quill-editor>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisibleLoad = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>


<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quillEditor,
  },
  data() {
    return {
      dialogVisibleLoad: false,
      contentLoad1: "",
      contentLoad: "",
      editorOptionLoad: {
        theme: "bubble",
        placeholder: "未添加加扣分规则",
      },
    };
  },
  methods: {
   
    onEditorFocusLoad(editor) {
      // 富文本获得焦点时的事件
      editor.enable(false); // 在获取焦点的时候禁用
    },
    loadTxt() {
      this.axios
        .post("loadTxt")
        .then((res) => {
          console.log(res.data);
          this.contentLoad1 = res.data;
          this.contentLoad = this.contentLoad1;
          console.log("contentLoad", this.contentLoad);
          this.dialogVisibleLoad = true;
        })
        .catch((err) => {
          this.$message({
            message: "接口异常",
            type: "danger",
          });
        });
    },
  },
};
</script>
<style >
.ql-editor {
  height: 400px;
}
</style>