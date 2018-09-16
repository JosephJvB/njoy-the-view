// ---TEMPLATE---
<template>
  <div id="VID_CAROUSEL"
    v-on:keyup.right.prevent="handleKeyPress(1)"
    v-on:keyup.left.prevent="handleKeyPress(-1)"
  >
    <h3 v-if="videos.length === 0">VIDEOS LOADING...</h3>
    <Carousel
      id="CAROL"
      v-else
      v-bind='{
        perPage: 5,
        navigationEnabled: true,
        navigateTo: idx
      }'
    >
      <Slide
        v-for="(vid, i) in videos"
        :key="i"
      >
        <router-link v-bind:to="vid.id">
          <p id="VID_TITLE">{{ vid.title }}</p>
          <img
            id="SLIDE_ITEM"
            v-bind="{src: vid.images[0].url}"
          />
        </router-link>
      </Slide>
    </Carousel>
  </div>
</template>

// ---SCRIPT---
<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    data: function () {
      return { idx: 0 }
    },
    components: {
      Carousel,
      Slide,
    },
    methods: {
      handleKeyPress: function (num) {
        let newIdx = this.idx = this.idx + num
        if(newIdx < 0) newIdx = 0 // dont go under
        if(newIdx > 6) newIdx = 6 // dont go over
        return newIdx
      }
    },
    props: ['videos', 'addWatchedVideo'],
  }
</script>

// ---STYLE---
<style>
  #VID_CAROUSEL {
    margin: auto;
    border: solid 1px grey;
    height: 50%;
    width: 80%;
  }
  #SLIDE_ITEM {
    margin: auto;
    display: block;
  }
  #VID_TITLE {
    height: 50px;
    text-align: center;
  }
  h3 {
    text-align: center;
  }
</style>