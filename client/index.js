import Vue from 'vue'

import Main from './main'

new Vue({
  el: '#welcome',
  render: (createElement) => createElement(Main)
})

// WORKS
// app.items.push('next item')
// app.message = 'oh snap you overwrote a property thats not functional!'

// DOES NOT WORK: looks like you cant add properties, but you  CAN
// app.newProperty = 'added property later on :)'

// so you can edit existing properties, but you cannot add new ones outside of your new Vue declaration