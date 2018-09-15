// ---TEMPLATE---
<template>
  <div id="VID_PLAYER">
    <videoPlayer
      v-if="currentVid"
      class="vjs-custom-skin"
      v-bind='{
        options: {
          language: currentVid.contents[0].language,
          playbackRates: [0.75, 1, 1.25, 1.5, 2, 5],
          sources: [{
            type: "video/" + currentVid.contents[0].format,
            src: currentVid.contents[0].url,
          }],
          poster: currentVid.images[0].url,
          width: vidWidth
        }
      }'
      @ended="handleVideoEnd"
    >
    </videoPlayer>
    <div v-else>
      VIDEO LOADING...
    </div>
    <ResizeObserver @notify="resize"/>
  </div>
</template>
// ---SCRIPT---
<script>
  import { videoPlayer } from 'vue-video-player'
  import { ResizeObserver } from 'vue-resize'
  import 'video.js/dist/video-js.css'
  import 'vue-resize/dist/vue-resize.css'

  export default {
    components: {
      videoPlayer,
      ResizeObserver
    },
    data: function () {
      return {
        vidWidth: window.innerWidth * 0.8,
        currentVid: this.allVids.find(vid => vid.id === this.$route.params.vidId),
      }
    },
    methods: {
      resize: function () {
        return this.vidWidth = window.innerWidth * 0.8
      },
      handleVideoEnd: function () {
        this.addWatchedVideo(this.$route.params.vidId)
        this.$router.push('/')
      },
    },
    props: ['allVids', 'addWatchedVideo'],
    mounted: function () {
      // will occur if user refreshes on video page
      // TODO: change this to a smarter: getSingleVideoById
      if(!this.currentVid) {
        return fetch('/api/v1/getVideos', {method: 'get'})
        .then(result => result.json())
        .then(({allVideos, watchedVideos}) => {
          this.currentVid = allVideos.find(vid => vid.id === this.$route.params.vidId)
        })
      }
    },
  }
</script>
// ---STYLE---
<style>
  #VID_PLAYER {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    height: 50%;
    width: 80%;
  }
</style>