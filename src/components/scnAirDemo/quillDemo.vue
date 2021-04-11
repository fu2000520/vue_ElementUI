
<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="富文本填写">
        <quillDemo_write></quillDemo_write
      ></el-tab-pane>
      <el-tab-pane label="富文本阅读"
        ><quillDemo_read></quillDemo_read
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import quillDemo_write from "./quillDemo_write.vue";
import quillDemo_read from "./quillDemo_read.vue";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quillEditor,
  },
  components: {
    //将导入的Vue 注册为组件
    quillDemo_write,
    quillDemo_read,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style >
.ql-editor {
  height: 400px;
}
</style>