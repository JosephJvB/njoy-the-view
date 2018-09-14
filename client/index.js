// dont even have to import vue here! because we have the script tag in our html head :o

const app = new Vue({
  el: '#welcome',
  data: {
    message: 'YO',
    items: [
      'one',
      'two',
      'four',
      'DARN! I CANT COUNT'
    ]
  }
})

// WORKS
app.items.push('next item')
app.message = 'oh snap you overwrote a property thats not functional!'

// DOES NOT WORK: looks like you cant add properties, but you  CAN
// app.newProperty = 'added property later on :)'

// so you can edit existing properties, but you cannot add new ones outside of your new Vue declaration