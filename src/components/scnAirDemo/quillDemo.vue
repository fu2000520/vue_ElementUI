
<template>
  <div>
    <div style="padding-left: 20%; padding-top: 10%; padding-right: 20%">
      <!-- Two-way Data-Binding -->
      <quill-editor
        ref="myQuillEditor"
        v-model="content"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
        @change="onEditorChange($event)"
      ></quill-editor>
      <br>
      <div >
        <el-button  type="primary" @click="open" style="float:right"
          >预览</el-button
        >
      </div>
    </div>
    <el-dialog
      title="加扣分规则"
      :visible.sync="dialogVisible"
      width="60%"
      height="70%"
    >
      <div class="editor_wrap" style="border: 1px dashed   #000">
        <quill-editor
          class="editor"
          v-model="contentLook"
          ref="myLookQuillEditor"
          @focus="onEditorFocusLook($event)"
          :options="editorOptionLook"
        ></quill-editor>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
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
      dialogVisible: false,
      // 富文本编辑器默认内容
      content: "",
      contentLook: "",
      //富文本编辑器配置
      editorOption: {
        modules: {
          //工具栏定义的
          toolbar: [
            ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
            ["blockquote", "code-block"], // 引用  代码块-----['blockquote', 'code-block']
            [{ align: [] }], // 对齐方式-----[{ align: [] }]
            [{ header: 1 }, { header: 2 }], // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
            [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
            [{ indent: "-1" }, { indent: "+1" }], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
            [{ size: ["small", false, "large", "huge"] }], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
            [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
            [{ font: [] }], // 字体种类-----[{ font: [] }]
            ["link"],
          ],
        },
        //主题
        theme: "snow",
        placeholder: "请输入正文",
      },
      editorOptionLook: {
        theme: "bubble",placeholder: "未添加加扣分规则",
      },
    };
  },
  methods: {
    //失去焦点事件
    onEditorBlur(quill) {
      // console.log("editor blur!", quill);
    },
    //获得焦点事件
    onEditorFocus(quill) {
      // console.log("editor focus!", quill);
    },
    // 准备富文本编辑器
    onEditorReady(quill) {
      // console.log("editor ready!", quill);
      quill.enable(true);
    },
    //内容改变事件
    onEditorChange({ quill, html, text }) {
      // console.log("editor change!", quill, html, text);
      console.log( html);
      this.content = html;
      quill.enable(true);
    },
    //-----------------分割线
    onEditorFocusLook(editor) {
      // 富文本获得焦点时的事件
      editor.enable(false); // 在获取焦点的时候禁用
    },
    
    open() {
      this.contentLook = this.content;
       this.dialogVisible = true;
    },
  },
};
</script>
