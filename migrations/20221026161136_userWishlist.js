/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable("user_wishlist", table => {
        table.increments('id').primary();
        table.string("sneaker_name");
        table.integer('user_id').references('id').inTable('users');
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("user_wishlist");
};
