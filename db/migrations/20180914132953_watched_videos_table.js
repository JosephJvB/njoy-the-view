
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('watched_videos', (table) => {
    table.increments('id').primary()
    table.string('vid_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('watched_videos')
};
