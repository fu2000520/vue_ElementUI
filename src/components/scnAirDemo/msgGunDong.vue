<template>
  <div id="app">
    <div class="msg__content">
      <el-carousel
        height="120px"
        direction="vertical"
        indicator-position="none"
        :autoplay="true"
      >
        <el-carousel-item v-for="item in msgList" :key="item.pkid">
            <el-link class="medium"  type="warning" v-for="(item2, i) in item" :key="i">
             {{ item2.title }}
            </el-link>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgList: [
        { pkid: 13333, title: "中国红十字会向印度提供援助" },
        { pkid: 13334, title: "阿富汗发生连环袭击 外交部回应" },
        { pkid: 13335, title: "停车2小时被共享电动车层层包围" },
        { pkid: 13336, title: "云南一灭火直升机坠入洱海" },
        { pkid: 13337, title: "自动挡科目二考试减少为4项" },
        { pkid: 13338, title: "红场大阅兵普京撂下一句狠话" },
        { pkid: 13339, title: "金钱豹外逃事件立案调查" },
        { pkid: 13332, title: "31省份新增确诊11例均为境外输入 " },
        { pkid: 13331, title: "印度死亡病例可能将超百万 " },
      ],
      showNum: 4,
    };
  },
  created() {
    this.msgList = this.group(this.msgList, this.showNum);

    console.log("msgList", this.msgList);
  },
  methods: {
    group(array, subGroupLength) {
      let index = 0;
      let newArray = [];
      while (index < array.length) {
        newArray.push(array.slice(index, (index += subGroupLength)));
      }
      return newArray;
    },
  },
};
</script>
<style scoped>
#app {
  position: relative;
  display: flex;
  width: 15%;
  height: 100px;
  padding: 8px 12px;
  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: 1px 1px 2px #888888;
  background-color: #fdf6ec;
  overflow: hidden;
  opacity: 1;
  align-items: center;
  transition: opacity 0.2s;
}
#app .msg__content {
  display: table-cell;
  padding: 0 8px;
  width: 100%;
}
#app .msg__content .medium {
  font-size: 14px;
   margin-top: 8px;
  opacity: 0.75;
}
</style>