// ---TEMPLATE---
<template>
  <div id="HEADER">
    <router-link to="/" class="nav-item">
      <h3>Home</h3>
    </router-link>
    <h1>Enjoy the View!</h1>
    <router-link to="/history" class="nav-item">
      <h3>History</h3>
    </router-link>
  </div>
</template>

// ---SCRIPT---
<script>
export default {
}
</script>

// ---STYLE---
<style>
  #HEADER {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    margin: 2rem auto;
    width: 80%;
    border: solid 1px grey; /* during dev only! to see elements better */
    text-align: center;
  }
  .nav-item {
   margin: auto 1rem; 
  }
</style>