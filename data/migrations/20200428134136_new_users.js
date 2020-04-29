
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
    
        users.string('name', 100).notNullable();
        users.string('password', 100).notNullable();
        users.string('email', 100).notNullable().unique();
        
      });
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('users');
    };