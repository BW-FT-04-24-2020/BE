
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'testing1', password: 'testing1', email: 'testing1@gmail.com', name: 'testing101', legal_age: true},
        {username: 'testing2', password: 'testing2', email: 'testing2@gmail.com', name: 'testing202', legal_age: true},
        {username: 'testing3', password: 'testing3', email: 'testing3@gmail.com', name: 'testing303', legal_age: true},
        {username: 'testing4', password: 'testing4', email: 'testing4@gmail.com', name: 'testing404', legal_age: true},
        {username: 'testing5', password: 'testing5', email: 'testing5@gmail.com', name: 'testing505', legal_age: true},
        {username: 'testing6', password: 'testing6', email: 'testing6@gmail.com', name: 'testing606', legal_age: true}
      ]);
    });
};