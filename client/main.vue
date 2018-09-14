// ---TEMPLATE---
<template>
  <div>
    <p>hey world</p>
    <!-- <Header></Header>
    <VideoCarousel v-bind:videos="newVideos"></VideoCarousel>
    <WatchedVideosList v-bind:videos="watchedVideos"></WatchedVideosList> -->
  </div>
</template>

// ---SCRIPT---
<script>
  // import components here
  // import Header from './components/Header.vue'
  // import VideoCarousel from './components/Video-Carousel.vue'
  // import WatchedVideosList from './components/Watched-Videos-List.vue'

  export default {
    name: 'Main',
    components: {
      // Header,
      // VideoCarousel,
      // WatchedVideosList,
    },
    data: function () {
      return { 
        newVideos: [],
        watchedVideos: [],
      }
    },
    methods: {
      fetchVideos: function () {},
      listVideoAsWatched: function () {},
    },
    mounted: function () {
    },
  }
</script>

// ---STYLE---
<style>
</style>