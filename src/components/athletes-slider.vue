<template>
  <div class="athletes-slider">
    <vue-seamless-scroll
      :data="list"
      class="seamless-warp"
      :class-option="classOption"
      v-if="list.length >= 4"
    >
      <div class="middle-father">
        <div class="middle">
          <div class="middle-item" v-for="(item, index) in list" :key="index">
            <div class="title">{{ item.mouth }}</div>
            <div
              class="content-style"
              v-for="(cont, index) in item.list"
              :key="index"
            >
              <div class="left">
                <img
                  class="icon-img"
                  src="@/assets/gold.png"
                  alt="金牌"
                  v-if="index === 0"
                />
                <img
                  class="icon-img"
                  src="@/assets/silver.png"
                  alt="银牌"
                  v-if="index === 1"
                />
                <img
                  class="icon-img"
                  src="@/assets/copper.png"
                  alt="铜牌"
                  v-if="index === 2"
                />
              </div>
              <div class="center">
                <img class="img-style" :src="cont.photoPath" alt="头像" />
              </div>
              <div class="right">
                <div class="right-title">姓名：{{ cont.name }}</div>
                <div class="right-dept">部门：{{ cont.department }}</div>
                <div class="right-achieve">业绩：{{ cont.performance }}单</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </vue-seamless-scroll>
    <div v-if="list.length < 4">
      <div class="middle-father">
        <div class="middle">
          <div class="middle-item" v-for="(item, index) in list" :key="index">
            <div class="title">{{ item.mouth }}</div>
            <div
              class="content-style"
              v-for="(cont, index) in item.list"
              :key="index"
            >
              <div class="left">
                <img
                  class="icon-img"
                  src="@/assets/gold.png"
                  alt="金牌"
                  v-if="index === 0"
                />
                <img
                  class="icon-img"
                  src="@/assets/silver.png"
                  alt="银牌"
                  v-if="index === 1"
                />
                <img
                  class="icon-img"
                  src="@/assets/copper.png"
                  alt="铜牌"
                  v-if="index === 2"
                />
              </div>
              <div class="center">
                <img class="img-style" src="@/assets/copper.png" alt="头像" />
              </div>
              <div class="right">
                <div class="right-title">姓名：{{ cont.name }}</div>
                <div class="right-dept">部门：{{ cont.department }}</div>
                <div class="right-achieve">业绩：{{ cont.performance }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "athletes-slider",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
    };
  },
  computed: {
    classOption() {
      return {
        autoPlay: this.list.length > 4,
        step: 0, // 数值越大速度滚动越快
        // limitMoveNum: 10, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 2, // 0向下 1向上 2向左 3向右
        // openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  methods: {
  },
  create() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
@width: 60px;
@width-p: 60px;
.seamless-warp {
  width: 100%;
  overflow: hidden;
}
.athletes-slider {
  position: relative;
  display: flex;
  align-items: center;
  .middle-father {
    white-space: nowrap;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .middle {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    transition-duration: 1000ms;
    transform: translateX(0px);
    .middle-item {
      display: inline-block;
      min-width: calc((100vw - 375px) / 4);
      height: 250px;
      margin: 0 37.5px 0 0;
      padding: 3.5px 3px;
      text-align: center;
      box-sizing: border-box;
      cursor: pointer;
      border: 1px solid;
      padding: auto 10px;
      border-image: linear-gradient(180deg, #f6f5ad, #d1a241) 5 5;
      .title {
        margin-top: 10px;
        color: #e3cb72;
      }
      .content-style {
        display: flex;
        justify-content: center;
        height: 60px;
        margin: 10px 0;
        .left {
          display: flex;
          align-items: center;
          .icon-img {
            width: 28px;
            height: 30px;
            align-items: center;
          }
        }
        .img-style {
          width: 36px;
          height: 50px;
        }
        .left,
        .center {
          display: flex;
          align-items: center;
        }
        .center {
          margin-left: 5px;
        }
        .right {
          margin: 5px 0 0 10px;
          width: 120px;
          .right-title,
          .right-dept,
          .right-achieve {
            height: 15px;
            line-height: 15px;
            font-size: 10px;
            color: #e3cb72;
            text-align: left;
          }
          .right-title {
            margin-top: 2.5px;
          }
        }
      }
    }
  }
  .middle2 {
    justify-content: space-between !important;
    .middle-item {
      &:nth-of-type(1) {
        margin: 0 3.5px 0 0px;
      }
      &:last-child {
        margin: 0 0px 0 3.5px;
      }
    }
  }
}
</style>
