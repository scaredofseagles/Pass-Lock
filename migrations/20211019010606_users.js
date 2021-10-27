exports.up = knex => {
  return knex.schema.table("users", table => {
    table.string("password", 90).notNullable();
    table.string("first_name", 50).notNullable();
    table.string("last_name", 50).notNullable();
    table
      .boolean("acct_locked")
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = knex => {
  return knex.schema.table("users", table => {
    table.dropColumn("password");
    table.dropColumn("first_name");
    table.dropColumn("last_name");
    table.dropColumn("acct_locked");
  });
};
