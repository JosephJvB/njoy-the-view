// ---TEMPLATE---
<template>
  <div id="VID_CAROUSEL">
    videos go here :)
    <Carousel
      :perPage="1"
      :navigationEnabled="true"
      >
        <Slide
            v-for="(vid, i) in videos"
            :key="i"
          >
          <img v-bind:src="vid.images[0].url"/>
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
    props: ['videos'],
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
</style>