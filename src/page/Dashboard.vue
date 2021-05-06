<template>
  <div class="h-banner">
    <img class="img" src="@/assets/bg_title.png" alt="" @click="open()">
    <audio id="playButton" autoplay="autoplay" loop ref="audio">
      <source src="@/assets/audio/audio.mp3" type="audio/mpeg">
      您的浏览器不支持该音频格式。
    </audio>
    <div style="position: absolute;top: 40%;">
    <AthletesSlider :list="mouthData" />
    </div>
  </div>
</template>

<script>
import AthletesSlider from '@/components/athletes-slider'
import { list } from '@/api/user'
export default {
  name: "HBanner",
  data() {
    return {
      mouthData: [],
    };
  },
  components: {
    AthletesSlider
  },
  watch: {},
  created() {
    // this.$refs.audio.play()
    this.getList()
  },
  computed: {},
  mounted() {
    if(isNaN(this.$refs.audio.duration)){
      console.log('asdasdafsasfasfaff')
    } else {
      console.log(this.$refs.audio.duration, 'asdasdafsasfasfaff')
    }
  },
  methods: {
    getList () {
      list().then( res => {
        this.mouthData = res.data.mouthDate
      })
    },
    transTime(time) {
        var duration = parseInt(time);
        var minute = parseInt(duration/60);
        var sec = duration%60+'';
        var isM0 = ':';
        if(minute == 0){
            minute = '00';
        }else if(minute < 10 ){
            minute = '0'+minute;
        }
        if(sec.length == 1){
            sec = '0'+sec;
        }
        return minute+isM0+sec
    },
    open() {
      var audio = document.getElementById('playButton');
      if(audio.paused){
        audio.play();//audio.play();// 播放
      }else{
        audio.pause();
      }
    }
  }
};
</script>

<style scoped lang="less">
.h-banner{
  background: url("../assets/bg.jpeg");
  height: 100vh;
  .img{
    position: absolute;
    top: 0;
    width: 100vw;
    height: 27.5vw;
  }
}
</style>