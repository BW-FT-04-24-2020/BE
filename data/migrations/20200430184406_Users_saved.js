
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments('user_id');
    
        users.string('name', 100).notNullable();
        users.string('password', 100).notNullable();
        users.string('email', 100).notNullable().unique();
      })
      .createTable('saved_strains', saved_strains => {
        saved_strains.increments('saved_strain_id');
        saved_strains.integer('user')
            .unsigned()
            .notNullable()
            .references('user_id')
            .inTable('users')
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        saved_strains.json('strain')
            .unsigned()
            .notNullable();
        })
    };
    
    exports.down = function(knex) {
      return knex.schema.dropTableIfExists('saved_strains').dropTableIfExists('users');
    };