<template>
  <p>sup world Im {{ message ? message : 'stressin' }}</p>
</template>
<script>
  // imports here
  export default {
    data: function () {
      return {message: 'happy'}
    },
  }
</script>