<template>
  <div class="h-banner" :style="{ height: itemHeight + 'px' }">
    <img class="img-style" src="@/assets/bg_title.png" alt="" />
    <ul
      id="bannerUl"
      :style="{
        width: itemWidth * banner.data.length + 'px',
        height: itemHeight + 'px',
        ...boxStyle,
      }"
    >
      <li :style="{ width: itemWidth + 'px' }" class="li-content">
        <div
          v-for="(item, index) in mouthData"
          :key="index"
          class="flex-content"
        >
          <div class="flex-title">{{ item.title }}</div>
          <div
            class="cont-flex"
            v-for="(cont, index) in item.list"
            :key="index"
          >
            <div class="flex-left">
              <!-- <img class="img-style" src="@/assets/logo.png" alt="名次" />
              <img class="img-style" src="@/assets/logo.png" alt="照片" /> -->
            </div>
            <div class="flex-right">
              <div class="title">姓名：{{ cont.title }}</div>
              <div class="dept">部门：{{ cont.dept }}</div>
              <div class="achieve">业绩：{{ cont.achieve }}</div>
            </div>
          </div>
        </div>
      </li>
      <li :style="{ width: itemWidth + 'px' }" class="li-content">
        <div
          v-for="(item, index) in mouthData1"
          :key="index"
          class="flex-content"
        >
          <div>{{ item.title }}</div>
          <div
            class="cont-flex"
            v-for="(cont, index) in item.list"
            :key="index"
          >
            <div class="flex-left">
              <img class="img-style" src="@/assets/logo.png" alt="名次" />
              <img class="img-style" src="@/assets/logo.png" alt="照片" />
            </div>
            <div class="flex-right">
              <div class="title">姓名：{{ cont.title }}</div>
              <div class="dept">部门：{{ cont.dept }}</div>
              <div class="achieve">业绩：{{ cont.achieve }}</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HBanner",
  props: {
    banner: {
      type: Object,
      default: function () {
        return {
          autoDisplayFlag: false, // 是否自动轮播
          data: [
            {
              picUrl:
                "http://gw.alicdn.com/imgextra/i2/96/O1CN01EiGkvo1Ca0Y6UsSrX_!!96-0-lubanu.jpg",
              linkUrl: "https://h5.m.taobao.com/",
            },
            {
              picUrl:
                "http://gw.alicdn.com/imgextra/i2/96/O1CN01EiGkvo1Ca0Y6UsSrX_!!96-0-lubanu.jpg",
              linkUrl: "https://h5.m.taobao.com/",
            },
          ],
        };
      },
    },
  },
  data: function () {
    return {
      transitionDuration: "800ms", // 滑动动画时间
      autoTimer: 0, // 自动轮播定时器
      boxStyle: {
        transitionDuration: 0,
        transform: "translate(0,0)",
      },
      itemWidth: 0, // 轮播图的宽度
      itemHeight: 0, // 轮播图的高度
      displayIndex: 0, // 当前展示的轮播图的索引
      slidePosition: "left",
      startX: 0,
      startY: 0,
      endTime: 0,
      moveX: 0,
      moveY: 0,
      disX: 0,
      transitionendCallback: function () {
        console.log("ok");
      },
      mouthData: [
        {
          title: "一月",
          list: [
            {
              title: "asdad",
              image: "../../assets/logo.png",
              pic: "../../assets/logo.png",
              achieve: "100000万",
              dept: "市场部",
            },
          ],
        },
        {
          title: "二月",
          list: [
            {
              title: "asdad",
              image: "../../assets/logo.png",
              pic: "../../assets/logo.png",
              achieve: "100000万",
              dept: "市场部",
            },
          ],
        },
        {
          title: "三月",
          list: [
            {
              title: "asdad",
              image: "../../assets/logo.png",
              pic: "../../assets/logo.png",
              achieve: "100000万",
              dept: "市场部",
            },
          ],
        },
        {
          title: "四月",
          list: [
            {
              title: "asdad",
              image: "../../assets/logo.png",
              pic: "../../assets/logo.png",
              achieve: "100000万",
              dept: "市场部",
            },
          ],
        },
      ],
      mouthData1: [
        {
          title: "五月",
          list: [
            {
              title: "asdad",
              image: "../../assets/logo.png",
              pic: "../../assets/logo.png",
              achieve: "100000万",
              dept: "市场部",
            },
          ],
        },
        {
          title: "六月",
          list: [
            {
              title: "asdad",
              image: "../../assets/logo.png",
              pic: "../../assets/logo.png",
              achieve: "100000万",
              dept: "市场部",
            },
          ],
        },
        {
          title: "七月",
          list: [
            {
              title: "asdad",
              image: "../../assets/logo.png",
              pic: "../../assets/logo.png",
              achieve: "100000万",
              dept: "市场部",
            },
          ],
        },
        {
          title: "八月",
          list: [
            {
              title: "asdad",
              image: "../../assets/logo.png",
              pic: "../../assets/logo.png",
              achieve: "100000万",
              dept: "市场部",
            },
          ],
        },
      ],
    };
  },
  watch: {
    displayIndex: function () {
      setTimeout(() => {
        if (this.displayIndex >= 0) {
          console.log(
            -this.displayIndex * this.itemWidth,
            "this.displayIndex * this.itemWidth"
          );
          this.boxStyle = {
            transitionDuration: this.transitionDuration,
            transform:
              "translate(" + -this.displayIndex * this.itemWidth + "px,0)",
          };
          this.transitionendCallback = function () {
            this.boxStyle.transitionDuration = "0s";
            if (this.displayIndex >= this.banner.data.length) {
              this.boxStyle.transitionDuration = "0s";
              this.boxStyle.transform = "translate(0,0)";
              this.displayIndex = 0;
            }
            if (this.autoDisplayFlag) {
              this.autoDisplay();
            }
          };
        } else {
          this.displayIndex = 0;

          this.boxStyle.transitionDuration = "0s";
          this.boxStyle.transform = "translate(0,0)";
        }
      }, 0);
    },
  },
  created: function () {
    let that = this;
    this.$nextTick(() => {
      if (this.banner.autoDisplayFlag) {
        this.autoDisplay();
      }
      this.computeWidthHeight();
      this.boxStyle = {
        transitionDuration: "0",
        transform: "translate(" + -this.displayIndex * this.itemWidth + "px,0)",
      };
      document.getElementById("bannerUl").addEventListener(
        "transitionend",
        function () {
          that.transitionendCallback();
        },
        false
      );
      window.onresize = function () {
        that.computeWidthHeight();
      };
    });
  },
  computed: {},
  mounted: function () {},
  methods: {
    computeWidthHeight() {
      let that = this;
      this.itemWidth = window.innerWidth;
      console.log(this.itemWidth, "his.itemWidth");
      var myImg = new Image();
      myImg.src = this.banner.data[0].picUrl;
      myImg.onload = function () {
        that.itemHeight = (myImg.height / myImg.width) * that.itemWidth;
      };
    },
    /**
     * 自动轮播
     */
    autoDisplay: function () {
      if (this.banner.autoTimer) {
        clearInterval(this.autoTimer);
      }
      this.autoTimer = setInterval(() => {
        this.displayIndex++;
      }, 2000);
    },
  },
};
</script>

