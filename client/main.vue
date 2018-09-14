// ---TEMPLATE---
<template>
  <div id="MAIN">
    <Header></Header>
    <button v-on:click="fetchVideos">GET VIDS</button>
    <VideoCarousel v-bind:videos="newVideos"></VideoCarousel>
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
        newVideos: [],
        watchedVideos: [],
      }
    },
    methods: {
      fetchVideos: function () {
        return fetch('/api/v1/getVideos')
        .then(result => result.json())
        .then(json => console.log(json))
        .catch(console.error)
      },
      listVideoAsWatched: function () {},
    },
    mounted: function () {
    },
  }
</script>

// ---STYLE---
<style>
</style>