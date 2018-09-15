// ---TEMPLATE---
<template>
  <div id="MAIN">
    <Header></Header>
    <!-- if no videos show loading spinner instead -->
    <div
      id="JOE_ROUTER"
    >
      <div
        id="VID_LIST"
        v-if="!vidIdFromParams"
      >
        <VideoCarousel
          v-bind="{
            videos: allVideos,
            addWatchedVideo
          }"
        >
        </VideoCarousel>
        <WatchedVideosList
          v-bind="{videos: watchedVideos}"
        >
        </WatchedVideosList>
      </div>
        <div
          id="HISTORY"
          v-else-if="vidIdFromParams === 'history'"
        >
          i be history
        </div>
        <VideoPlayer
          v-else
          v-bind='{
              allVids: allVideos,
              addWatchedVideo,
            }'
        >
        </VideoPlayer>
    </div>
  </div>
</template>

// ---SCRIPT---
<script>
  // import components here
  import Header from './components/Header.vue'
  import VideoCarousel from './components/Video-Carousel.vue'
  import WatchedVideosList from './components/Watched-Videos-List.vue'
  import VideoPlayer from './components/Video-Player.vue'

  export default {
    components: {
      Header,
      VideoCarousel,
      WatchedVideosList,
      VideoPlayer,
    },
    data: function () {
      return { 
        allVideos: [],
        watchedVideos: [],
        vidIdFromParams: this.$route.params.vidId,
      }
    },
    methods: {
      fetchVideos: function () {
        return fetch('/api/v1/getVideos', {method: 'get'})
        .then(result => result.json())
        .then(({allVideos, watchedVideos}) => {
          console.log(watchedVideos)
          this.allVideos = allVideos
          this.watchedVideos = watchedVideos
        })
        .catch(console.error)
      },
      addWatchedVideo: function (watchedVidId) {
        return fetch(`/api/v1/addVideoToWatched/${watchedVidId}`, {method: 'post'})
        .then((res) => {
          if (res.status === 201) {
            const watchedVideo = this.allVideos.find(vid => vid.id === watchedVidId)
            this.watchedVideos = this.watchedVideos.concat(watchedVideo)
          } else if(res.status === 304) {
            // video has already been marked as watched
          } else {
            console.error('unexpected response code:', res)
          }
        })
        .catch(console.error)
      },
    },
    mounted: function () {
      this.fetchVideos()
    },
    watch: {
      $route: function () {
        this.vidIdFromParams = this.$route.params.vidId
      }
    }
  }
</script>

// ---STYLE---
<style>
</style>