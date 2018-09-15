// ---TEMPLATE---
<template>
  <div id="VID_PLAYER">
    I WILL BE A VIDEO PLAYER SOON
  </div>
</template>
// ---SCRIPT---
<script>
  import VueVideoPlayer from 'vue-video-player'

  export default {
    data: function () {
      return {
        currentVid: this.allVids.find(vid => vid.id === this.$route.params.vidId)
      }
    },
    mounted: function () {
      console.log('hi', this.allVids.find(vid => vid.id === this.$route.params.vidId))
    },
    props: ['allVids'],
  }
</script>
// ---STYLE---
<style>
  #VID_PLAYER {
    margin: auto;
    border: solid 1px grey;
    height: 50%;
    width: 80%;
  }
</style>