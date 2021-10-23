exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("users", table => {
      table
        .bigIncrements("id")
        .primary()
        .unsigned()
        .notNullable();
      table
        .string("email", 30)
        .unique()
        .notNullable();
    }),

    knex.schema.createTable("accounts", table => {
      table
        .bigIncrements("id")
        .primary()
        .unsigned()
        .notNullable();
      table
        .integer("user_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("url", 140).notNullable();
      table.string("username", 50).notNullable();
      table.string("password", 90).notNullable();
      table.timestamp("date").defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTableIfExists("accounts"),
    knex.schema.dropTableIfExists("users")
  ]);
};
