// ---TEMPLATE---
<template>
  <div id="MAIN">
    <Header></Header>
    <VideoCarousel
      v-if="allVideos.length > 0"
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
</template>

// ---SCRIPT---
<script>
  // import components here
  import Header from './components/Header.vue'
  import VideoCarousel from './components/Video-Carousel.vue'
  import WatchedVideosList from './components/Watched-Videos-List.vue'

  export default {
    components: {
      Header,
      VideoCarousel,
      WatchedVideosList,
    },
    data: function () {
        return { 
        allVideos: [],
        watchedVideos: [],
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
  }
</script>

// ---STYLE---
<style>
</style>