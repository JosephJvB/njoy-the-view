// ---TEMPLATE---
<template>
  <div id="MAIN">
    <Header></Header>
    <button v-on:click="addWatchedVideo">GET VIDS</button>
    <VideoCarousel v-bind:videos="allVideos"></VideoCarousel>
    <WatchedVideosList v-bind:videos="watchedVideos"></WatchedVideosList>
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
          this.allVideos = allVideos
          this.watchedVideos = watchedVideos
        })
        .catch(console.error)
      },
      addWatchedVideo: function () {
        const watchedVidId = 5
        return fetch(`/api/v1/addVideoToWatched/${watchedVidId}`, {method: 'post'})
        .then(() => {
          // add vid to watched on DB success
          const watchedVideo = this.allVideos.find(vid => vid.id === watchedVidId)
          this.watchedVideos = this.watchedVideos.push(watchedVideo)
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