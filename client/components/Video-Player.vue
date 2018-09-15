// ---TEMPLATE---
<template>
  <div id="VID_PLAYER">
    <videoPlayer
      class="vjs-custom-skin"
      v-bind='{
        options: {
          language: currentVid.contents[0].language,
          playbackRates: [0.75, 1, 1.25, 1.5, 2, 5],
          sources: [{
            type: "video/" + currentVid.contents[0].format,
            src: currentVid.contents[0].url
          }],
          poster: currentVid.images[0].url,
          width: 800
        }
      }'
      @ended="handleVideoEnd"
    >
    </videoPlayer>
  </div>
</template>
// ---SCRIPT---
<script>
  import { videoPlayer } from 'vue-video-player'
  import 'video.js/dist/video-js.css'

  export default {
    components: {
      videoPlayer,
    },
    data: function () {
      return {
        currentVid: this.allVids.find(vid => vid.id === this.$route.params.vidId),
      }
    },
    methods: {
      handleVideoEnd: function () {
        this.addWatchedVideo(this.$route.params.vidId)
        this.$router.push('/')
      }
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
    border: solid 1px grey;
    height: 50%;
    width: 80%;
  }
</style>