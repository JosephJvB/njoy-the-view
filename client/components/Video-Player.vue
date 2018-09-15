// ---TEMPLATE---
<template>
  <div id="PLAYER_CONTAINER">
    <h3>NOW SHOWING:</h3>
    <h3 v-if="currentVid" >{{currentVid.title}}</h3>
    <div id="VID">
      <videoPlayer
        id="PLAYER"
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
      <p v-if="currentVid" id="VID_DESCRIPTION" >"{{currentVid.description}}"</p>
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
  #PLAYER_CONTAINER {
    width: 80%;
    text-align: center;
    margin: 2rem auto;
  }
  #VID {
    display: flex;
    justify-content: center;
    margin: 1rem auto 4rem auto;
    height: 50%;
  }
</style>