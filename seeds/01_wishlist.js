/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  
  await knex('user_wishlist').insert([
    { sneaker_name: 'eyez', user_id: 1},
    { sneaker_name: 'nike', user_id: 2},
    { sneaker_name: 'airforce', user_id: 3},
  
  ]);
};
