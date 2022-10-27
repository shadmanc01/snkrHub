/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('users').del()
  // await knex('users').insert([
  //   {id: 1, username: 'farouk', password: '1',},{id: 2, username: 'farouks', password: '1',}
  // ]);

  await knex('user_wishlist').del()
  await knex('user_wishlist').insert([
    {id: 1, sneaker_name: 'rowValue1',user_id: 3},
    {id: 2, sneaker_name: 'rowValue2',user_id: 3},
    {id: 3, sneaker_name: 'rowValue3',user_id: 3}
  ]);
};
