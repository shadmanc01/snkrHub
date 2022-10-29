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

 
  await knex('users').insert([
    { username: 'jhon', password: '123'},
    { username: 'Gp', password: '123'},
    { username: 'cris', password: '123'},

    
  ]);
  
};
