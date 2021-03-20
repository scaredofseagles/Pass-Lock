
exports.up = function(knex) {
  return knex.schema.table('accounts', table => table.text('image'))
};

exports.down = function(knex) {
  return knex.schema.table('accounts', table => table.dropColumn('image'));
};