<style scoped lang="less">
.h-banner {
  * {
    margin: 0;
    padding: 0;
  }
  position: relative;
  margin: 0;
  padding: 0;
  min-height: 100%;
  overflow: hidden;
//   background: url("../assets/bg.jpeg");
  .img-style {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 300px;
  }
  ul {
    position: absolute;
    top: 300px;
    left: 0;
    overflow: hidden;
    &:after {
      content: "";
      clear: both;
    }
    li {
      float: left;
      list-style: none;
      a {
        display: block;
        img {
          width: 100%;
        }
      }
    }
  }
  .btn-list {
    position: absolute;
    top: 41%;
    right: 1rem;
    a {
      display: inline-block;
      margin-right: 0.5rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid #fff;
      background: rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
      &.select {
        background: #fff;
      }
    }
  }
}
.li-content {
  display: flex;
  justify-content: center;
  .flex-content {
    width: calc((100% - 540px) / 4);
    border: 4px solid #D1A241;
    margin-right: 75px;
    &:last-child {
        margin-right: 0;
    }
    .flex-title{
        text-align: center;
    }
    .cont-flex {
      display: flex;
      justify-content: center;
      .flex-left {
        height: 64px;
        line-height: 64px;
        .img-style {
          width: 50px;
          height: 50px;
        }
      }
      .flex-right {
      }
    }
  }
}
</style>