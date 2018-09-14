// SERVER components
const parcelBundler = require('parcel-bundler'),
      bundler = new parcelBundler('static/index.html', {/* can pass options here */})
const express = require('express'),
      api = express()

const fetch = require('node-fetch')
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
            const allVideos = json.source.videos.entries
            return getWatchedVideoIds().then((watchedVideoIds) => {
                  return res.send({
                        allVideos,
                        watchedVideos: allVideos.filter(vid => watchedVideoIds.includes(vid.id))
                  })
            })
      })
      .catch(console.error)
})

function getWatchedVideoIds () {
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
            // if already watched: exit and send success status
            if(foundWatchedVideo) {
                  return res.status(200).end()
            } else {
                  // if not watched: insert item and send success status
                  return DB('watched_videos')
                  .insert({
                        vid_id: req.params.id
                  })
                  .then(() => res.status(200).end())
            }
      })
})

// connect this middleware last :)
api.use(bundler.middleware())

api.listen(PORT, () => console.log('SERVER LISTENING @ PORT:', PORT))
