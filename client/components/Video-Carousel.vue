// ---TEMPLATE---
<template>
  <div id="VID_CAROUSEL">

    <Carousel
      :perPage="1"
      :navigationEnabled="true"
      >
      <Slide
          v-for="(vid, i) in videos"
          :key="i"
        >
        <p id="VID_TITLE">{{ vid.title }}</p>
        <img
          id="SLIDE_ITEM"
          v-bind="{src:vid.images[0].url}"
          @click.prevent="addWatchedVideo(vid.id)"
        />
      </Slide>
    </Carousel>
  </div>
</template>

// ---SCRIPT---
<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      Carousel,
      Slide,
    },
    props: ['videos', 'addWatchedVideo'],
  }
</script>

// ---STYLE---
<style>
  #VID_CAROUSEL{
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
    text-align: center;
  }
</style>