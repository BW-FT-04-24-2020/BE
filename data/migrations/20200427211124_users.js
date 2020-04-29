
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        // primary key, id that autoincrements
        tbl.increments('id');

        tbl.string('username', 255)
            .notNullable()
            .unique()
        
        tbl.string('password', 255)
            .notNullable()

        tbl.string('email', 255)
            .notNullable()
            .unique()

        tbl.string('name', 255)
            .notNullable()

        tbl.boolean('legal_age')
            .defaultTo(false)
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users');
};
