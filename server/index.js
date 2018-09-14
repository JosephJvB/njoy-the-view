const parcelBundler = require('parcel-bundler'),
			bundler = new parcelBundler('static/index.html', {/* can pass options here */})

const express = require('express'),
      api = express()

const PORT = process.env.PORT || 8080
      
api.get('/api/test', (req, res) => res.send('hello world from web-server!'))

// connect this middleware last :)
api.use(bundler.middleware())

api.listen(PORT, () => console.log('SERVER LISTENING @ PORT:', PORT))
