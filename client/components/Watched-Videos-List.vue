// ---TEMPLATE---
<template>
  <div
    id="WATCHED_VIDS"
  >
    <h2 class="center" >WATCHED VIDEOS:</h2>
    <table>
      <tr>
        <th><h3 class="center">Title</h3></th>
        <th><h3 class="center">Rating</h3></th>
      </tr>
      <tr
        v-for="(vid, i) in videos"
        :key="i"
      >
        <td>{{ vid.title }}</td>
        <td v-if="vid.rating">{{ vid.rating }}</td>
        <td v-else>
          <form @submit.prevent="saveRating">
            <input type="number" v-bind:id="vid.id"/>
            <button>SAVE</button>
          </form>
        </td>
      </tr>
    </table>
  </div>
</template>

// ---SCRIPT---
<script>
  export default {
    props: ['videos', 'fetchVideos'],
    methods: {
      saveRating: function (e) {
        const { value, id } = event.target[0]
        return fetch(`/api/v1/saveRating/${id}/${value}`, {method: 'post'})
        .then(() => this.fetchVideos())
      }
    },
  }
</script>

// ---STYLE---
<style>
  td{
    height: 5vh;
    width: 30vw
  }
  table {
    margin: auto;
    text-align: left;
  }
  h2 {
    text-align: center;
  }
  #WATCHED_VIDS{
    margin: 7rem auto 1rem auto;
    border: solid 1px grey;
    height: 20%;
    width: 80%;
  }
</style>