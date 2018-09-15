
exports.up = function(knex, Promise) {
  return knex.schema.table('watched_videos', function(table) {
    table.integer('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('watched_videos', function (table) {
    table.dropColumn('rating')
  })
};
