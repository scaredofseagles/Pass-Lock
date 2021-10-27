exports.up = knex => {
  return knex.schema.createTable("sessions", table => {
    table
      .bigIncrements("id")
      .primary()
      .unsigned()
      .notNullable();
    table
      .uuid("token")
      .unique()
      .notNullable();
    table
      .uuid("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp("last_access")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("sessions");
};
