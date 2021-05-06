<template>
    <audio id="playButton" controls autoplay="autoplay" loop ref="audio">
      <source src="@/assets/audio/audio.mp3" type="audio/mpeg">
      您的浏览器不支持该音频格式。
    </audio>
</template>
<script>
export default {
  name: "Audio",
  data() {
    return {
      mouthData: [],
    };
  },
  created() {
    this.$nextTick(() => {
      var audio = document.getElementById("playButton");
      audio.load();
    })
  }
}
</script>
