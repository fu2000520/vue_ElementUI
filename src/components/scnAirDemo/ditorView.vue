<template>
  <div class="simditor">
    <textarea :id="id" @change="change"></textarea>
  </div>
</template>
<script>
import $ from "jquery";
import Simditor from "simditor";
import "simditor/styles/simditor.css";
export default {
  name: "simditor",
  data() {
    return {
      editor: "",
    };
  },
  props: {
    id: "", //这里传入动态id，一个页面能使用多个编辑器
    options: {
      //配置参数
      type: Object,
      default() {
        return {
          options: {
            placeHolder: "this is placeHolder",
            toolbarFloat: false,
            toolbar: [
              "title",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "fontScale",
              "color",
              "|",
              "ol",
              "ul",
              "blockquote",
              "code",
              "table",
              "|",
              "link",
              "image",
              "hr",
              "|",
              "indent",
              "outdent",
              "alignment",
            ],
            pasteImage: true,
            upload: {
              url: `http://...`, //文件上传的接口地址
              params: null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
              fileKey: "file", //服务器端获取文件数据的参数名
              connectionCount: 3,
              leaveConfirm: "正在上传文件",
            },
          },
        };
      },
    },
  },
  mounted() {
    let vm = this;
    this.editor = new Simditor(
      Object.assign(
        {},
        {
          textarea: $(`#${vm.id}`),
        },
        this.options
      )
    );
    this.editor.on("valuechanged", (e, src) => {
      this.valueChange(e, src);
    });
  },
  methods: {
    valueChange(e, val) {
      this.$emit("change", this.editor.getValue());
    },
  },
  components: {
    Simditor,
  },
  methods: {
    change(val) {
      console.log(val); //以html格式获取simditor的正文内容
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>