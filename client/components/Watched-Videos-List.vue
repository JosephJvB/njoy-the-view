// ---TEMPLATE---
<template>
  <div
    id="WATCHED_VIDS"
  >
    WATCHED VIDS BY TITLE:
    <div
      v-for="(vid, i) in videos"
      :key="i"
    >
    {{ vid.title }}
    </div>
  </div>
</template>

// ---SCRIPT---
<script>
  export default {
    props: ['videos']
  }
</script>

// ---STYLE---
<style>
  #WATCHED_VIDS{
    margin: 7rem auto 1rem auto;
    border: solid 1px grey;
    height: 20%;
    width: 80%;
  }
</style>