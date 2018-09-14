const fetch = require('node-fetch')
// SERVER components
const parcelBundler = require('parcel-bundler'),
      bundler = new parcelBundler('static/index.html', {/* can pass options here */})
const express = require('express'),
      api = express()

// db connection
const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const DB = require('knex')(config)

const PORT = process.env.PORT || 8080

// register server routes
api.get('/api/test', (req, res) => res.send('hello world from web-server!'))

api.get('/api/v1/getVideos', (req, res) => {
      const videosUrl = 'https://jbanew.staging.joybusinessacademy.com/api/v2/assignment/videos'
      return fetch(videosUrl)
      .then(result => result.json())
      .then((json) => {
            const allVids = json.source.videos.entries
            return getWatchedVideos().then((watchedVids) => {
                  console.log('WATCHED', watchedVids)
                  // split videos into 'watched' and 'new'
                  const responseVideos = allVids.reduce((acc, vid, i) => {
                        if(watchedVids.includes(vid.id)) {
                              acc.watched.push(vid)
                        } else {
                              acc.new.push(vid)
                        }
                        return acc
                  }, {watched: [], new: []})
                  console.log('RESPONSE', responseVideos.new.length)
                  return res.send({videos: responseVideos})
            })
      })
      .catch(console.error)
})

function getWatchedVideos () {
      return DB('watched_videos')
      .select()
      .then(videos => videos.map(vid => vid.vid_id))
      .catch(console.error)
}

// NOT TESTED
api.post('/api/v1/addVideoToWatched/:id', (req, res) => {
      // check if vid already in db as watched
      return DB('watched_videos')
      .where('vid_id', req.params.id)
      .limit(1)
      .then((result) => {
            const [foundWatchedVideo] = result
            console.log('RESULT:', result)
            // if already watched exit and send success status
            if(foundWatchedVideo) {
                  return res.status(200)
            } else {
                  // if not watched, insert item and send success status
                  return DB('watched_videos')
                  .insert({
                        vid_id: req.params.id
                  })
                  .then(() => res.status(200))
            }
      })
})

// connect this middleware last :)
api.use(bundler.middleware())

api.listen(PORT, () => console.log('SERVER LISTENING @ PORT:', PORT))
